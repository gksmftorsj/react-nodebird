import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

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
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
