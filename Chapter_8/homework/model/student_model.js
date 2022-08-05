const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const listStudentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 1, max: 100 },
  address: String,
  gender: { type: String, enum: ["Male", "Female"] },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{4}-\d{3}-\d{3}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: { require: true, type: String },
});

module.exports = mongoose.model("Student", listStudentSchema);
