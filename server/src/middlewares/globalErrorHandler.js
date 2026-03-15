import { config } from "../config/envConfig.js";

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
    stack: config.env === "production" ? null : err.stack,
  });
};

export default globalErrorHandler;
