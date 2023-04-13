import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import AppLayout from "./../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { END } from "redux-saga";
import axios from "axios";
import useSWR from "swr";

import FollowList from "../components/FollowList";
import NicknameEditForm from "./../components/NicknameEditForm";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from "../reducers/user";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import wrapper from "../store/configureStore";
import { backURL } from "../config/config";

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  // saga에서 action생성 대신에 사용
  const fetcher = (url) =>
    axios.get(url, { withCredentials: true }).then((result) => result.data);

  // fetcher => 이 주소를 어떻게 실제로 가져올지에 대해 적어주는 것
  // 이렇게 하면 알아서 data와 error에 값이 들어가 있음, 둘 다 없으면 로딩중
  const { data: followersData, error: followerError } = useSWR(
    `${backURL}/user/followers?limit=${followersLimit}`,
    fetcher
  );
  const { data: followingsData, error: followingError } = useSWR(
    `${backURL}/user/followings?limit=${followingsLimit}`,
    fetcher
  );

  // hooks는 모두 실행되어야 함 -> 안그러면 에러발생함 -> 그래서 return은 항상 hooks보다 아래에 있어야 함
  useEffect(() => {
    // 더 명확하게 표현하기 위해 me.id도 조건에 추가
    // falsy -> false, 0, -0, NaN, null, undefined, ""(빈 문자열)
    // so state에 user값이 없으면 me는 null이기 때문에 falsy한 값이 됨 -> false
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  //  me 객체가 존재하지 않을 경우 null을 반환하여 렌더링되지 않도록 하기
  if (!me) {
    return "내 정보 로딩중...";
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>"팔로잉/팔로워 로딩 중 에러가 발생합니다."</div>;
  }

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_FOLLOWERS_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_FOLLOWINGS_REQUEST,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList
          header="팔로잉"
          data={followingsData}
          onClickMore={loadMoreFollowings}
          loading={!followingsData && !followingError}
        />
        <FollowList
          header="팔로워"
          data={followersData}
          onClickMore={loadMoreFollowers}
          loading={!followersData && !followerError}
        />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log("getServerSideProps start");
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log("getServerSideProps end");
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
