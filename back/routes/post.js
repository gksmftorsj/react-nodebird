const express = require("express");
const multer = require("multer");
const path = require("path");
// filesystem조작하는 fs
const fs = require("fs");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

const { Post, Image, User, Comment, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

try {
  // 업로드 폴더 있는지 검사
  fs.accessSync("uploads");
} catch (error) {
  // 폴더 없으면 생성
  console.log("uploads 폴더가 없으므로 생성합니다");
  fs.mkdirSync("uploads");
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

// multer -> single이면 req.file, array이면 req.files / 이미지나 파일이 아닌 나머지 text같은 것들은 req.body에 담겨있음
// Node.js에서 'multipart/form-data' 형식의 데이터를 처리하기 위해서는 Multer 미들웨어를 사용하는 것이 일반적임
// imgae만 먼저 업로드 하고 미리보기 띄운 후 content 작성하면 content 업로드
// image 업로드 되고 글 작성을 안하면 저장된 image 삭제 안하고 냅둠 -> image들도 다 자산이기 때문에 용량 차지하는 것보다 삭제 안하는게 더 이득이 큼
const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: "react-nodebird-sss3",
    key(req, file, cb) {
      cb(null, `original/${Date.now()}} ${path.basename(file.originalname)}`);
    },
  }),
  // storage: multer.diskStorage({
  //   destination(req, file, done) {
  //     done(null, "uploads");
  //   },
  //   filename(req, file, done) {
  //     // 제로초.png
  //     const ext = path.extname(file.originalname); // 확장자 추출(.png)
  //     const basename = path.basename(file.originalname, ext); // 제로초
  //     done(null, basename + "_" + new Date().getTime() + ext); // 제로초1235312.png
  //   },
  // }),
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB
});

router.post("/", isLoggedIn, upload.none(), async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    // 방금 생성한 게시글이 post객체에 담겨서 나옴
    const post = await Post.create({
      content: req.body.content,
      // 로그인을 했기 때문에 deserializeUser를 통해 req.user에 있는 id를 사용할 수 있음
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(
        // Array.from()은 매개변수인 이터러블 객체의 요소를 하나씩 순회하면서 값을 배열에 추가함 그래서 [...]과 같은 결과를 반환함
        // [...new Set(hashtags)] == Array.from(new Set(hashtags))
        Array.from(new Set(hashtags)).map((tag) =>
          // 같은 값이 있으면 가져오고 Create X, 없으면 Create O
          Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      );
      // result -> [[노드, true], [리액트, true]]
      // 새로 생성된 경우 true, 이미 존재하는 경우 false
      await post.addHashtags(result.map((v) => v[0]));
    }
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {
        // 이미지를 여러 개 올리면 imgae: [제로초.png, 부기추.png]
        // Promise가 여러개니까 await Promise.all()로 묶어주면 됨
        const images = await Promise.all(
          req.body.image.map((image) => Image.create({ src: image }))
        );
        await post.addImages(images);
      } else {
        // 이미지를 하나만 올리면 image: 제로초.png
        const image = await Image.create({
          src: req.body.image,
        });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers", // as 써줘야 구별됨
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post(
  "/images",
  isLoggedIn,
  // imput의 name입력, array인 이유는 여러 개일 경우를 위해, 한 개만 올릴 거면 single, 이미지 없고 text만 있으면 none, file input이 2개면 fields
  // file객체이기 때문에 array()를 사용
  upload.array("image"),
  (req, res, next) => {
    // req.files에 upload된 정보가 들어있음
    console.log(req.files);
    res.json(req.files.map((v) => v.location));
  }
);

router.post("/:postId/comment", isLoggedIn, async (req, res) => {
  try {
    // 악성유저 막기 위해서 존재하는 post인지 확인
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(404).send("존재하지 않는 게시글입니다.");
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers", // as 써줘야 구별됨
          attributes: ["id"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/:postId/retweet", isLoggedIn, async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
      include: [
        {
          model: Post,
          as: "Retweet",
        },
      ],
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    if (
      req.user.id === post.UserId ||
      (post.Retweet && post.Retweet.UserId === req.user.id)
    ) {
      return res.status(403).send("자신의 글은 리트윗할 수 없습니다.");
    }
    // post.RetweetId가 truthly한 경우 post.RetweetId 할당, falsy한 경우 post.id 할당
    const retweetTargetId = post.RetweetId || post.id;
    const exPost = await Post.findOne({
      where: {
        UserId: req.user.id,
        RetweetId: retweetTargetId,
      },
    });
    if (exPost) {
      return res.status(403).send("이미 리트윗했습니다.");
    }
    const retweet = await Post.create({
      UserId: req.user.id,
      RetweetId: retweetTargetId,
      content: "retweet",
    });
    const retweetWithPrevPost = await Post.findOne({
      where: { id: retweet.id },
      include: [
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른 사람
          as: "Likers", // as 써줘야 구별됨
          attributes: ["id"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
      ],
    });
    res.status(201).json(retweetWithPrevPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    // DB조작할 때는 항상 await 붙여주기
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
