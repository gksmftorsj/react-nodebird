"use strict";
exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 4596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2485);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5897);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_5__]);
_reducers_post__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const CommentForm = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.user.me?.id);
  const {
    addCommentDone,
    addCommentLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.post);
  const [commentText, onChangeCommentText, setCommentText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);
  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    console.log(id);

    if (!id) {
      alert("로그인 먼저 해라.");
    } else {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__/* .ADD_COMMENT_REQUEST */ .Ot,
        data: {
          content: commentText,
          postId: post.id,
          userId: id
        }
      });
    }
  }, [id, commentText]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onFinish: onSubmitComment,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Form.Item, {
      style: {
        position: "relative",
        margin: 0
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Input.TextArea, {
        value: commentText,
        onChange: onChangeCommentText,
        rows: 4
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
        style: {
          position: "absolute",
          right: 0,
          bottom: -40,
          zIndex: 1
        },
        type: "primary",
        htmlType: "submit",
        loading: addCommentLoading,
        children: "\uC090\uC57D"
      })]
    })
  });
};

CommentForm.Proptypes = {
  post: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentForm);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3861:
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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3317);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_3__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FollowButton = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    me,
    followLoading,
    unfollowLoading,
    followLoadingId
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.user);
  const isLoadingId = post.User.id === followLoadingId; // 팔로잉 여부 // ?.-> null or undefined일 경우 undefined 반환

  const isFollowing = me?.Followings.find(v => v.id === post.User.id);
  const onClickButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .UNFOLLOW_REQUEST */ .Bk,
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__/* .FOLLOW_REQUEST */ .U_,
        data: post.User.id
      });
    }
  }, [isFollowing]); // useCallback같은 hook보다 아래에 적어줘야 함
  // hook이 더 아래에 있을 경우 Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.와 같은 에러가 발생함

  if (post.User.id === me.id) {
    // 아무것도 안보이도록 하기
    return null;
  }

  return (
    /*#__PURE__*/
    // 팔로우 하는 중 or 언팔로우 하는 중 둘 중 하나가 동작하고 있으면 loading 돌아가도록
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
      loading: isLoadingId && (followLoading || unfollowLoading),
      onClick: onClickButton,
      children: isFollowing ? "언팔로우" : "팔로우"
    })
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 700:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4946);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4596);
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2489);
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3861);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5897);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommentForm__WEBPACK_IMPORTED_MODULE_7__, _FollowButton__WEBPACK_IMPORTED_MODULE_9__, _reducers_post__WEBPACK_IMPORTED_MODULE_10__]);
([_CommentForm__WEBPACK_IMPORTED_MODULE_7__, _FollowButton__WEBPACK_IMPORTED_MODULE_9__, _reducers_post__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














moment__WEBPACK_IMPORTED_MODULE_5___default().locale("ko");

const PostCard = ({
  post
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // me.id가 있으면 id에 그 값이 들어가고 없으면 undefined로 채워주는 옵셔널 체이닝 연산자

  const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user.me?.id);
  const {
    removePostLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.post);
  const liked = post.Likers.find(v => v.id === id);
  const {
    0: editMode,
    1: setEditMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onClickUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setEditMode(true);
  }, []);
  const onCancelUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setEditMode(false);
  }, []); // 부모태그로 끌어올린 이유는 PostId를 사용하기 위해서 -> 아레에서 하면 PostId도 props로 넘겨줘야 함

  const onChangePost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(editText => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__/* .UPDATE_POST_REQUEST */ .wC,
      data: {
        PostId: post.id,
        content: editText
      }
    });
  }, [post]);
  const onLike = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // (prev) => !prev -> prev에는 이전 데이터가 들어가 있음 -> 이전 데이터가 true면 false로 false면 true로
    // setLiked((prev) => !prev);
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__/* .LIKE_POST_REQUEST */ .xD,
      data: post.id
    });
  }, [id]);
  const onUnlike = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__/* .UNLIKE_POST_REQUEST */ .VT,
      data: post.id
    });
  }, [id]);
  const onToggleComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__/* .REMOVE_POST_REQUEST */ .HU,
      data: post.id
    });
  }, [id]);
  const onRetweet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__/* .RETWEET_REQUEST */ .a0,
      data: post.id
    });
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card // image가 1개 이상일 때 PostImages 컴포넌트로 image 보여주기
    , {
      cover: post.Images[0] && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        images: post.Images
      }),
      actions: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RetweetOutlined, {
        onClick: onRetweet
      }, "retweet"), liked ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.HeartTwoTone, {
        twoToneColor: "#eb2f96",
        onClick: onUnlike
      }, "heart") : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.HeartOutlined, {
        onClick: onLike
      }, "heart"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.MessageOutlined, {
        onClick: onToggleComment
      }, "comment"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button.Group, {
          children: id && post.User.id === id ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [!post.RetweetId && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              onClick: onClickUpdate,
              children: "\uC218\uC815"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            children: "\uC2E0\uACE0"
          })
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.EllipsisOutlined, {})
      }, "more")],
      title: post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null,
      extra: id && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        post: post
      }),
      children: post.RetweetId && post.Retweet ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
        cover: post.Retweet.Images[0] && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          images: post.Retweet.Images
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          style: {
            float: "right"
          },
          children: moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format("YYYY.MM.DD")
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
          avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/user/${post.Retweet.User.id}`,
            legacyBehavior: true,
            prefetch: false,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                children: post.Retweet.User.nickname[0]
              })
            })
          }),
          title: post.Retweet.User.nickname,
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            onCancelUpdate: onCancelUpdate,
            onChangePost: onChangePost,
            postData: post.Retweet.content
          })
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          style: {
            float: "right"
          },
          children: moment__WEBPACK_IMPORTED_MODULE_5___default()(post.createdAt).format("YYYY.MM.DD")
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
          avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: `/user/${post.User.id}`,
            legacyBehavior: true,
            prefetch: false,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                children: post.User.nickname[0]
              })
            })
          }),
          title: post.User.nickname,
          description: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            editMode: editMode,
            onCancelUpdate: onCancelUpdate,
            onChangePost: onChangePost,
            postData: post.content
          })
        })]
      })
    }), commentFormOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        post: post
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.List, {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Comment, {
            author: item.User.nickname,
            avatar: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: `/user/${item.User.id}`,
              legacyBehavior: true,
              prefetch: false,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                  children: item.User.nickname[0]
                })
              })
            }),
            content: item.content
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCard);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__.Input;

const PostCardContent = ({
  postData,
  editMode,
  onChangePost,
  onCancelUpdate
}) => {
  const {
    updatePostLoading,
    updatePostDone
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.post);
  const {
    0: editText,
    1: setEditText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postData);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (updatePostDone) {
      onCancelUpdate();
    }
  }, [updatePostDone]);
  const onChangeText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    setEditText(e.target.value);
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: editMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TextArea, {
        value: editText,
        onChange: onChangeText
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Button.Group, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          loading: updatePostLoading,
          onClick: onChangePost(editText),
          children: "\uC218\uC815"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "danger",
          onClick: onCancelUpdate,
          children: "\uCDE8\uC18C"
        })]
      })]
    }) : postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/hashtag/${v.slice(1)}`,
          legacyBehavior: true,
          prefetch: false,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
            children: v
          })
        }, i);
      }

      return v;
    })
  });
};

PostCardContent.defaultProps = {
  editMode: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCardContent);

/***/ }),

/***/ 4946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PostImages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ImagesZoom/styles.js


const Overlay = external_styled_components_default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-r2o2ee-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = external_styled_components_default().header.withConfig({
  displayName: "styles__Header",
  componentId: "sc-r2o2ee-1"
})(["height:44px;background:white;position:relative;padding:0;text-align:center;& h1{margin:0;font-size:17px;color:#333;line-height:44px;}"]);
const CloseBtn = external_styled_components_default()(icons_.CloseOutlined).withConfig({
  displayName: "styles__CloseBtn",
  componentId: "sc-r2o2ee-2"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;"]);
const SlickWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__SlickWrapper",
  componentId: "sc-r2o2ee-3"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__ImgWrapper",
  componentId: "sc-r2o2ee-4"
})(["padding:32px;text-align:center;& img{margin:0 auto;max-height:750px;}"]);
const Indicator = external_styled_components_default().div.withConfig({
  displayName: "styles__Indicator",
  componentId: "sc-r2o2ee-5"
})(["text-align:center;& > div{width:75px;height:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]); // css 덮어쓰기 -> 원래 class명 바꾸는데 GlobalStyle 시용하면 지정한 class명 그대로 들어감

const Global = (0,external_styled_components_.createGlobalStyle)([".slick-slide{display:inline-block;}.ant-card-cover{transform:none !important;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/ImagesZoom/index.js







const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Overlay, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Global, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }), /*#__PURE__*/jsx_runtime_.jsx(CloseBtn, {
        onClick: onClose,
        children: "X"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(SlickWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()) // 시작순서
        , {
          initialSlide: 0 // 페이지 넘기면 현재 슬라이드 번호를 제공해주는걸 currentSlide에 저장하기
          ,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true // 무조건 손으로만 넘기게 화살표 지우기
          ,
          arrows: false // 하나에 한 개만 보이고
          ,
          slidesToShow: 1 // 하나에 한 개만 넘기게
          ,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: `${v.src.replace(/\/thumb\//, "/original/")}`,
              alt: `${v.src}`
            })
          }, `${v.src}`))
        }), /*#__PURE__*/jsx_runtime_.jsx(Indicator, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [currentSlide + 1, " / ", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const components_ImagesZoom = (ImagesZoom);
;// CONCATENATED MODULE: ./components/PostImages.js

 // 폴더를 import하면 자동으로 index가 불러와짐







const PostImages = ({
  images
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = (0,external_react_.useState)(false);
  const onZoom = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = (0,external_react_.useCallback)(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation" // 원래 posts에서는 thumb를 보여줘야 부담이 덜함
        ,
        src: `${images[0].src.replace(/\/thumb\//, "/original/")}`,
        alt: `${images[0].src}`,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/jsx_runtime_.jsx(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  if (images.length === 2) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation",
        style: {
          width: "50%",
          display: "inline-block"
        },
        src: `${images[0].src.replace(/\/thumb\//, "/original/")}`,
        alt: `${images[0].src}`,
        onClick: onZoom
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation",
        style: {
          width: "50%",
          display: "inline-block"
        },
        src: `${images[1].src.replace(/\/thumb\//, "/original/")}`,
        alt: `${images[1].src}`,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/jsx_runtime_.jsx(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        role: "presentation",
        style: {
          width: "50%",
          display: "inline-block"
        },
        src: `${images[0].src.replace(/\/thumb\//, "/original/")}`,
        alt: `${images[0].src}`,
        onClick: onZoom
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        role: "presentation",
        style: {
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle"
        },
        onClick: onZoom,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30"]
      })]
    }), showImagesZoom && /*#__PURE__*/jsx_runtime_.jsx(components_ImagesZoom, {
      images: images,
      onClose: onClose
    })]
  });
};

/* harmony default export */ const components_PostImages = (PostImages);

/***/ })

};
;