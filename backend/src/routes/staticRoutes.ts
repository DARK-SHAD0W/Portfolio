// ------------------------------------------------------
// Route pour exposer un fichier statique (CV PDF)
// ------------------------------------------------------

import { Router } from "express";
import path from "path";
import fs from "fs";

const router = Router();

// GET /cv → téléchargement du CV au format PDF
router.get("/cv", (req, res) => {
  const cvPath = path.join(__dirname, "../../../public/cv/cv-ahmed-yahya.pdf");

  // Vérifie si le fichier existe
  if (!fs.existsSync(cvPath)) {
    return res.status(404).json({ message: "Fichier CV non trouvé." });
  }

  res.download(cvPath, "cv-ahmed-yahya.pdf"); // Force le téléchargement
});

export default router;
