import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Router from "next/router";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
import useInput from "../hooks/useInput";

const SearchInput = styled(Input.Search)`
  &&& {
    vertical-align: middle;
  }
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput("");
  const { me } = useSelector((state) => state.user);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  const items = [
    {
      label: (
        // next 13 버전 이후로부터는 Link 태그 속에 a 태그 넣지 않아야 정상 작동 합니다.
        // 만약 꼭 Link 속에 a 태그를 넣어야 한다 -> link 에 legacyBehavior 넣으면 됩니다.
        <Link href="/" legacyBehavior>
          <a>노드버드</a>
        </Link>
      ),
      key: "/",
    },
    {
      label: me && (
        <Link href="/profile" legacyBehavior>
          <a>프로필</a>
        </Link>
      ),
      key: "/profile",
    },
    {
      label: (
        <SearchInput
          enterButton
          value={searchInput}
          onChange={onChangeSearchInput}
          // enter를 누르면 onSearch가 실행됨
          onSearch={onSearch}
        />
      ),
      key: "/search",
    },
    // {
    //   label: !me && (
    //     <Link href="/signup" legacyBehavior>
    //       <a>회원가입</a>
    //     </Link>
    //   ),
    //   key: "/signup",
    // },
  ];

  return (
    <div>
      <Global />
      {/* // 공통 메뉴를 나타내는 div */}
      <Menu mode="horizontal" items={items} />
      {/* // AppLayout 컴포넌트의 자식 컴포넌트들을 렌더링하는 부분 */}
      {/* 즉 <AppLayout>{children}</AppLayout>이 된다는 뜻이다 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* 7번 */}
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </div>
  );
};

// AppLayout 컴포넌트의 props 검증
AppLayout.propTypes = {
  // children prop은 노드 타입이며 필수값임
  children: PropTypes.node.isRequired,
};

export default AppLayout;
