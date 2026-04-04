/**
 * MISSION 7: ROBUSTNESS & TIMEOUTS
 * -------------------------
 * Level: MEDIUM
 * * 1. Create a new file: 'src/m7_robustness.js'.
 * 2. Configure your Pool with these strict limits:
 * - connectionLimit: 5
 * - connectTimeout: 5000  (Temps max pour établir la connexion)
 * - acquireTimeout: 5000  (Temps max pour obtenir une place dans le pool)
 * 3. Create a GET route at '/db/safe-check'.
 * 4. LOGIC:
 * - Use pool.execute() but with a per-query timeout.
 * - Pass an object: { sql: "SELECT SLEEP(1) AS result", timeout: 2000 }.
 * - Note: SLEEP(1) simule une base de données qui prend 1 seconde.
 * 5. RETURN: { "status": "ok", "result": 0 } si ça passe.
 */

import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";

const app = express();

const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  namedPlaceholders: true,
  connectTimeout: 2000,
  acquireTimeout: 2000,
});

app.get("/db/safe-check", async (req, res) => {
  try {
    const [data] = await db.execute({
      sql: "SELECT SLEEP(5) AS result",
      timeout: 2000,
    });
    res.status(200).json({ status: "ok", data: data[0].result });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }
});

app.listen(process.env.PORT);
