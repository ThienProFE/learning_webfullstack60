import React, { useState } from "react";
import { Avatar, Button, Col, List, Popconfirm, Row, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { data } from "../people";

const ManagerMember = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    const removeData = people.filter((item) => item.id !== id);
    setPeople(removeData);
    notification["success"]({
      message: "Deleted this member successfully",
      duration: 3,
    });
  };

  const searchMember = (keyword) => {
    const listSearchMember = people.filter((name) =>
      name.first_name.includes(keyword)
    );
    setPeople(listSearchMember);
  };

  const confirmDelete = () => {
    setPeople([]);
    notification["success"]({
      message: "Deleted all member successfully",
      duration: 3,
    });
  };
  const cancelDelete = () => {
    return;
  };
  return (
    <>
      <Row>
        <Col span={16}>
          <h2>Tổng số thành viên của lớp: {people.length}</h2>
        </Col>
        <Col span={8}>
          <Popconfirm
            title="Are you sure to delete all member?"
            onConfirm={confirmDelete}
            onCancel={cancelDelete}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary">Delete All</Button>
          </Popconfirm>
        </Col>
      </Row>
      <input
        type="text"
        placeholder="Search list Member"
        onChange={(e) => searchMember(e.target.value)}
      ></input>
      <button onClick={searchMember}>Search</button>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={people}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={
                  <a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>
                }
                description={
                  <div>
                    <Row>
                      <Col>Email Address:</Col>
                      <Col>{item.email}</Col>
                    </Row>
                    <Row>
                      <Col>Gender:</Col>
                      <Col>{item.gender}</Col>
                    </Row>
                    <Row>
                      <Col>Address:</Col>
                      <Col>{item.address}</Col>
                    </Row>
                  </div>
                }
              />
              <div>
                <Button
                  type="primary"
                  danger
                  onClick={() => removePeople(item.id)}
                >
                  <DeleteOutlined />
                  Delete
                </Button>
              </div>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default ManagerMember;
