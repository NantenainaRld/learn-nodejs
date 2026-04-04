/**
 * MISSION 6: THE PRODUCTION POOL (MySQL)
 * -------------------------
 * Level: MEDIUM
 *
 * 1. Create a new file: 'src/m6_mysql.js'.
 * 2. Install the modern driver: 'npm install mysql2'.
 * 3. Update your '.env' file with: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME.
 * 4. Create a MySQL Pool using 'mysql.createPool()' with:
 *    - connectionLimit: 10
 *    - waitForConnections: true
 *    - namedPlaceholders: true
 * 5. Create a GET route at '/db/check'.
 * 6. LOGIC:
 *    - Execute: "SELECT 1 + 1 AS result" using pool.execute().
 *    - If successful, return JSON: { "status": "connected", "data": 2 }.
 * 7. Use Thunder Client to verify your database connection is alive.
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
  connectionLimit: 10,
  namedPlaceholders: true,
});

app.get("/db/check", async (req, res) => {
  try {
    const [data] = await db.execute("SELECT 1+1 AS result");
    res.status(200).json({ status: "connected", data: data[0].result });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", message: err.message });
  }
});

app.listen(process.env.PORT);
