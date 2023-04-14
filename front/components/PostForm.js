import React, { useCallback, useRef, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../hooks/useInput";

import {
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE,
  ADD_POST_REQUEST,
} from "../reducers/post";
import { backURL } from "../config/config";

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  // ref는 실제 DOM에 접근하기 위해 사용
  const imageInput = useRef();
  const [text, onChangeText, setText] = useInput("");

  // 서버쪽에서 에러 발생 했는데 setText("") 되면 안되니까
  // post가 정상적으로 업로드 되면 setText("")가 실행되도록
  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert("게시글을 작성하세요.");
    }
    const formData = new FormData();
    imagePaths.forEach((path) => {
      formData.append("image", path);
    });
    formData.append("content", text);
    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
    // 여기서 setText("") 하면 안됨
    // setText("");
  }, [text, imagePaths]);

  const onClickImageUpload = useCallback(() => {
    // 이미지 업로드 버튼 클릭 시 input 태그 클릭되도록
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("images: " + e.target.files);
    // FormData는 HTML5에서 추가된 Web API 중 하나로, HTML <form> 태그와 같이 폼 데이터를 쉽게 생성하고 제출할 수 있도록 해줍니다.
    // FormData 객체를 생성할 때, new FormData()와 같이 생성자를 호출합니다. 이후에는 append() 메소드를 사용하여 폼 데이터를 추가할 수 있습니다.
    const imageFormData = new FormData();
    // e.target.files은 File객체다. 그래서 [].forEach.call(e.target.files, (file)=>{}) 이렇게 사용하면 File객체가 빈배열에 들어가서 반복문이 돌아간다.
    // file에서는 각 객체값이 전달된다.
    [].forEach.call(e.target.files, (file) => {
      // append() 메소드는 두 개의 인자를 받으며, 첫 번째 인자는 데이터의 이름(name), 두 번째 인자는 데이터의 값(value)입니다.
      imageFormData.append("image", file);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="mutipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img
              src={v.replace(/\/thumb\//, "/original/")}
              style={{ width: "200px" }}
              alt={v}
            />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
