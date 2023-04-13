const passport = require("passport");
// 구조분해할당에서 변수명 변경하기
// Strategy의 이름 설정에 따라 passport.authenticate("local",(err,user,info)=>{})의 local값이 바뀜
// 만약 Strategy: FacebookStrategy -> passport.authenticate("facebook",(err,user,info)=>{})
// 만약 Strategy: KakaoStrategy -> passport.authenticate("kakao",(err,user,info)=>{})
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        // req.body.??? -> ???에 해당하는 값 입력
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          // 클라이언트에러
          const user = await User.findOne({
            where: { email },
          });

          if (!user) {
            // 이메일 틀린 경우
            // done(서버에러, 성공객체, 클라이언트에러)
            return done(null, false, {
              reason: "아이디 또는 비밀번호가 일치하지 않습니다.",
            });
          }
          // bcrypt.compare(사용자가 입력한 password, DB에 저장된 password);
          // 만약 일치하면 true 반환 -> 로그인 시 입력한 비밀번호는 함수 내부에서 알아서 해싱해줌
          const result = await bcrypt.compare(password, user.password);

          if (result) {
            return done(null, user);
          }
          // 비밀번호 틀린 경우
          return done(null, false, {
            reason: "아이디 또는 비밀번호가 일치하지 않습니다.",
          });
        } catch (error) {
          // 서버에러
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
