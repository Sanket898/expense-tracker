const express = require("express");
const appRoutes = require("./routes");
const morgan = require("morgan");
const httpStatus = require("http-status");
const ApiError = require("./utils/ApiError");
const { errorConverter, errorHandler } = require("./middlewares/error");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api", appRoutes);

//default route
// Send back a 404 error for any unknown api request
app.all("*", (req, res, next) => {
  next(new ApiError(404, "Not found"));
});

// Convert error to ApiError, if request was rejected or it throws an error
// app.use(errorConverter);

app.use(errorHandler);

module.exports = app;
