import { Form, Input } from "antd";
import React, { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/useInput";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";

const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  // ??도 있음 ??는 null or undefined일 경우에만 우항에 있는 값이 됨
  // me?.nickname 값이 없으면 undefined 즉 falsy한 값이니까 nickname의 값은 ""값이 됨
  const [nickname, onChangeNickname] = useInput(me?.nickname || "");
  const dispatch = useDispatch();
  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  const style = useMemo(
    () => ({
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    }),
    []
  );

  return (
    <Form style={style}>
      <Input.Search
        value={nickname}
        onChange={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
      />
    </Form>
  );
};

export default NicknameEditForm;
