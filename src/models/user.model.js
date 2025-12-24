import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
