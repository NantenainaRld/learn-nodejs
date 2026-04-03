/**
 * MISSION 3: THE BODY & STATUS CODES (Req.body)
 * -------------------------
 * Level: EASY
 * * 1. Create a new file: 'src/m3_body.js'.
 * 2. Create a POST route at '/appointment'.
 * 3. Ensure 'app.use(express.json())' is active to read JSON bodies.
 * 4. The route should receive a JSON body: { "patient": "Name", "date": "YYYY-MM-DD" }.
 * 5. LOGIC:
 * - If 'patient' OR 'date' is missing, return status 400: { "error": "Missing data" }.
 * - If both are present, return status 201: { "message": "Appointment created for [patient]", "id": 8888888 }.
 * 6. Use Thunder Client (POST method + Body JSON) to test success and failure.
 */
import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.post("/apointment", (req, res) => {
  const { patient, date } = req.body || {};
  // missing data
  if (!patient || !date) {
    return res.status(400).json({ error: "Missing data" });
  }

  res.status(201).json({
    message: `Apointment created for ${patient}`,
    id: "8888888",
  });
});

app.listen(process.env.PORT);
