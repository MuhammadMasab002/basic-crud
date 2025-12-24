import express from "express";
const userRoute = express.Router();

userRoute.post("/createUser", createUser);

export default userRoute;
