import express from "express";
import authMidd from "./middlewares/auth.js";

const app = express();

app.get("/api/dashboard", authMidd, (req, res) => {
  res
    .status(200)
    .json({ message: `Hey ${req.decoded.userName}`, info: req.decoded });
});

app.listen(process.env.PORT);
