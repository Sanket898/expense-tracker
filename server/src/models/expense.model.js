const mongoose = require("mongoose");

tags = ["chai", "outdoor-food", "travel", "investment", "fruit", "fuel"];

const expenseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      lowercase: true,
    },
    account: {
      type: mongoose.Types.ObjectId,
      ref: "bank",
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    tags: [
      {
        type: String,
        enum: tags,
      },
    ],
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("expense", expenseSchema);

module.exports = Expense;
