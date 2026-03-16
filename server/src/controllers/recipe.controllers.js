import { Recipe } from "../models/recipe.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getRecipes = asyncHandler(async (req, res, next) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    totalRecipes: recipes.length,
    data: recipes,
  });
});

export const getRecipe = asyncHandler(async (req, res, next) => {});

export const addRecipe = asyncHandler(async (req, res, next) => {
  const { title, ingredients, instructions, cookingTime } = req.body;

  if (!title || !ingredients || !instructions) {
    return next(createHttpError(400, "Required fields can't be empty"));
  }

  const newRecipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    cookingTime,
  });

  return res.status(201).json({
    success: true,
    message: "Recipe created successfully",
    data: newRecipe,
  });
});

export const editRecipe = asyncHandler(async (req, res, next) => {});

export const deleteRecipe = asyncHandler(async (req, res, next) => {});
