import express from "express";
import { loginAdmin } from "../controllers/AuthController";

const router = express.Router();

// Route de connexion admin
router.post("/login", loginAdmin);

export default router;
