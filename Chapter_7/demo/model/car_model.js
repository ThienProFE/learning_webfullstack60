const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: String,
  manufacture: String,
  price: Number,
});

module.exports = mongoose.model("Car", carSchema);
