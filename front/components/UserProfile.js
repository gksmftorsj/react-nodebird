import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
import Link from "next/link";

const ButtonWrapper = styled(Button)`
  &&& {
    margin-left: 47px;
  }
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          <Link href={`/user/${me.id}`} legacyBehavior>
            <a>
              짹짹
              <br />
              {me.Posts.length}
            </a>
          </Link>
        </div>,
        <div key="followings">
          <Link href={`/profile`} legacyBehavior>
            <a>
              팔로잉
              <br />
              {me.Followings.length}
            </a>
          </Link>
        </div>,
        <div key="followers">
          <Link href={`/profile`} legacyBehavior>
            <a>
              팔로워
              <br />
              {me.Followers.length}
            </a>
          </Link>
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Link href={`/user/${me.id}`} legacyBehavior>
            <a>
              <Avatar>{me.nickname[0]}</Avatar>
            </a>
          </Link>
        }
        title={me.nickname}
      />
      <ButtonWrapper onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </ButtonWrapper>
    </Card>
  );
};

export default UserProfile;
