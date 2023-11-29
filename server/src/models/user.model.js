const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please enter valid email!"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "Password is required!"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      validator(val) {
        return val == this.password;
      },
      message: "Password does not match",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
    this.confirmPassword = undefined;
  }
  next();
});

userSchema.methods.comparePassword = async function (reqPwd, dbPwd) {
  return await bcrypt.compare(reqPwd, dbPwd);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
