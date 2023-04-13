import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading, followLoadingId } = useSelector(
    (state) => state.user
  );

  const isLoadingId = post.User.id === followLoadingId;
  // 팔로잉 여부 // ?.-> null or undefined일 경우 undefined 반환
  const isFollowing = me?.Followings.find((v) => v.id === post.User.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  // useCallback같은 hook보다 아래에 적어줘야 함
  // hook이 더 아래에 있을 경우 Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.와 같은 에러가 발생함
  if (post.User.id === me.id) {
    // 아무것도 안보이도록 하기
    return null;
  }

  return (
    // 팔로우 하는 중 or 언팔로우 하는 중 둘 중 하나가 동작하고 있으면 loading 돌아가도록
    <Button
      loading={isLoadingId && (followLoading || unfollowLoading)}
      onClick={onClickButton}
    >
      {isFollowing ? "언팔로우" : "팔로우"}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default FollowButton;
