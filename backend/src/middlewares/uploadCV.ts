// ----------------------------------------------------------------------
// Middleware : uploadCV.ts
// Gère l'upload du fichier CV (PDF uniquement)
// ----------------------------------------------------------------------

import multer from "multer";

// Configuration de multer pour accepter uniquement les fichiers PDF
const storage = multer.memoryStorage();

const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Seuls les fichiers PDF sont autorisés."));
  }
};

const uploadCV = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB
}).single("cv");

export default uploadCV;
