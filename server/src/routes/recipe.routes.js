import express from "express";
import {
  addRecipe,
  deleteRecipe,
  editRecipe,
  getRecipe,
  getRecipes,
} from "../controllers/recipe.controllers.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/", addRecipe);
router.get("/:id", editRecipe);
router.get("/:id", deleteRecipe);

export default router;
