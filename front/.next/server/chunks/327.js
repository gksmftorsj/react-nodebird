"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 1352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ backURL)
/* harmony export */ });
const backURL = "http://api.nodebird.shop";

/***/ }),

/***/ 2655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3317);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5897);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__]);
([_user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



 // // reducer 합치기
// const rootReducer = combineReducers({
//   // SSR을 위한 index reducer
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         console.log("HYDRATE", action);
//         return { ...state, ...action.payload };
//       default:
//         return state;
//     }
//   },
//   // 알아서 mapping 시켜줌
//   user,
//   post,
// });
// const rootReducer = combineReducers({
//   user,
//   post,
// });
// 위와 동일한데 복잡하게(확장가능하게) 만든 것

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;

    default:
      {
        const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
          user: _user__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
          post: _post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Co
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ag": () => (/* binding */ LOAD_USER_POSTS_SUCCESS),
/* harmony export */   "Co": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "EG": () => (/* binding */ LOAD_POST_REQUEST),
/* harmony export */   "FM": () => (/* binding */ RETWEET_FAILURE),
/* harmony export */   "Gz": () => (/* binding */ LIKE_POST_SUCCESS),
/* harmony export */   "HU": () => (/* binding */ REMOVE_POST_REQUEST),
/* harmony export */   "LF": () => (/* binding */ LOAD_HASHTAG_POSTS_SUCCESS),
/* harmony export */   "N3": () => (/* binding */ LOAD_USER_POSTS_FAILURE),
/* harmony export */   "Ot": () => (/* binding */ ADD_COMMENT_REQUEST),
/* harmony export */   "Po": () => (/* binding */ REMOVE_IMAGE),
/* harmony export */   "QA": () => (/* binding */ UPLOAD_IMAGES_REQUEST),
/* harmony export */   "T5": () => (/* binding */ LOAD_POSTS_FAILURE),
/* harmony export */   "VT": () => (/* binding */ UNLIKE_POST_REQUEST),
/* harmony export */   "Ws": () => (/* binding */ REMOVE_POST_FAILURE),
/* harmony export */   "XD": () => (/* binding */ UNLIKE_POST_SUCCESS),
/* harmony export */   "YQ": () => (/* binding */ LOAD_POST_SUCCESS),
/* harmony export */   "ZL": () => (/* binding */ RETWEET_SUCCESS),
/* harmony export */   "ZP": () => (/* binding */ LOAD_POSTS_SUCCESS),
/* harmony export */   "_s": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "a0": () => (/* binding */ RETWEET_REQUEST),
/* harmony export */   "aO": () => (/* binding */ LOAD_POSTS_REQUEST),
/* harmony export */   "az": () => (/* binding */ LOAD_HASHTAG_POSTS_REQUEST),
/* harmony export */   "cT": () => (/* binding */ LIKE_POST_FAILURE),
/* harmony export */   "gq": () => (/* binding */ UNLIKE_POST_FAILURE),
/* harmony export */   "hX": () => (/* binding */ UPLOAD_IMAGES_FAILURE),
/* harmony export */   "kv": () => (/* binding */ UPLOAD_IMAGES_SUCCESS),
/* harmony export */   "nv": () => (/* binding */ ADD_COMMENT_SUCCESS),
/* harmony export */   "rK": () => (/* binding */ REMOVE_POST_SUCCESS),
/* harmony export */   "rX": () => (/* binding */ ADD_COMMENT_FAILURE),
/* harmony export */   "rl": () => (/* binding */ LOAD_POST_FAILURE),
/* harmony export */   "tP": () => (/* binding */ ADD_POST_FAILURE),
/* harmony export */   "uk": () => (/* binding */ LOAD_HASHTAG_POSTS_FAILURE),
/* harmony export */   "x5": () => (/* binding */ LOAD_USER_POSTS_REQUEST),
/* harmony export */   "xD": () => (/* binding */ LIKE_POST_REQUEST),
/* harmony export */   "z9": () => (/* binding */ ADD_POST_REQUEST)
/* harmony export */ });
/* unused harmony exports initialState, generateDummyPost, addPost, addComment */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5031);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_produce__WEBPACK_IMPORTED_MODULE_0__, _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__]);
([_util_produce__WEBPACK_IMPORTED_MODULE_0__, _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

 // import produce from "immer";


_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.seed(123);
const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadHashtagPostsLoading: false,
  loadHashtagPostsDone: false,
  loadHashtagPostsError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortId.generate(),
  User: {
    id: shortId.generate(),
    nickname: faker.name.firstName()
  },
  content: faker.lorem.paragraph(),
  Images: [{
    id: shortId.generate(),
    // src: "http://placehold.it/320x100"
    src: faker.image.animals(640, 480, true)
  }],
  Comments: [{
    id: shortId.generate(),
    User: {
      id: shortId.generate(),
      nickname: faker.name.firstName()
    },
    content: faker.lorem.sentence()
  }]
}));
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "제로초"
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "제로초"
  }
}); // reducer => 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
// (이전상태, 액션) => 다음상태


const reducer = (state = initialState, action) => {
  // 기본 immer 형태 -> state가 draft로 이름이 변경됨 -> 알아서 immer가 불변성 지키면서 다음 상태로 만들어줌 그래서 불변성을 따로 안지켜도 됨
  // so draft를 바꾸면 immer가 다음 state를 불변성 있게 만들어줌
  return (0,_util_produce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, draft => {
    switch (action.type) {
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadHashtagPostsLoading = true;
        draft.loadHashtagPostsDone = false;
        draft.loadHashtagPostsError = null;
        break;

      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.loadHashtagPostsLoading = false;
        draft.loadHashtagPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadHashtagPostsLoading = false;
        draft.loadHashtagPostsError = action.error;

      case LOAD_USER_POSTS_REQUEST:
        draft.loadUserPostsLoading = true;
        draft.loadUserPostsDone = false;
        draft.loadUserPostsError = null;
        break;

      case LOAD_USER_POSTS_SUCCESS:
        draft.loadUserPostsLoading = false;
        draft.loadUserPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_USER_POSTS_FAILURE:
        draft.loadUserPostsLoading = false;
        draft.loadUserPostsError = action.error;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.unshift(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // // 댓글 단 포스트의 id와 같은 id의 인덱스를 메인포스트에서 찾기
          // const postIndex = state.mainPosts.findIndex(
          //   (v) => v.id === action.data.postId
          // );
          // // 찾은 인덱스에 해당하는 메인포스트를 post 변수에 복제하여 새로운 객체 생성
          // const post = { ...state.mainPosts[postIndex] };
          // // 새롭게 생성한 객체에 작성한 댓글 내용 추가
          // post.Comments = [dummyComment(action.data.content), ...post.Comments];
          // // 기존 메인포스트를 복제한 새로운 메인포스트 배열 생성
          // const mainPosts = [...state.mainPosts];
          // // 맨 처음 찾은 인덱스에 해당하는 복제한 새로운 메인포스트에 기존 객체 없애고 새롭게 생성한 객체 넣기
          // mainPosts[postIndex] = post;
          // return {
          //   ...state,
          //   mainPosts,
          //   addCommentLoading: false,
          //   addCommentDone: true,
          // };
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ UNFOLLOW_REQUEST),
/* harmony export */   "Cq": () => (/* binding */ LOAD_MY_INFO_FAILURE),
/* harmony export */   "D7": () => (/* binding */ UNFOLLOW_SUCCESS),
/* harmony export */   "DG": () => (/* binding */ FOLLOW_FAILURE),
/* harmony export */   "DU": () => (/* binding */ LOAD_USER_SUCCESS),
/* harmony export */   "G$": () => (/* binding */ LOAD_FOLLOWERS_REQUEST),
/* harmony export */   "I": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "IB": () => (/* binding */ REMOVE_FOLLOWER_REQUEST),
/* harmony export */   "IK": () => (/* binding */ REMOVE_FOLLOWER_FAILURE),
/* harmony export */   "IQ": () => (/* binding */ LOAD_FOLLOWINGS_SUCCESS),
/* harmony export */   "KK": () => (/* binding */ REMOVE_POST_OF_ME),
/* harmony export */   "LJ": () => (/* binding */ LOAD_MY_INFO_SUCCESS),
/* harmony export */   "Ls": () => (/* binding */ LOAD_USER_FAILURE),
/* harmony export */   "OR": () => (/* binding */ UNFOLLOW_FAILURE),
/* harmony export */   "Oy": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "PG": () => (/* binding */ CHANGE_NICKNAME_FAILURE),
/* harmony export */   "RZ": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "U_": () => (/* binding */ FOLLOW_REQUEST),
/* harmony export */   "VP": () => (/* binding */ SIGN_UP_DONE_RESET),
/* harmony export */   "Xd": () => (/* binding */ LOAD_FOLLOWINGS_REQUEST),
/* harmony export */   "Y6": () => (/* binding */ LOAD_FOLLOWERS_SUCCESS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bP": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "dQ": () => (/* binding */ LOAD_USER_REQUEST),
/* harmony export */   "dr": () => (/* binding */ CHANGE_NICKNAME_SUCCESS),
/* harmony export */   "kV": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "mD": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "mv": () => (/* binding */ FOLLOW_SUCCESS),
/* harmony export */   "o": () => (/* binding */ CHANGE_NICKNAME_REQUEST),
/* harmony export */   "pK": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "pe": () => (/* binding */ REMOVE_FOLLOWER_SUCCESS),
/* harmony export */   "qq": () => (/* binding */ LOAD_MY_INFO_REQUEST),
/* harmony export */   "qt": () => (/* binding */ LOAD_FOLLOWINGS_FAILURE),
/* harmony export */   "tP": () => (/* binding */ loginRequestAction),
/* harmony export */   "uF": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "vR": () => (/* binding */ logoutRequestAction),
/* harmony export */   "vT": () => (/* binding */ LOAD_FOLLOWERS_FAILURE),
/* harmony export */   "x6": () => (/* binding */ ADD_POST_TO_ME),
/* harmony export */   "yK": () => (/* binding */ LOG_IN_FAILURE)
/* harmony export */ });
/* unused harmony export initialState */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_produce__WEBPACK_IMPORTED_MODULE_0__]);
_util_produce__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import produce from "immer";

const initialState = {
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoadingId: null,
  // 팔로우 or 언팔로우 시도중인 아이디
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  me: null,
  userInfo: null
};
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const SIGN_UP_DONE_RESET = "SIGN_UP_DONE_RESET";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: "제로초",
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [],
  Followers: []
}); // 2번 -> 이 action이 saga의 logIn의 action이 됨
// action은 원래 객체 -> 동적인 action이 필요할 때는 action creator라는 함수를 만들어 주는 것
// 원래 dispatch 자리에는 객체가 들어가는게 맞다


const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST,
    data
  };
}; // 화살표가 붙으면 return 생략해준 것임

const reducer = (state = initialState, action) => (0,_util_produce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(state, draft => {
  switch (action.type) {
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null;
      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data;
      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      draft.followLoadingId = action.data;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      draft.followLoadingId = action.data;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false; // 불변성 안지키려면 원래 splice를 써야함

      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;
    // 3번

    case LOG_IN_REQUEST:
      draft.logInLoading = true; // 로그인 요청 중에는 Error 발생 안하도록

      draft.logInError = null;
      draft.logInDone = false;
      break;
    // 6번

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case SIGN_UP_DONE_RESET:
      draft.signUpDone = false;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };

    case REMOVE_POST_OF_ME:
      // 성능이슈 생기면 unshift를 사용
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      break;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9608);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8514);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1352);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_4__/* .backURL */ .y; // 쿠키 공유

axios__WEBPACK_IMPORTED_MODULE_1__["default"].defaults.withCredentials = true;
function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ postSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5031);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5897);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3317);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _reducers_post__WEBPACK_IMPORTED_MODULE_3__, _reducers_user__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _reducers_post__WEBPACK_IMPORTED_MODULE_3__, _reducers_user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(retweetAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .RETWEET_SUCCESS */ .ZL,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .RETWEET_FAILURE */ .FM,
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadHashtagPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_HASHTAG_POSTS_SUCCESS */ .LF,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_HASHTAG_POSTS_FAILURE */ .uk,
      data: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserPostsAPI, action.data, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_USER_POSTS_SUCCESS */ .Ag,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_USER_POSTS_FAILURE */ .N3,
      data: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_POST_SUCCESS */ .YQ,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_POST_FAILURE */ .rl,
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  // lastId가 undefined인 경우 0으로
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadPostsAPI, action.lastId);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_POSTS_SUCCESS */ .ZP,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_POSTS_FAILURE */ .T5,
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  // form데이터는 감싸면 안되고 바로 data로 넣어줘야함
  // return axios.post("/post", { content: data });
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .ADD_POST_SUCCESS */ ._s,
      data: result.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .ADD_POST_TO_ME */ .x6,
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .ADD_POST_FAILURE */ .tP,
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/post/images", data);
}

function* uploadImages(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(uploadImagesAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .UPLOAD_IMAGES_SUCCESS */ .kv,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .UPLOAD_IMAGES_FAILURE */ .hX,
      error: err.response.data
    });
  }
} // delete는 data 못넣음


function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(removePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .REMOVE_POST_SUCCESS */ .rK,
      data: result.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .REMOVE_POST_OF_ME */ .KK,
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .REMOVE_POST_FAILURE */ .Ws,
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addCommentAPI, action.data);
    yield console.log(result);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .ADD_COMMENT_SUCCESS */ .nv,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .ADD_COMMENT_FAILURE */ .rX,
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(likePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LIKE_POST_SUCCESS */ .Gz,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LIKE_POST_FAILURE */ .cT,
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unlikePostAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .UNLIKE_POST_SUCCESS */ .XD,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .UNLIKE_POST_FAILURE */ .gq,
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .RETWEET_REQUEST */ .a0, retweet);
}

function* watchUploadImages() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .UPLOAD_IMAGES_REQUEST */ .QA, uploadImages);
}

function* watchLikePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LIKE_POST_REQUEST */ .xD, likePost);
}

function* watchUnlikePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .UNLIKE_POST_REQUEST */ .VT, unlikePost);
}

function* watchLoadHashtagPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_HASHTAG_POSTS_REQUEST */ .az, loadHashtagPosts);
}

function* watchLoadUserPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_USER_POSTS_REQUEST */ .x5, loadUserPosts);
} // throttle -> 시간으로 요청 제한하기(특별한 경우)


function* watchLoadPosts() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_POSTS_REQUEST */ .aO, loadPosts);
}

function* watchLoadPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .LOAD_POST_REQUEST */ .EG, loadPost);
}

function* watchAddPost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .ADD_POST_REQUEST */ .z9, addPost);
}

function* watchRemovePost() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .REMOVE_POST_REQUEST */ .HU, removePost);
}

function* watchAddComment() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__/* .ADD_COMMENT_REQUEST */ .Ot, addComment);
} // while(true)를 사용하면 일회용이 아닌 무한사용 가능 -> takeEvery를 사용하면 while문 대체가능
// function* watchAddPost() {
//   while (true) {
//     yield take("ADD_POST_REQUEST", addPost);
//   }
// }


function* postSaga() {
  // all은 배열을 받는데 배열 안에 들어있는 것들을 한 번에 실행해줌
  // fork는 generator 함수를 실행한다는 뜻
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRetweet), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnlikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadHashtagPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadUserPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemovePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddComment)]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ userSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3317);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__]);
([_reducers_user__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // API요청 -> 예외로 generator를 붙이면 에러남

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/login", data);
}

function* logIn(action) {
  try {
    // call은 동기함수 호출 -> logInAPI가 리턴할 때까지 기다려서 result에 값을 넣어줌
    // fork는 비동기함수 호출 -> logInAPI 요청 보내버리고 결과 안기다리고 바로 다음 코드 실행됨
    // call과 fork는 함수 호출해서 값을 넣어줄 때 펼쳐서 값을 넣어줌
    // ex) call(logInAPI, action.data) === logInAPI(action.data)
    // 여러 개 넘기고 싶으면 call(logInAPI, "a", "b", "c") === logInAPI(a, b, c)
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logInAPI, action.data); // put은 dispatch

    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_SUCCESS */ .RZ,
      // 성공 결과 => result.data
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_FAILURE */ .yK,
      // 실패 결과 => err.response.data
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/logout");
}

function* logOut() {
  try {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logOutAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_SUCCESS */ .kV
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_FAILURE */ .mD,
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user", data);
}

function* signUp(action) {
  try {
    // 200 이면 try
    // throw new Error("") -> 바로 catch로 넘어감
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(signUpAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_SUCCESS */ .I
    });
  } catch (err) {
    console.error(err); // 400, 500 이면 catch

    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_FAILURE */ .bP,
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(removeFollowerAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_FOLLOWER_SUCCESS */ .pe,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_FOLLOWER_FAILURE */ .IK,
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/followers", data);
}

function* loadFollowers(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadFollowersAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_FOLLOWERS_SUCCESS */ .Y6,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_FOLLOWERS_FAILURE */ .vT,
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/followings", data);
}

function* loadFollowings(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadFollowingsAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_FOLLOWINGS_SUCCESS */ .IQ,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_FOLLOWINGS_FAILURE */ .qt,
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch(`/user/${data}}/follow`);
}

function* follow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(followAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOW_SUCCESS */ .mv,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOW_FAILURE */ .DG,
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unfollowAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .UNFOLLOW_SUCCESS */ .D7,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .UNFOLLOW_FAILURE */ .OR,
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(changeNicknameAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_NICKNAME_SUCCESS */ .dr,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_NICKNAME_FAILURE */ .PG,
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_USER_SUCCESS */ .DU,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_USER_FAILURE */ .Ls,
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user");
}

function* loadMyInfo() {
  try {
    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadMyInfoAPI);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_MY_INFO_SUCCESS */ .LJ,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_MY_INFO_FAILURE */ .Cq,
      error: err.response.data
    });
  }
}

function* watchRemoveFollower() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .REMOVE_FOLLOWER_REQUEST */ .IB, removeFollower);
}

function* watchLoadFollowers() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_FOLLOWERS_REQUEST */ .G$, loadFollowers);
}

function* watchLoadFollowings() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_FOLLOWINGS_REQUEST */ .Xd, loadFollowings);
}

function* watchChangeNickname() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .CHANGE_NICKNAME_REQUEST */ .o, changeNickname);
}

function* watchLoadUser() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_USER_REQUEST */ .dQ, loadUser);
}

function* watchLoadMyInfo() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOAD_MY_INFO_REQUEST */ .qq, loadMyInfo);
}

function* watchFollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .FOLLOW_REQUEST */ .U_, follow);
}

function* watchUnfollow() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .UNFOLLOW_REQUEST */ .Bk, unfollow);
}

function* watchLogIn() {
  // take(LOG_IN_REQUEST) -> LOG_IN_REQUEST 액션이 실행될 때까지 기다리겠다는 뜻
  // LOG_IN_REQUEST의 액션이 logIn generator 매개변수에 전달이 됨
  // takeLatest -> 여러 번 눌러도 마지막에 누른 것만 실행해줌 -> 로딩중인 것만 없애서 실행해준다는 뜻 -> 첫번 째 누른 것과 두번 째 누른 것의 텀이 길어서 앞에 로딩이 완료되면 둘 다 실행됨
  // -> 요청은 두 번 하는데 응답을 취소하는 것임 -> 그래서 서버에서 데이터가 중복해서 들어갔는지 체크해야 함
  // -> 그래서 보통 데이터 조회만 takeLatest를 사용함
  // takeLeading -> 처음에 누른 것만 실행해줌
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_IN_REQUEST */ .uF, logIn);
}

function* watchLogOut() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .LOG_OUT_REQUEST */ .Oy, logOut);
}

function* watchSignUp() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_1__/* .SIGN_UP_REQUEST */ .pK, signUp);
}

function* userSaga() {
  // all은 배열을 받는데 배열 안에 들어있는 것들을 한 번에 실행해줌
  // fork는 generator 함수를 실행한다는 뜻
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchRemoveFollower), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadFollowers), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadFollowings), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchChangeNickname), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadUser), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadMyInfo), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchFollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnfollow), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp)]);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5998);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4634);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2655);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4393);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_1__, _reducers__WEBPACK_IMPORTED_MODULE_5__, _sagas__WEBPACK_IMPORTED_MODULE_6__]);
([redux_saga__WEBPACK_IMPORTED_MODULE_1__, _reducers__WEBPACK_IMPORTED_MODULE_5__, _sagas__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const configureStore = context => {
  const sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const middlewares = [sagaMiddleware];
  const enhancer =  true ? (0,redux__WEBPACK_IMPORTED_MODULE_0__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middlewares)) : 0;
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
  return store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(configureStore, {
  debug: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((...args) => {
  (0,immer__WEBPACK_IMPORTED_MODULE_0__.enableES5)();
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(...args);
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;