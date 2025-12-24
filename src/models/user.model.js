import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
