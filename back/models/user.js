const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        email: {
          type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: false, // 필수
          unique: true, // 고유한 값
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false, // 필수
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci", // 한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  }
};

// // sequelize 기본형태
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define(
//     "User", // mysql에는 users 테이블 생성
//     {
//       // id: {}, id는 1,2,3,4... 순서대로 mysql에서 기본적으로 넣어줌
//       email: {
//         type: DataTypes.STRING(30), // STRING, TEXT(무제한), BOOLEAN, INTEGER, FLOAT, DATETIME
//         allowNull: false, // 필수
//         unique: true, // 고유한 값
//       },
//       nickname: {
//         type: DataTypes.STRING(30),
//         allowNull: false, // 필수
//       },
//       password: {
//         type: DataTypes.STRING(100),
//         allowNull: false, // 필수
//       },
//     },
//     {
//       charset: "utf8",
//       collate: "utf8_general_ci", // 한글 저장
//     }
//   );
//   User.associate = (db) => {
//     db.User.hasMany(db.Post);
//     db.User.hasMany(db.Comment);
//     db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
//     // through는 table명 변경, foreignKey는 column명 변경
//     db.User.belongsToMany(db.User, {
//       through: "Follow",
//       as: "Followers",
//       // 팔로워을 찾으려면 우선 팔로잉를 먼저 찾고 거기에 해당하는 팔로워 찾기
//       foreignKey: "FollowingId",
//     });
//     db.User.belongsToMany(db.User, {
//       through: "Follow",
//       as: "Followings",
//       // 팔로잉을 찾으려면 우선 팔로워를 먼저 찾고 거기에 해당하는 팔로잉 찾기
//       foreignKey: "FollowerId",
//     });
//   };
//   return User;
// };
