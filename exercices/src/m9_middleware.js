/**
 * MISSION 9: MIDDLEWARE POLICE
 * -------------------------
 * Level: DIFFICULT (Mais tu es prêt !)
 * * 1. Create a folder 'src/middlewares'.
 * 2. Create a file 'src/middlewares/validator.js'.
 * 3. LOGIC (dans validator.js) :
 * - Export a function 'validateUser' that takes (req, res, next).
 * - Move your Joi schema inside this function.
 * - If error: Return 400.
 * - If OK: Call next() to let the request continue.
 * 4. In your main file 'src/m9_clean.js':
 * - Use the middleware: app.post('/register', validateUser, (req, res) => { ... });
 */

import "dotenv/config";
import express from "express";
import { validateUser } from "./middlewares/validator.js";

const app = express();
app.use(express.json());

app.post("/user/register", validateUser, (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Hello ${req.body.userName}` });
});

app.listen(process.env.PORT);
