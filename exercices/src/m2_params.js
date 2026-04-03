/**
 * MISSION 2: URL PARAMETERS (Req.params)
 * -------------------------
 * 1. Duplicate your Mission 1 code into a new file: 'src/m2_params.js'.
 * 2. Create a new GET route at '/doctor/:name'.
 * 3. The ':name' part is a dynamic parameter.
 * 4. The route must return a JSON: { "message": "Welcome, Dr. [name]", "role": "Specialist" }.
 * 5. If the name is '8888888', change the role to 'Administrator'.
 * 6. Use Thunder Client to test with different names in the URL.
 */

import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.get("/doctor/:name", (req, res) => {
  const profil = {
    message: `Welcome, Dr. ${req.params.name}`,
    role: "Specialist",
  };

  if (req.params.name === "8888888") {
    profil.role = "Administrator";
  }

  res.status(200).json(profil);
});

app.listen(process.env.PORT);
