import { Badge, Button, Modal } from "antd";
import { ProductContext } from "./ProductContext";
import React, { useContext, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const { productBuy, count } = useContext(ProductContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h1>iMoon</h1>
      <Button type="primary" onClick={showModal}>
        <ShoppingCartOutlined />
        Cart
        <Badge
          style={{ marginLeft: 10 }}
          count={count}
          showZero={count === 0 && true}
        ></Badge>
      </Button>
      <Modal
        title="Your Cart"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {productBuy.map((item, index) => {
          return (
            <div key={index}>
              Name: {item.name}
              Price: {item.price}
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default Header;
