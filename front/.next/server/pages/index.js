"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2485);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5897);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1352);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_4__]);
_reducers_post__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const PostForm = () => {
  const {
    imagePaths,
    addPostDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.post);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); // ref는 실제 DOM에 접근하기 위해 사용

  const imageInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [text, onChangeText, setText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(""); // 서버쪽에서 에러 발생 했는데 setText("") 되면 안되니까
  // post가 정상적으로 업로드 되면 setText("")가 실행되도록

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!text || !text.trim()) {
      return alert("게시글을 작성하세요.");
    }

    const formData = new FormData();
    imagePaths.forEach(path => {
      formData.append("image", path);
    });
    formData.append("content", text);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__/* .ADD_POST_REQUEST */ .z9,
      data: formData
    }); // 여기서 setText("") 하면 안됨
    // setText("");
  }, [text, imagePaths]);
  const onClickImageUpload = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // 이미지 업로드 버튼 클릭 시 input 태그 클릭되도록
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    console.log("images: " + e.target.files); // FormData는 HTML5에서 추가된 Web API 중 하나로, HTML <form> 태그와 같이 폼 데이터를 쉽게 생성하고 제출할 수 있도록 해줍니다.
    // FormData 객체를 생성할 때, new FormData()와 같이 생성자를 호출합니다. 이후에는 append() 메소드를 사용하여 폼 데이터를 추가할 수 있습니다.

    const imageFormData = new FormData(); // e.target.files은 File객체다. 그래서 [].forEach.call(e.target.files, (file)=>{}) 이렇게 사용하면 File객체가 빈배열에 들어가서 반복문이 돌아간다.
    // file에서는 각 객체값이 전달된다.

    [].forEach.call(e.target.files, file => {
      // append() 메소드는 두 개의 인자를 받으며, 첫 번째 인자는 데이터의 이름(name), 두 번째 인자는 데이터의 값(value)입니다.
      imageFormData.append("image", file);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__/* .UPLOAD_IMAGES_REQUEST */ .QA,
      data: imageFormData
    });
  }, []);
  const onRemoveImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__/* .REMOVE_IMAGE */ .Po,
      data: index
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    style: {
      margin: "10px 0 20px"
    },
    encType: "mutipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
        type: "file",
        name: "image",
        multiple: true,
        hidden: true,
        ref: imageInput,
        onChange: onChangeImages
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "primary",
        style: {
          float: "right"
        },
        htmlType: "submit",
        children: "\uC9F9\uC9F9"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      children: imagePaths.map((v, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          display: "inline-block"
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
          src: `${_config_config__WEBPACK_IMPORTED_MODULE_6__/* .backURL */ .y}/${v}`,
          style: {
            width: "200px"
          },
          alt: v
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          })
        })]
      }, v))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5998);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4145);
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6386);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(700);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5897);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3317);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(327);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__, redux_saga__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__, _components_PostForm__WEBPACK_IMPORTED_MODULE_7__, _components_PostCard__WEBPACK_IMPORTED_MODULE_8__, _reducers_post__WEBPACK_IMPORTED_MODULE_9__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__, _store_configureStore__WEBPACK_IMPORTED_MODULE_11__]);
([react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__, redux_saga__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__, _components_PostForm__WEBPACK_IMPORTED_MODULE_7__, _components_PostCard__WEBPACK_IMPORTED_MODULE_8__, _reducers_post__WEBPACK_IMPORTED_MODULE_9__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__, _store_configureStore__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








 // export할 때 default를 붙인 경우 중괄호 없이 import 가능
// default 없이 export한 경우 중괄호 안에 담아 import 해줘야 함








const Home = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.user);
  const {
    mainPosts,
    hasMorePosts,
    loadPostsLoading,
    retweetError
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.post);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]); // useEffect(() => {
  //   function onScroll() {
  //     // 페이지 최상단에서 현재 보이는 최상단 까지의 길이(얼마나 내렸는지) - window.scrollY
  //     // 화면 보이는 길이 - document.documentElement.clientHeight
  //     // 총 길이 - document.documentElement.scrollHeight
  //     // 자연스럽게 로딩하는 모습 보여주기 위해 300픽셀 위에서 dispatch하도록
  //     if (
  //       window.scrollY + document.documentElement.clientHeight >
  //       document.documentElement.scrollHeight - 300
  //     ) {
  //       if (hasMorePosts && !loadPostsLoading) {
  //         dispatch({
  //           type: LOAD_POSTS_REQUEST,
  //         });
  //       }
  //     }
  //   }
  //   // useEffect에서 addEventListener할 때는 항상 return해줘야 함 -> scroll 했던 거 해제하기
  //   // 안그러면 계속 메모리에 쌓여있음
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [hasMorePosts]);
  // ref -> 감지할 요소에 연결할 ref
  // inView -> 연결한 ref 요소가 뷰포트 내에 있는지 여부를 나타내는 boolean 값
  // entry ->  Intersection Observer API의 IntersectionObserverEntry 객체
  // -> 이 객체를 사용하여 요소의 위치, 크기 등의 정보를 얻을 수 있음

  const [ref, inView, entry] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 로딩중 때문에 속도 느린듯...
    if (inView && hasMorePosts && !loadPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__/* .LOAD_POSTS_REQUEST */ .aO,
        lastId
      });
    }
  }, [inView, hasMorePosts, loadPostsLoading, mainPosts]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("title", {
        children: "NodeBird"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      children: [me && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), mainPosts.map(post => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        post: post
      }, post.id)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        ref: hasMorePosts && !loadPostsLoading ? ref : undefined,
        style: {
          height: 40
        }
      })]
    })]
  });
}; // getServerSideProps는 브라우저에서 실행X, 프론트서버에서 실행O
// 브라우저 -> 백엔드로 데이터 보낼 때 알아서 쿠키 담아서 보내줌
// 프론트 -> SSR은 주체는 프론트서버기 때문에 백엔드로 데이터 보낼 때 쿠키 담아서 보내줘야 함
// 이부분이 Home보다 먼저 실행됨
// context안에 store가 들어있음
// 실행된 결과를 HYDRATE로 보내줌
// 접속한 상황에 따라 화면이 바뀌어 할 때(웬만하면 getServerSideProps를 사용)


const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_11__/* ["default"].getServerSideProps */ .Z.getServerSideProps(async context => {
  // 서버쪽에서 실행되면 context.req라는게 존재함
  // 이렇게 해줘야 서버쪽으로 쿠기가 전달됨
  const cookie = context.req ? context.req.headers.cookie : ""; // 서버가 1개이기 때문에 쿠키가 공유되는 문제를 막아야 함
  // 그래서 요청이 들어오면 기존에 있던 유저의 쿠기를 지우고 새로운 유저의 쿠키를 담아주기

  axios__WEBPACK_IMPORTED_MODULE_5__["default"].defaults.headers.Cookie = "";

  if (cookie) {
    axios__WEBPACK_IMPORTED_MODULE_5__["default"].defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .LOAD_MY_INFO_REQUEST */ .qq
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__/* .LOAD_POSTS_REQUEST */ .aO
  }); // SUCCESS까지 기다려주는 장치

  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_4__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
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

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

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

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,327,145,700], () => (__webpack_exec__(5989)));
module.exports = __webpack_exports__;

})();