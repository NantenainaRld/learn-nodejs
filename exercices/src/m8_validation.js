/**
 * MISSION 8: DATA VALIDATION (JOI)
 * -------------------------
 * Level: MEDIUM
 * * 1. Create a new file: 'src/m8_validation.js'.
 * 2. Install Joi: 'npm install joi'.
 * 3. Create a POST route: '/user/register'.
 * 4. SCHEMA: Create a Joi schema for an object containing:
 * - username: string, alphanumeric, min 3, max 30, REQUIRED.
 * - email: string, valid email format, REQUIRED.
 * - age: number, integer, min 18, REQUIRED.
 * 5. LOGIC:
 * - Validate 'req.body' against your schema.
 * - If invalid: Return 400 with the error message.
 * - If valid: Return 200 with { "status": "success", "user": req.body }.
 */

import "dotenv/config";
import express from "express";
import Joi from "joi";

const app = express();
app.use(express.json());

app.post("/user/register", (req, res) => {
  try {
    const schema = Joi.object({
      userName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      age: Joi.number().integer().min(18).required(),
    });

    // valid body
    const { error, value } = schema.validate(req.body);

    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    res.status(200).json({ success: true, user: value });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }
});

app.listen(process.env.PORT);
