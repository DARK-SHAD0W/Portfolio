// ----------------------------------------------------------------------
// Middleware : uploadCardImage.ts
// Description : Gère l'upload d'une image principale (imageCard) en mémoire
// pour être stockée en tant que buffer dans la base de données MongoDB.
// ----------------------------------------------------------------------

import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

// ----------------------------------------------------------------------
// Configuration du stockage : en mémoire (pas sur disque)
// Cela permet de récupérer le fichier sous forme de buffer accessible via req.file.buffer
// ----------------------------------------------------------------------
const storage = multer.memoryStorage();

// ----------------------------------------------------------------------
// Fonction de filtrage des fichiers : accepte uniquement les images JPG, JPEG, PNG
// ----------------------------------------------------------------------
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Accepter le fichier
  } else {
    cb(new Error("Seuls les fichiers image JPG, JPEG ou PNG sont autorisés.")); // Refuser le fichier
  }
};

// ----------------------------------------------------------------------
// Création du middleware Multer pour un seul fichier (champ "imageCard")
// ----------------------------------------------------------------------
const uploadCardImage = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de taille : 5 Mo
}).single("imageCard"); // Nom du champ attendu dans le formulaire ou la requête multipart/form-data

// ----------------------------------------------------------------------
// Export du middleware prêt à être utilisé dans les routes
// ----------------------------------------------------------------------
export default uploadCardImage;
