import React from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Student = (students) => {
  const { id, onDelete } = students;
  const handleGetIdDelete = () => {
    onDelete(id);
  };

  // Table for students
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Mô tả bản thân",
      dataIndex: "introduction",
      key: "introduction",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: () => {
        return (
          <div>
            <Button type="primary" danger onClick={handleGetIdDelete}>
              <DeleteOutlined />
              Delete
            </Button>
            {/* <button>Sửa</button> */}
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={[students]}
        rowKey={"name"}
        // scroll={{ x: 200, y: 200 }}
      />
    </>
  );
};

export default Student;
