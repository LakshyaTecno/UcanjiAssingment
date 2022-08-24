//User schema-> User{name,phoneNumber,password}

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
      minLength: 5,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
