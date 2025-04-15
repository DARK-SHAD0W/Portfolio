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
import isAuthenticated from "../middlewares/authMiddleware";
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
// POST /api/projects → Crée un nouveau projet avec images (protégée)
// -------------------------------------------------------------------
router.post("/", isAuthenticated, uploadCardImage, uploadGalleryImages, createProject);

// -------------------------------------------------------------------
// PUT /api/projects/:id → Met à jour un projet existant (protégée)
// -------------------------------------------------------------------
router.put("/:id", isAuthenticated, updateProject);

// -------------------------------------------------------------------
// DELETE /api/projects/:id → Supprime un projet (protégée)
// -------------------------------------------------------------------
router.delete("/:id", isAuthenticated, deleteProject);

// -------------------------------------------------------------------
// GET /api/projects/:id/image → Image principale du projet
// -------------------------------------------------------------------
router.get("/:id/image", getProjectImage);

// -------------------------------------------------------------------
// PUT /api/projects/:id/image-card → Met à jour l’image principale (protégée)
// -------------------------------------------------------------------
router.put("/:id/image-card", isAuthenticated, uploadCardImage, updateProjectImageCard);

// -------------------------------------------------------------------
// GET /api/projects/:id/gallery → Images de la galerie
// -------------------------------------------------------------------
router.get("/:id/gallery", getGalleryImages);

// -------------------------------------------------------------------
// PUT /api/projects/:id/gallery → Met à jour les images de galerie (protégée)
// -------------------------------------------------------------------
router.put("/:id/gallery", isAuthenticated, uploadGalleryImages, updateGalleryImages);

// -------------------------------------------------------------------
// Exportation du routeur
// -------------------------------------------------------------------
export default router;
