const mongoose = require("mongoose");

const User = mongoose.model("users", {
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

module.exports = User;
