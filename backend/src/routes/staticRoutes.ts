// ------------------------------------------------------------------
// Routes statiques (fichiers ou messages simples comme le CV ou un test)
// ------------------------------------------------------------------

import { Router, Request, Response } from "express";
import path from "path";
import fs from "fs";

const router = Router();

// ------------------------------------------------------------------
// Route test simple (GET /api/test) → Vérifie que le routeur fonctionne
// ------------------------------------------------------------------
router.get("/test", (_req: Request, res: Response) => {
  res.json({ message: "Route statique opérationnelle" });
});

// ------------------------------------------------------------------
// Route pour télécharger le CV PDF localement (GET /api/cv)
// ------------------------------------------------------------------
router.get("/cv", (_req: Request, res: Response) => {
  const cvPath = path.resolve(__dirname, "../../public/cv/Cv_2025.pdf");

  return res.download(cvPath, "Cv_Ahmed_Yahya.pdf");
});

export default router;
