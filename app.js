import express from "express";
import cors from "cors";
import userRoute from "./src/routes/user.route";

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// API ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Backend API");
});
app.use("/api/users", userRoute);

export default app;
