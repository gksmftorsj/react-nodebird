import { useState, useCallback } from "react";

// initialValue가 주어지지 않으면 null로 초기화
export default (initialValue = null) => {
  // value와 setValue를 useState 훅으로 생성
  const [value, setValue] = useState(initialValue);
  // handler 함수를 useCallback 훅으로 생성
  const handler = useCallback((e) => {
    // e.target.value를 value로 설정
    setValue(e.target.value);
  }, []);
  // value와 handler를 배열로 반환
  return [value, handler, setValue];
};
