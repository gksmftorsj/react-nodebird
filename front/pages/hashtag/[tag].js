import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { END } from "redux-saga";
import { useInView } from "react-intersection-observer";

import axios from "axios";
import { LOAD_HASHTAG_POSTS_REQUEST } from "../../reducers/post";
import PostCard from "../../components/PostCard";
import wrapper from "../../store/configureStore";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import AppLayout from "../../components/AppLayout";

const Hashtag = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts, hasMorePosts, loadHashtagPostsLoading } = useSelector(
    (state) => state.post
  );

  const [ref, inView, entry] = useInView();
  useEffect(() => {
    if (inView && hasMorePosts && !loadPostsLoading) {
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        lastId:
          mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
        data: tag,
      });
    }
  }, [inView, hasMorePosts, loadHashtagPostsLoading, mainPosts]);

  return (
    <AppLayout>
      {mainPosts.map((c) => (
        <PostCard key={c.id} post={c} />
      ))}
      <div
        ref={hasMorePosts && !loadHashtagPostsLoading ? ref : undefined}
        style={{ height: 40 }}
      />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log(context);
    const cookie = context.req ? context.req.headers.cookie : "";
    console.log(context);
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: context.params.tag,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default Hashtag;
