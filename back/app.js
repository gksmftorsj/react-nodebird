const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const passportConfig = require("./pssport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

// get과 delete는 axios 두 번째 매개변수에 데이터 못넘기는데 post, pust, patch는 넘길 수 있음
// get -> 가져올 때
// post -> 생성할 떄
// put -> 전체수정 할 때
// delete -> 제거할 때
// patch -> 부분수정할 때
// options -> 찔러볼 때
// head -> 헤더만 가져올 때(원래 헤더 or 바디 가져옴)

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
  app.use(
    cors({
      origin: ["https://nodebird.shop"],
      credentials: true,
    })
  );
} else {
  app.use(morgan("dev"));
  // res.setHeader("Access-Control-Allow-Origin", "*") 이것과 같음
  app.use(
    cors({
      // origin: true로 설정해두면 * 대신 보낸 곳의 주소가 자동으로 들어가 편리함
      origin: true,
      // 쿠키 공유 -> origin에서 *사용 못함
      credentials: true,
    })
  );
}
// __dirname/uploads 경로에 있는 파일을 제공함
// 따라서 위의 코드는 서버에 대해 루트 경로("/")로 요청이 들어오면 uploads 폴더에 있는 정적 파일을 제공하도록 설정함
// http://localhost:3000/image.jpg와 같은 요청이 들어오면, uploads 폴더에서 image.jpg 파일을 찾아 응답으로 보내게 됨
// __dirname + "uploads" -> 운영체제에 대한 차이점 때문에 문제가 될 수 있기 때문에 운영체제에 맞게 해주는 path.join()을 사용
// "/" -> http://localhost:3065/ , "images" -> http://localhost:3065/images
app.use("/", express.static(path.join(__dirname, "uploads")));
// 프론트에서 axios에서 json형식으로 넘긴 데이터를 req.body로 넣어주는 역할 -> api요청보다 위에 있어야 함
app.use(express.json());
// 프론트에서 일반 form 형식으로 넘긴 데이터를 req.body로 넣어주는 역할 -> api요청보다 위에 있어야 함
app.use(express.urlencoded({ extended: true }));
// 쿠키 세션 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    proxy: process.env.NODE_ENV === "production",
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      domain: process.env.NODE_ENV === "production" && ".nodebird.shop",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

// 기본적으로 에러처리 middleware가 존재 -> next(err)로 에러처리를 하면 바로 이쪽으로 넘어옴
// 에러처리 middleware -> 특별하게 에러처리 하고 싶을 때
app.use((err, req, res, next) => {});

app.listen(3065, () => {
  console.log("서버 실행 중!");
});
