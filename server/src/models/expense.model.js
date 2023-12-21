const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
