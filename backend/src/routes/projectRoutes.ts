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

import uploadProjectImages from "../middlewares/uploadProjectImages";
import isAuthenticated from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);

// ✅ Route modifiée avec middleware combiné
router.post("/", isAuthenticated, uploadProjectImages, createProject);

router.put("/:id", isAuthenticated, updateProject);
router.delete("/:id", isAuthenticated, deleteProject);

router.get("/:id/image", getProjectImage);
router.put("/:id/image-card", isAuthenticated, uploadProjectImages, updateProjectImageCard);
router.get("/:id/gallery", getGalleryImages);
router.put("/:id/gallery", isAuthenticated, uploadProjectImages, updateGalleryImages);

export default router;
