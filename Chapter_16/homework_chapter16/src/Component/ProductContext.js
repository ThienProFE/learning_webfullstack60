import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [productBuy, setProductBuy] = useState([]);
  const [count, setCount] = useState(0);
  // Lấy dữ liệu API
  const callAPI = async () => {
    await axios({
      method: "get",
      url: "https://631a00e06b4c78d91b4a1fb2.mockapi.io/lesson16",
      type: "json",
    })
      .then((data) => {
        setProduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    callAPI();
  }, []);
  // Lấy danh sách được thêm vào giỏ hàng
  const clickBuy = (value) => {
    setProductBuy(value);
  };

  const countContext = (value) => {
    setCount(value);
  };

  return (
    <ProductContext.Provider
      value={{ product, clickBuy, productBuy, countContext, count }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
