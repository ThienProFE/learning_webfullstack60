const Product = require("./models/productModel");
const products = require("./data/products");
const User = require("./models/userModel");

const connectDB = require("./config/db");
connectDB();
const importData = async () => {
  try {
    // await Product.deleteMany();
    //Xu ly logic import du lieu vao trong database
    const userAdmin = await User.findOne({ email: "test@gmail.com" });
    const sampleProducts = products.map((product) => {
      return { ...product, user: userAdmin._id };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported success");
  } catch (error) {
    console.log("Error", error);
    console.log("Data imported error");
  }
};

importData();
