import React, { useState, useEffect } from "react";
import { Table } from "antd";
import axios from "axios";

const columnUser = [
  { title: "Email", dataIndex: "email", key: "email" },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name) => `${name.title} ${name.first} ${name.last}`,
  },
  { title: "Gender", dataIndex: "gender", key: "gender" },
  { title: "Phone", dataIndex: "phone", key: "phone" },
];

const TableUser = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const [pagination, setPagination] = useState({});

  const callAPI = async () => {
    const response = await axios({
      method: "get",
      url: "https://randomuser.me/api?results=100",
      type: "json",
    });
    if (response.status === 200) {
      setUserList(response.data.results);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <h2>Danh sách học sinh trong lớp</h2>
      <Table
        columns={columnUser}
        dataSource={userList}
        rowKey={"email"}
        loading={isLoading}
        // pagination={pagination}
      />
    </>
  );
};

export default TableUser;
