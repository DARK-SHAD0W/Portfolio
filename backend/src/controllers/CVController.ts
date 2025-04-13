// ----------------------------------------------------------------------
// Contrôleur : CVController.ts
// Gère le téléchargement et la mise à jour du fichier CV
// ----------------------------------------------------------------------

import { Request, Response } from "express";
import path from "path";
import fs from "fs";

// 📍 Chemin absolu vers le fichier CV à remplacer
const CV_FILE_PATH = path.resolve(__dirname, "../../../public/cv/Cv_2025.pdf");

// GET /api/cv → Télécharger le fichier CV
export const downloadCV = (req: Request, res: Response): void => {
  if (!fs.existsSync(CV_FILE_PATH)) {
    res.status(404).json({ message: "CV non trouvé." });
    return;
  }

  res.download(CV_FILE_PATH, "Cv_Ahmed_Yahya.pdf");
};

// PUT /api/cv → Mettre à jour le fichier CV
export const updateCV = (req: Request, res: Response): void => {
  const file = req.file;

  if (!file) {
    res.status(400).json({ message: "Aucun fichier fourni." });
    return;
  }

  try {
    fs.writeFileSync(CV_FILE_PATH, file.buffer);
    res.status(200).json({ message: "CV mis à jour avec succès." });
  } catch {
    res.status(500).json({ message: "Erreur lors de l’enregistrement du fichier CV." });
  }
};
