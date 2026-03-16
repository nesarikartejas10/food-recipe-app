import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [50, "Title cannot exceed 50 characters"],
    },

    ingredients: {
      type: [String],
      required: [true, "Ingredients are required"],
      validate: {
        validator: function (arr) {
          return arr && arr.length > 0;
        },
        message: "At least one ingredient is required",
      },
    },

    instructions: {
      type: String,
      required: [true, "Instructions are required"],
      trim: true,
      minlength: [10, "Instructions must be detailed (at least 10 characters)"],
    },

    cookingTime: {
      type: Number,
    },

    coverImage: {
      type: String,
      default: null,
    },

    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: [true, "Creator information is required"],
    // },
  },
  { timestamps: true },
);

export const Recipe = mongoose.model("Recipe", recipeSchema);
