const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
    },
    role: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
