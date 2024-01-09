const { Expense } = require("../models");

const createExpense = (expenseBody) => {
  const expense = Expense.create(expenseBody);
  return expense;
};

const getExpenses = () => {
  const expenses = Expense.find();
  return expenses;
};

module.exports = { createExpense, getExpenses };
