/**
 * MISSION 5: INTRODUCTION TO SQLITE
 * -------------------------
 * Level: MEDIUM
 * 1. Create a new file: 'src/m5_sqlite.js'.
 * 2. Install the driver: 'npm install sqlite3 sqlite'.
 * 3. Create a database file 'clinic.db' and a table 'patients' (id, name).
 * 4. Create a POST route at '/sql/patients/add'.
 * 5. LOGIC:
 * - Connect to the SQLite database.
 * - Execute a SQL INSERT: "INSERT INTO patients (name) VALUES (?)"
 * - Execute a SQL SELECT: "SELECT * FROM patients"
 * 6. RETURN the full list of patients from the database.
 */

import "dotenv/config";
import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(__dirname, "./clinic.db");

const app = express();
app.use(express.json());

const db = await open({
  filename: dbPath,
  driver: sqlite3.Database,
});

await db.exec(
  `CREATE TABLE IF NOT EXISTS patient (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)`,
);
console.log("table créer");

app.post("/sql/patients/add", async (req, res) => {
  const body = req.body || {};

  //missing data
  if (!body.name) return res.status(401).json({ error: "missing data" });

  //insert/list patient
  try {
    // insert patient
    await db.run("INSERT INTO patient (name) VALUES (:name)", {
      ":name": body.name,
    });

    // lis all patient
    const result = await db.all("SELECT * FROM patient WHERE id = :id", {
      ":id": 20,
    });

    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }
});

app.listen(process.env.PORT);
