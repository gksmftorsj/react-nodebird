import React, { useEffect, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";

import { loginRequestAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  &&& {
    padding: 10px;
  }
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    // 1번 dispatch({ type: LOG_IN_REQUEST, data }) -> 해당 타입의 reducer와 saga가 실행됨
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    // onFinish에 이미 preventDefault가 적용 되어있음
    // Form을 제출할 때 onFinish가 호출됨
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <Input
          name="user-email"
          value={email}
          onChange={onChangeEmail}
          required
          type="email"
        />
      </div>
      <div>
        <label htmlFor="user-password" required>
          비밀번호
        </label>
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          type="password"
        />
      </div>
      <ButtonWrapper>
        {/* 1번 */}
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup" legacyBehavior>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
