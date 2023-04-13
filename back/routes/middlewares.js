exports.isLoggedIn = (req, res, next) => {
  // 로그인 되어 있으면 req.isAuthenticated() -> true
  if (req.isAuthenticated()) {
    // next안에 에러를 넣으면 에러처리 하는 친구
    // 그냥 next만 쓰면 다음 미들웨어로 넘어가는 친구
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인하지 않은 사용자만 접근 가능합니다.");
  }
};
