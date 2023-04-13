const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        // RetweetId
      },
      {
        modelName: "Post",
        tableName: "posts",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: "Retweet" }); // post.addRetweet
  }
};

// module.exports = (sequelize, DataTypes) => {
//   const Post = sequelize.define(
//     "Post",
//     {
//       content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//     },
//     {
//       charset: "utf8mb4",
//       collate: "utf8mb4_general_ci", // 이모티콘 저장 - utf8mb4
//     }
//   );
//   Post.associate = (db) => {
//     db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
//     db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); // post.addHashtags
//     db.Post.hasMany(db.Comment); // post.addComments, post.getComments
//     db.Post.hasMany(db.Image); // post.addImages(복수라서 Images), post.getImages
//     // 나중에 as에 따라서 post.getLikers처럼 게시글 좋아요 누른 사람을 가져오게 됨
//     db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // post.addLikers, post.removeLikers
//     // as Retweet을 하면 PostId에서 RetweetId로 변경됨
//     db.Post.belongsTo(db.Post, { as: "Retweet" }); // post.addRetweet
//   };
//   return Post;
// };
