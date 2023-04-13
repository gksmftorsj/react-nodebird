"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 1693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3317);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_4__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const FollowList = ({
  header,
  data,
  onClickMore,
  loading
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(); // 고차함수를 활용해서 이벤트리스너의 핸들러를 반환하여 클릭 이벤트 없이도 함수가 실행되는 것을 방지하도록 해야 함

  const onCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => () => {
    if (header === "팔로잉") {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .UNFOLLOW_REQUEST */ .Bk,
        data: id
      });
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .REMOVE_FOLLOWER_REQUEST */ .IB,
      data: id
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small" // 문자열은 원시값이라 항상 같기 때문에 최적화 필요X
    ,
    header: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      children: header
    }),
    loadMore: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      style: {
        textAlign: "center",
        margin: "10px 0"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: onClickMore,
        loading: loading,
        children: "\uB354 \uBCF4\uAE30"
      })
    }),
    bordered: true,
    dataSource: data // data의 각각의 값들이 item이 됨 -> data.map(()=>{}) === renderItem={()=>{}}
    ,
    renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
      style: {
        marginTop: 20
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card // onClick 핸들러로 감싸서 전달하지 않으면 클릭 이벤트 없이도 해당 함수가 실행됨
      // 바로 실행 되는거 막으려면 onClick={()=>{onCancel(item.id)}} 이렇게 감싸서 전달하던가 고차함수를 사용해야 함
      // 아... ()붙이면 함수 바로 실행돼서 그런거임...
      , {
        actions: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.StopOutlined, {
          onClick: onCancel(item.id)
        }, "stop")],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
          description: item.nickname
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowList);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2485);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3317);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_4__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const NicknameEditForm = () => {
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user); // ??도 있음 ??는 null or undefined일 경우에만 우항에 있는 값이 됨
  // me?.nickname 값이 없으면 undefined 즉 falsy한 값이니까 nickname의 값은 ""값이 됨

  const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(me?.nickname || "");
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__/* .CHANGE_NICKNAME_REQUEST */ .o,
      data: nickname
    });
  }, [nickname]);
  const style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    marginBottom: "20px",
    border: "1px solid #d9d9d9",
    padding: "20px"
  }), []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Form, {
    style: style,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Input.Search, {
      value: nickname,
      onChange: onChangeNickname,
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815",
      onSearch: onSubmit
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NicknameEditForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4145);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5998);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5941);
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1693);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7182);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3317);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5897);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(327);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1352);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__, redux_saga__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_7__, _components_FollowList__WEBPACK_IMPORTED_MODULE_8__, _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_9__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__, _reducers_post__WEBPACK_IMPORTED_MODULE_11__, _store_configureStore__WEBPACK_IMPORTED_MODULE_12__]);
([_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__, redux_saga__WEBPACK_IMPORTED_MODULE_5__, axios__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_7__, _components_FollowList__WEBPACK_IMPORTED_MODULE_8__, _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_9__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__, _reducers_post__WEBPACK_IMPORTED_MODULE_11__, _store_configureStore__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Profile = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user);
  const {
    0: followersLimit,
    1: setFollowersLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3);
  const {
    0: followingsLimit,
    1: setFollowingsLimit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(3); // saga에서 action생성 대신에 사용

  const fetcher = url => axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, {
    withCredentials: true
  }).then(result => result.data); // fetcher => 이 주소를 어떻게 실제로 가져올지에 대해 적어주는 것
  // 이렇게 하면 알아서 data와 error에 값이 들어가 있음, 둘 다 없으면 로딩중


  const {
    data: followersData,
    error: followerError
  } = (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_14__/* .backURL */ .y}/user/followers?limit=${followersLimit}`, fetcher);
  const {
    data: followingsData,
    error: followingError
  } = (0,swr__WEBPACK_IMPORTED_MODULE_7__["default"])(`${_config_config__WEBPACK_IMPORTED_MODULE_14__/* .backURL */ .y}/user/followings?limit=${followingsLimit}`, fetcher); // hooks는 모두 실행되어야 함 -> 안그러면 에러발생함 -> 그래서 return은 항상 hooks보다 아래에 있어야 함

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 더 명확하게 표현하기 위해 me.id도 조건에 추가
    // falsy -> false, 0, -0, NaN, null, undefined, ""(빈 문자열)
    // so state에 user값이 없으면 me는 null이기 때문에 falsy한 값이 됨 -> false
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/");
    }
  }, [me && me.id]);
  const loadMoreFollowings = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setFollowingsLimit(prev => prev + 3);
  }, []);
  const loadMoreFollowers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setFollowersLimit(prev => prev + 3);
  }, []); //  me 객체가 존재하지 않을 경우 null을 반환하여 렌더링되지 않도록 하기

  if (!me) {
    return "내 정보 로딩중...";
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      children: "\"\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD569\uB2C8\uB2E4.\""
    });
  } // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        header: "\uD314\uB85C\uC789",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingsData && !followingError
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        header: "\uD314\uB85C\uC6CC",
        data: followersData,
        onClickMore: loadMoreFollowers,
        loading: !followersData && !followerError
      })]
    })]
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_12__/* ["default"].getServerSideProps */ .Z.getServerSideProps(async context => {
  console.log("getServerSideProps start");
  console.log(context.req.headers);
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_6__["default"].defaults.headers.Cookie = "";

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_6__["default"].defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .LOAD_MY_INFO_REQUEST */ .qq
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_5__.END);
  console.log("getServerSideProps end");
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 4634:
/***/ ((module) => {

module.exports = require("redux-logger");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9182:
/***/ ((module) => {

module.exports = import("@faker-js/faker");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 5998:
/***/ ((module) => {

module.exports = import("redux-saga");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,327,145], () => (__webpack_exec__(9260)));
module.exports = __webpack_exports__;

})();