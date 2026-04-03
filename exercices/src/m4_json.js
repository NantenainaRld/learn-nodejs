/**
 * MISSION 4: PERSISTENCE WITH JSON FILE (FS)
 * -------------------------
 * Level: MEDIUM
 * 1. Create a new file: 'src/m4_json.js'.
 * 2. Create 'patients.json' in root with: []
 * 3. Use 'import fs from "fs/promises"'.
 * 4. Create a POST route at '/patients/add'.
 * 5. LOGIC (inside async function):
 * - Read 'patients.json'.
 * - JSON.parse the data.
 * - Push { name: req.body.name } to the array.
 * - JSON.stringify the array.
 * - fs.writeFile to 'patients.json'.
 * 6. Return status 201 with the new list.
 */

import "dotenv/config";
import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

app.post("/patient/add", async (req, res) => {
  const { name } = req.body || {};

  //   missing data
  if (!name) return res.status(400).json({ error: "Missing data" });

  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.resolve(__dirname, "./patients.json");

    let patients = await fs.readFile(filePath, "utf-8");
    patients = JSON.parse(patients);

    // add patient
    patients.push({ name: req.body.name });

    await fs.writeFile(filePath, JSON.stringify(patients));

    res.status(201).json("Patient created successfuly");
  } catch (err) {
    return res
      .status(403)
      .json({ error: "Access forbidden", message: err.message });
  }
});

app.listen(process.env.PORT);
