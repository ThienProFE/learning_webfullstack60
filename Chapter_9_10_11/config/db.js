const mongoose = require("mongoose");
const connectDB = async () => {
  // Thực hiện connect đến database
  try {
    const dbConfig = "mongodb://localhost/fullstack-ecommerce";
    const connect = await mongoose.connect(dbConfig);
    console.log(`Mongo Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error connect to mongodb");
  }
};

module.exports = connectDB;
