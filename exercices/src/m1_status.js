/**
 * MISSION 1: THE CORE SYSTEM
 * -------------------------
 * 1. Initialize the project and install express and dotenv.
 * 2. Create a .env file to store the PORT (8080).
 * 3. Set up a basic Express server using ES Modules or CommonJS.
 * 4. Create a GET route at '/status'.
 * 5. The route must return a JSON object: { "status": "online", "server": "8888888-Clinic" }.
 * 6. The server should listen on the port defined in the .env file.
 */

import "dotenv/config";
import express from "express";

const app = express();

app.get("/status", (req, res) => {
  res.json({ status: "online", server: "8888888-Clinic" });
});

app.listen(process.env.PORT);
