const express = require("express");

const { expenseController } = require("../controllers");
const { expenseValidator } = require("../validators");
const validate = require('../middlewares/validate')

const router = express.Router();

router
  .route("/")
  .get(expenseController.getExpenses)
  .post(validate(expenseValidator.createExpense),expenseController.createExpense);

module.exports = router;
