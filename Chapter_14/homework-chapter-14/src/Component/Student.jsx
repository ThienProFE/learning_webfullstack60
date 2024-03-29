import React from "react";
import { Button, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Student = ({ onDelete, info }) => {
  const handleGetIdDelete = () => {
    for (let i = 0; i < info.length; i++) {
      onDelete(info[i].id);
    }
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
      <Table columns={columns} dataSource={info} rowKey={"name"} />
    </>
  );
};

export default Student;
