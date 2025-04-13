// ------------------------------------------------------------------
// Middleware Multer pour la gestion des uploads d'images
// ------------------------------------------------------------------

import multer from "multer";

// ---------------------------------------------------------
// Configuration mémoire : les fichiers sont stockés en RAM
// ---------------------------------------------------------
const storage = multer.memoryStorage();

// ---------------------------------------------------------
// Middleware pour l’upload d’une image unique (ex: imageCard)
// ---------------------------------------------------------
export const uploadImageCard = multer({ storage }).single("imageCard");

// ---------------------------------------------------------
// Middleware pour l’upload de plusieurs images (ex: galleryImages)
// ---------------------------------------------------------
export const uploadGalleryImages = multer({ storage }).array("galleryImages", 10); // max 10 images
