// -------------------------------------------------------------------
// Fichier : projectRoutes.ts
// Description : Définition des routes API pour la gestion des projets
// -------------------------------------------------------------------

import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getProjectImage,
  getGalleryImages,
  updateProjectImageCard,
  updateGalleryImages,
} from "../controllers/ProjectController";

import uploadCardImage from "../middlewares/uploadCardImage";
import { uploadGalleryImages } from "../middlewares/uploadMiddleware";

// Initialisation du routeur Express
const router = express.Router();

// -------------------------------------------------------------------
// GET /api/projects → Récupère tous les projets
// -------------------------------------------------------------------
router.get("/", getAllProjects);

// -------------------------------------------------------------------
// GET /api/projects/:id → Récupère un projet par son ID
// -------------------------------------------------------------------
router.get("/:id", getProjectById);

// -------------------------------------------------------------------
// POST /api/projects → Crée un nouveau projet avec images
// -------------------------------------------------------------------
router.post("/", uploadCardImage, uploadGalleryImages, createProject);

// -------------------------------------------------------------------
// PUT /api/projects/:id → Met à jour un projet existant
// -------------------------------------------------------------------
router.put("/:id", updateProject);

// -------------------------------------------------------------------
// DELETE /api/projects/:id → Supprime un projet
// -------------------------------------------------------------------
router.delete("/:id", deleteProject);

// -------------------------------------------------------------------
// GET /api/projects/:id/image → Image principale du projet
// -------------------------------------------------------------------
router.get("/:id/image", getProjectImage);

// -------------------------------------------------------------------
// PUT /api/projects/:id/image-card → Met à jour l’image principale
// -------------------------------------------------------------------
router.put("/:id/image-card", uploadCardImage, updateProjectImageCard);

// -------------------------------------------------------------------
// GET /api/projects/:id/gallery → Images de la galerie
// -------------------------------------------------------------------
router.get("/:id/gallery", getGalleryImages);

// -------------------------------------------------------------------
// PUT /api/projects/:id/gallery → Met à jour les images de galerie
// -------------------------------------------------------------------
router.put("/:id/gallery", uploadGalleryImages, updateGalleryImages);

// -------------------------------------------------------------------
// Exportation du routeur
// -------------------------------------------------------------------
export default router;
