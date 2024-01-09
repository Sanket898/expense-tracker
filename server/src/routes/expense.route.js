const express = require("express");
const { expenseController } = require("../controllers");

const router = express.Router();

router
  .route("/")
  .get(expenseController.getExpenses)
  .post(expenseController.createExpense);

module.exports = router;
