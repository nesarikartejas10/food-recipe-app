import createHttpError from "http-errors";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config/envConfig.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(createHttpError(400, "Email already exist"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ email, password: hashedPassword });
  const token = jwt.sign({ id: newUser._id, email }, config.jwtSecret, {
    expiresIn: "1hr",
  });
  return res.status(201).json({
    success: true,
    message: "User created successfully",
    token,
    user: { email: newUser.email, id: newUser._id },
  });
});

export const loginUser = asyncHandler(async () => {});

export const getUser = asyncHandler(async () => {});
