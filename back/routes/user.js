const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
// 구조분해 할당하면 db.User 대신 바로 User 사용가능
const { User, Post, Image, Comment } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/", async (req, res, next) => {
  // header안에 cookie 들어있음
  console.log(req.headers);
  try {
    // 로그아웃 안되어있을 때 처리
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followers", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send("없는 사람을 찾으려고 하시네요?");
    }
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followings", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send("없는 사람을 찾으려고 하시네요?");
    }
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.userId },
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: Post,
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followings",
          attributes: ["id"],
        },
        {
          model: User,
          as: "Followers",
          attributes: ["id"],
        },
      ],
    });
    if (fullUserWithoutPassword) {
      // sequelize에서 보내준 데이터는 json이 아니기 때문에 json으로 바꿔줌
      // 개인정보 침해 예방
      const data = fullUserWithoutPassword.toJSON();
      data.Posts = data.Posts.length;
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      // res.json()은 객체를 자동으로 json형식으로 변환해서 전달함
      // res.send()는 있는 그대로를 전달함
      res.status(200).json(data);
    } else {
      res.status(404).json("존재하지 않는 사용자입니다.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id/posts", async (req, res, next) => {
  // GET /user/1/posts
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (user) {
      const where = {};
      if (parseInt(req.query.lastId, 10)) {
        // 초기 로딩이 아닐 때
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
      } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
      const posts = await user.getPosts({
        where,
        limit: 10,
        order: [["createdAt", "DESC"]],
        include: [
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
          {
            model: User,
            attributes: ["id", "nickname"],
          },
          {
            model: User,
            through: "Like",
            as: "Likers",
            attributes: ["id"],
          },
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
        ],
      });
      console.log(posts);
      res.status(200).json(posts);
    } else {
      res.status(404).send("존재하지 않는 사용자입니다.");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// middleware 확장을 통해 req,res,next 쓸 수 있게
// done(서버에러, 성공객체, 클라이언트에러) -> (err, user, info)로 전달됨
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // 서버에러인 경우
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      // 401 = 허가되지 않음
      return res.status(401).send(info.reason);
    }
    // passport 로그인
    return req.login(user, async (loginErr) => {
      // 우리 서비스 말고 passport에서 한 번 더 로그인 할 때 에러처리
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // attributes: ["id", "nickname", "email"],
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            // hasMany라서 model: Post가 복수형이 되어 me.Posts가 됨
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });

      // req.login을 하면 -> 내부적으로 res.setHeader("Cookie", "cxlhy")을 보내줌 -> 알아서 session이랑도 연결해줌
      // so user정보와 id만 저장한 쿠키를 보내줌
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  try {
    // findOne도 비동기라 await 해줘야 함
    // 프론트에서 입력받은 이메일과 같은 이메일이 DB에 있는지 확인
    //-> 같은게 있으면 그 값이 담기고 없으면 null
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      // 200 성공
      // 300 리다이렉트
      // 400 클라이언트 에러
      // 500 서버 에러
      // 응답은 무조건 한 번만 보내야 하기 때문에 return 해줘서 아래 코드 실행 안되도록 해줘야 함
      // saga에서 error.response.data가 됨
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }
    // bcrypt도 비동기라 await 해줘야 함
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    // async/await를 사용하지 않으면 User.create()함수는 비동기적으로 실행됨
    // -> 그러면 새로운 사용자가 생성되기 전에 res.json()이 먼저 실행됨
    // 그러면 사용자 생성 여부를 확인 못하고 응답을 보내야 함
    // so async/await를 통해 새로운 사용자 생성을 기다린 후 응답을 보내도록 해줘야 함
    await User.create({
      // 프론트에서 받은 데이터는 req.body에 담겨있음
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3060");
    // 201 = 잘 생성됨
    res.status(201).send("유저정보 DB 저장성공");
  } catch (error) {
    console.error(error);
    // next를 통해 에러를 보내면 에러들이 한방에 처리해줌
    next(error); // next = status 500
  }
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // passport@0.6이 되면서 로그인할 때마다 세션 쿠키가 변경되고 로그아웃할 때에도 세션 쿠키가 정리되는 것 같습니다.
    // so -> req.session.destroy(); 필요X
    res.send("로그아웃 완료");
  });
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람을 팔로우하려고 하시네요?");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람을 언팔로우하려고 하시네요?");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/follower/:userId", isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("없는 사람을 차단하려고 하시네요?");
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
