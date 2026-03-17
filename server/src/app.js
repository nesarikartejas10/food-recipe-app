import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import recipeRouter from "./routes/recipe.routes.js";
import cors from "cors";
import { config } from "./config/envConfig.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: config.frontendURL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/v1/recipe", recipeRouter);
app.use("/api/v1/user", authRouter);

app.use(globalErrorHandler);

export default app;
