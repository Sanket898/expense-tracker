// Importing the Joi package for input validation
const Joi = require("joi");

// Validation schema for creating an item
const createExpense = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().allow(""),
    account: Joi.string().required(),
    amount: Joi.string().required(),
  }),
};

// Exported the functions
module.exports = {
  createExpense,
};
