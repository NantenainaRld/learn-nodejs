import jwt from "jsonwebtoken";
import "dotenv/config";

const authMidd = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied !" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res
        .status(403)
        .json({ error: "Access forbidden !", message: err.message });

    req.decoded = decoded;
    next();
  });
};

export default authMidd;
