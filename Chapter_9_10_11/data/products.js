const productArr = [];

for (let i = 1; i < 100; i++) {
  const productObject = {
    name: `San pham so ${i}`,
    image: "https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg",
    description: `${i} day la 1 anh dep`,
    brand: "Canon",
    category: "Electronic",
    price: 930,
    countInStock: 10,
    rating: 0,
    numberReviews: 0,
  };
  productArr.push(productObject);
}
