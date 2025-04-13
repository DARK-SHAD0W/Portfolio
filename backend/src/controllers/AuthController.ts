import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/AdminModel";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

// Route POST /api/auth/login
export const loginAdmin: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin || !(await admin.comparePassword(password))) {
      res.status(401).json({ message: "Identifiants invalides" });
      return;
    }

    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "2h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'authentification" });
  }
};
