const express = require("express");

const movieRoutes = require("./movie.route");
const authRoutes = require("./auth.route");

const router = express.Router();

const appRoutes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/movies",
    route: movieRoutes,
  },
];

appRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
