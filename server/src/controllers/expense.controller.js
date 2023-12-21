const httpStatus = require("http-status");
const { ExpenseService } = require("../services");

const createExpense = async (req, res) => {
  const expense = await ExpenseService.createExpense(req.body);
  res.status(httpStatus.CREATED).send(expense);
};

const getExpenses = async (req, res) => {
  const expenses = await ExpenseService.getExpenses();
  res.status(httpStatus.FOUND).send(expenses);
};

module.exports = { createExpense, getExpenses };
