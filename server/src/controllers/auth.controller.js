const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const catchAsync = require("../utils/catchAsyncError");
const ApiError = require("../utils/ApiError");
const { User } = require("../models");

const register = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
  });
  res.status(httpStatus.CREATED).json({
    status: "success",
    token,
    data: user,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      "Please provide email and password!"
    );
  }
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not existed!");
  }
  res.status(httpStatus.OK).json({
    status: "success",
    token: "",
    data: user,
  });
});

module.exports = { register, login };
