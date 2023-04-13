import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { END } from "redux-saga";
import axios from "axios";

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
// export할 때 default를 붙인 경우 중괄호 없이 import 가능
// default 없이 export한 경우 중괄호 안에 담아 import 해줘야 함
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } =
    useSelector((state) => state.post);

  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  // useEffect(() => {
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
  const [ref, inView, entry] = useInView();
  useEffect(() => {
    // 로딩중 때문에 속도 느린듯...
    if (inView && hasMorePosts && !loadPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POSTS_REQUEST,
        lastId,
      });
    }
  }, [inView, hasMorePosts, loadPostsLoading, mainPosts]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
        {/* public 폴더에 favicon.ico 파일을 두면, Next.js는 자동으로 해당 파일을 로드하여 브라우저의 탭에 표시함 안뜨면 ctrl+shift+r해서 강력 새로고침하면 됨*/}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AppLayout>
        {me && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {/* 내용의 요소가 없을 때 height를 안주면 감지를 못함 그래서 height를 줘야 감지해서 inView값이 true가 됨 */}
        <div
          ref={hasMorePosts && !loadPostsLoading ? ref : undefined}
          style={{ height: 40 }}
        />
      </AppLayout>
    </>
  );
};

// getServerSideProps는 브라우저에서 실행X, 프론트서버에서 실행O
// 브라우저 -> 백엔드로 데이터 보낼 때 알아서 쿠키 담아서 보내줌
// 프론트 -> SSR은 주체는 프론트서버기 때문에 백엔드로 데이터 보낼 때 쿠키 담아서 보내줘야 함
// 이부분이 Home보다 먼저 실행됨
// context안에 store가 들어있음
// 실행된 결과를 HYDRATE로 보내줌
// 접속한 상황에 따라 화면이 바뀌어 할 때(웬만하면 getServerSideProps를 사용)
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // 서버쪽에서 실행되면 context.req라는게 존재함
    // 이렇게 해줘야 서버쪽으로 쿠기가 전달됨
    const cookie = context.req ? context.req.headers.cookie : "";
    // 서버가 1개이기 때문에 쿠키가 공유되는 문제를 막아야 함
    // 그래서 요청이 들어오면 기존에 있던 유저의 쿠기를 지우고 새로운 유저의 쿠키를 담아주기
    axios.defaults.headers.Cookie = "";
    if (cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    // SUCCESS까지 기다려주는 장치
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
