const DataTypes = require("sequelize");
const { Model } = DataTypes;

// 2020... 최신문법
module.exports = class Comment extends Model {
  // static init을 하면서 Comment에 init을 하는게 아니라 Model의 init을 호출해줘여 table이 생성됨
  // sequelize.define -> Model.init
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: "Comment",
        tableName: "comments",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const Comment = sequelize.define(
//     "Comment",
//     {
//       content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       // UserId: 1
//       // PostId: 3
//     },
//     {
//       charset: "utf8mb4",
//       collate: "utf8mb4_general_ci",
//     }
//   );
//   Comment.associate = (db) => {
//     db.Comment.belongsTo(db.User);
//     db.Comment.belongsTo(db.Post);
//   };
//   return Comment;
// };
