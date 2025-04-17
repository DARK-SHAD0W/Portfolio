import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

// Stockage en mémoire
const storage = multer.memoryStorage();

// Accepte uniquement les images
const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Seules les images sont autorisées."));
  }
};

// Fusion des deux uploads (imageCard + galleryImages)
const uploadProjectImages = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 Mo max
}).fields([
  { name: "imageCard", maxCount: 1 },
  { name: "galleryImages", maxCount: 10 },
]);

export default uploadProjectImages;
