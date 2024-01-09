class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.status = statusCode >= 400 && statusCode < 500 ? "Fail" : "Error";

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
