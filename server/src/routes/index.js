const express = require("express");

const authRoutes = require("./auth.route");
const expenseRoutes = require("./expense.route");

const router = express.Router();

const appRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/expenses",
    route: expenseRoutes,
  },
];

appRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
