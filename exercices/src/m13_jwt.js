import jwt from "jsonwebtoken";
import "dotenv/config";

const payload = {
  id: 1,
  role: "admin",
  userName: "Nantenaina",
};

const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "120" });

console.log(token);
