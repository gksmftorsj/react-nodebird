const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

module.exports = () => {
  // req.login한 뒤에 실행됨 -> req.login의 user가 serializeUser의 user에 들어감
  passport.serializeUser((user, done) => {
    // 유저 정보중에서 쿠키랑 묶어줄 id만 저장하기
    done(null, user.id);
  });

  // 로그인 한 뒤부터는 router가 실행되기 전에 매번 실행됨 -> 그래서 req.user에 정보들이 들어있음
  // 쿠키랑 묶여있는 id를 통해 유저정보 가져오기
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // DB에서 찾은 user 정보를 req.user안에 넣어줌
    } catch (error) {
      console.error(error);
      // passport는 done으로 에러처리
      done(error);
    }
  });
  local();
};
