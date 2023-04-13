import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";
import postSaga from "./post";
import { backURL } from "../config/config";

axios.defaults.baseURL = backURL;
// 쿠키 공유
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
