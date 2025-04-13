// ----------------------------------------------------------------------
// Routes : cvRoutes.ts
// Gère les routes liées au CV
// ----------------------------------------------------------------------

import express from "express";
import uploadCV from "../middlewares/uploadCV";
import { downloadCV, updateCV } from "../controllers/CVController";

// import authMiddleware from "../middlewares/authMiddleware"; // si besoin

const router = express.Router();

// GET /api/cv → Télécharger le CV
router.get("/cv", downloadCV);

// PUT /api/cv → Mettre à jour le CV (admin uniquement)
router.put("/cv", uploadCV, updateCV); // ← ajouter authMiddleware si activé

export default router;
