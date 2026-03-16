import { Recipe } from "../models/recipe.model.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getRecipes = asyncHandler(async (req, res, next) => {
  const recipes = await Recipe.find().sort({ createdAt: -1 });
  return res.status(200).json({
    success: true,
    count: recipes.length,
    data: recipes,
  });
});

export const getRecipe = asyncHandler(async (req, res, next) => {});

export const addRecipe = asyncHandler(async (req, res, next) => {});

export const editRecipe = asyncHandler(async (req, res, next) => {});

export const deleteRecipe = asyncHandler(async (req, res, next) => {});
