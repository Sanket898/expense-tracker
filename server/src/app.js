const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const httpStatus = require("http-status");

const appRoutes = require("./routes");
const ApiError = require("./utils/ApiError");
const { errorHandler, errorConverter } = require("./middlewares/error");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Enable cors to accept requests from any frontend domain, all possible HTTP methods, and necessary items in request headers
app.use(cors());

app.use("/api", appRoutes);

// Send back a 404 error for any unknown api request
app.all("*", (req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// Convert error to ApiError, if request was rejected or it throws an error
app.use(errorConverter);

// Handle the error
app.use(errorHandler);

module.exports = app;
