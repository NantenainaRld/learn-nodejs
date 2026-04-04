/**
 * MISSION 10: PASSWORD HASHING (BCRYPT)
 * -------------------------
 * Level: MEDIUM
 * * 1. Install bcrypt: 'npm install bcrypt'.
 * 2. Update your Joi schema in 'validator.js':
 * - Add 'password': string, min 6, REQUIRED.
 * 3. In your route '/user/register' :
 * - Get 'password' from req.body.
 * - Hash it: 'const hashedPw = await bcrypt.hash(password, 10);' (le 10 est le "salt", la force du hash).
 * 4. RETURN: The user object but with the HASHED password.
 */

import "dotenv/config";
import express from "express";
import { validateUser } from "./middlewares/validator.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

app.post("/user/register", validateUser, async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);

  res.status(200).json({
    success: true,
    message: "User created successfully",
    data: {
      ...req.body,
    },
  });
});

app.listen(process.env.PORT);
