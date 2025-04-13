// ----------------------------------------------------------------------
// Middleware : uploadGalleryImages.ts
// Description : Gère l'upload de plusieurs images pour la galerie d’un projet
// ----------------------------------------------------------------------

import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

// ----------------------------------------------------------------------
// Configuration du stockage : en mémoire (buffer)
// ----------------------------------------------------------------------
const storage = multer.memoryStorage();

// ----------------------------------------------------------------------
// Filtrage des fichiers : accepte uniquement les images (jpeg, jpg, png)
// ----------------------------------------------------------------------
const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Fichier accepté
  } else {
    cb(new Error("Seules les images sont autorisées")); // Rejeté
  }
};

// ----------------------------------------------------------------------
// Middleware final : permet l'upload de plusieurs fichiers dans le champ "galleryImages"
// ----------------------------------------------------------------------
const uploadGalleryImages = multer({ storage, fileFilter }).array("galleryImages", 10); // Max 10 images

export default uploadGalleryImages;
