const mongoose = require("mongoose");

const connectDB = async () => {
  // thực hiện connect đến database
  try {
    const dbConfig = "mongodb://localhost/demo-ecommerce";
    const connect = await mongoose.connect(dbConfig);
    console.log(`Mongo connected: ${connect.connection.host}`);
  } catch (e) {
    console.log("Error connect to mongodb");
  }
};

module.exports = connectDB;
