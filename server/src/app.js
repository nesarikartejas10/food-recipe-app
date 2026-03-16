import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import recipeRouter from "./routes/recipe.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/recipe", recipeRouter);

app.use(globalErrorHandler);

export default app;
