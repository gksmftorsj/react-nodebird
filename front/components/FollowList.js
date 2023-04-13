import React, { useMemo, useCallback } from "react";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from "../reducers/user";

const FollowList = ({ header, data, onClickMore, loading }) => {
  const dispatch = useDispatch();
  // 고차함수를 활용해서 이벤트리스너의 핸들러를 반환하여 클릭 이벤트 없이도 함수가 실행되는 것을 방지하도록 해야 함
  const onCancel = useCallback(
    (id) => () => {
      if (header === "팔로잉") {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: id,
        });
      }
      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      });
    },
    []
  );

  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      // 문자열은 원시값이라 항상 같기 때문에 최적화 필요X
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button onClick={onClickMore} loading={loading}>
            더 보기
          </Button>
        </div>
      }
      bordered
      dataSource={data}
      // data의 각각의 값들이 item이 됨 -> data.map(()=>{}) === renderItem={()=>{}}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card
            // onClick 핸들러로 감싸서 전달하지 않으면 클릭 이벤트 없이도 해당 함수가 실행됨
            // 바로 실행 되는거 막으려면 onClick={()=>{onCancel(item.id)}} 이렇게 감싸서 전달하던가 고차함수를 사용해야 함
            // 아... ()붙이면 함수 바로 실행돼서 그런거임...
            actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></List>
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onClickMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FollowList;
