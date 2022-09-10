import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { Button, Card, List } from "antd";
const { Meta } = Card;

const Product = () => {
  const { product, clickBuy, countContext } = useContext(ProductContext);
  const [count, setCount] = useState(0);
  const [productBuy, setProductBuy] = useState([]);

  const handleBuy = (id) => {
    setCount(count + 1);
    const buyProduct = product.filter((item) => item.id === id);
    setProductBuy([...productBuy, buyProduct]);
    clickBuy(productBuy);
    countContext(count);
  };

  return (
    <>
      {product.map((item, index) => {
        return (
          <List
            key={index}
            grid={{
              gutter: 16,
              column: 5,
            }}
            dataSource={product}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="product" src={item.image} />}
                >
                  <Meta title={item.name} description={item.description} />
                  <div>
                    <h3>Price: {item.price}$</h3>
                    <Button
                      type="primary"
                      danger
                      onClick={() => handleBuy(item.id)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        );
      })}
    </>
  );
};

export default Product;
