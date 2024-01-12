const mongoose = require("mongoose");

const banksCategory = ["basic", "investment", "personal", "travel"];

const bankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      lowercase: true,
      enum: banksCategory,
    },
    logo: {
      type: String,
    },
    balance: {
      type: Number,
      trim: true,
    },
    limit: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Bank = mongoose.model("bank", bankSchema);

module.exports = Bank;
