const express = require("express");
const { Op } = require("sequelize");

const { Post, User, Image, Comment } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const where = {};
    // querystring 사용하면 req.query에 담겨있음
    if (parseInt(req.query.lastId, 10)) {
      // 초기 로딩이 아닐 때, lastId보다 작은
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    // 초기 로딩일 때
    const posts = await Post.findAll({
      where,
      // lastId가 11인데 삭제 됐을 때 11보다 작은 10만 가져오면 됨
      // where: { id: lastId },
      // 1~10 가져오기 -> index 0부터 시작하니까 만약 offset: 10이면 11~20 가져오기
      limit: 10,
      // offset은 게시글 가져오는 중간에 추가, 삭제하는 기능에서는 중간에 꼬이기 때문에 사용X
      // offset: 0,
      // 2차원배열인 이유는 여러 기준으로 정렬할 수 있기 때문임
      // "ASC" -> 오름차순, "DESC" -> 내림차순
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ],
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
    res.status(200).send(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
