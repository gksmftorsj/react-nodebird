const Sequelize = require("sequelize");
const comment = require("./comment");
const hashtag = require("./hashtag");
const image = require("./image");
const post = require("./post");
const user = require("./user");
// ||는 기본값으로 a || b 인경우 a값이 없으면 b가 기본값이 된다.
const env = process.env.NODE_ENV || "development";
// 즉 config = config.json의 "development"에 해당한다.
const config = require("../config/config")[env];
const db = {};

// node와 mysql 연결
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// db.Comment = require("./comment")(sequelize, Sequelize);
// db.Hashtag = require("./hashtag")(sequelize, Sequelize);
// db.Image = require("./image")(sequelize, Sequelize);
// db.Post = require("./post")(sequelize, Sequelize);
// db.User = require("./users")(sequelize, Sequelize);

db.Comment = comment;
db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
