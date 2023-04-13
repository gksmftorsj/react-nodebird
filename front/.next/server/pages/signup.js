"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 5960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2485);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5998);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4145);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3317);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5897);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(327);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__, _reducers_post__WEBPACK_IMPORTED_MODULE_11__, _store_configureStore__WEBPACK_IMPORTED_MODULE_12__]);
([redux_saga__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_8__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_9__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__, _reducers_post__WEBPACK_IMPORTED_MODULE_11__, _store_configureStore__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "signup__ErrorMessage",
  componentId: "sc-1oeks01-0"
})(["color:red;"]);

const Signup = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  const {
    signUpLoading,
    signUpDone,
    signUpError,
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (me && me.id) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default().replace("/");
    }
  }, [me && me.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default().replace("/"); // 회원가입 완료 후 다시 회원가입 페이지 들어갈 수  있도록

      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .SIGN_UP_DONE_RESET */ .VP
      });
    }
  }, [signUpDone]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  const [email, onChangeId] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("");
  const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("");
  const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("");
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  const {
    0: term,
    1: setTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: termError,
    1: setTermError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onChangeTerm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    // 동의 누르면 에러 삭제
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (password !== passwordCheck) setPasswordError(true);
    if (!term) setTermError(true);
    console.log(email, nickname, password);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .SIGN_UP_REQUEST */ .pK,
      data: {
        email,
        password,
        nickname
      }
    }); // dispatch(signRequestAction({ email, password, nickname }));
  }, [email, password, passwordCheck, term]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("title", {
        children: "\uD68C\uC6D0\uAC00\uC785 | NodeBird"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onFinish: onSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
          name: "user-email",
          value: email,
          required: true,
          onChange: onChangeId,
          type: "email"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
          htmlFor: "user-nickname",
          children: "\uB2C9\uB124\uC784"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
          name: "user-nickname",
          value: nickname,
          required: true,
          onChange: onChangeNickname
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
          htmlFor: "user-password",
          children: "\uBE44\uBC00\uBC88\uD638"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
          name: "user-password",
          type: "password",
          value: password,
          required: true,
          onChange: onChangePassword
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("label", {
          htmlFor: "user-password-check",
          children: "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {
          name: "user-password-check",
          type: "password",
          value: passwordCheck,
          required: true,
          onChange: onChangePasswordCheck
        }), passwordError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ErrorMessage, {
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uC81C\uB85C\uCD08 \uB9D0\uC744 \uC798 \uB4E4\uC744 \uAC83\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }), termError && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ErrorMessage, {
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
        style: {
          marginTop: 10
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "primary",
          htmlType: "submit",
          loading: signUpLoading,
          children: "\uAC00\uC785\uD558\uAE30"
        })
      })]
    })]
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_12__/* ["default"].getServerSideProps */ .Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios__WEBPACK_IMPORTED_MODULE_8__["default"].defaults.headers.Cookie = "";

  if (cookie) {
    axios__WEBPACK_IMPORTED_MODULE_8__["default"].defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .LOAD_MY_INFO_REQUEST */ .qq
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_11__/* .LOAD_POSTS_REQUEST */ .aO
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_7__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,327,145], () => (__webpack_exec__(5960)));
module.exports = __webpack_exports__;

})();