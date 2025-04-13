// ----------------------------------------------------------------------
// Contrôleur : ProjectController.ts
// Gère la logique métier pour les projets (CRUD avec images)
// ----------------------------------------------------------------------

import { Request, Response, RequestHandler } from "express";
import Project from "../models/ProjectModel";

// ----------------------------------------------------------------------
// GET /api/projects → Récupérer tous les projets
// ----------------------------------------------------------------------
export const getAllProjects: RequestHandler = async (_req, res) => {
  try {
    const projects = await Project.find().select("-galleryImages");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération des projets." });
  }
};

// ----------------------------------------------------------------------
// GET /api/projects/:id → Détails d’un projet par ID
// ----------------------------------------------------------------------
export const getProjectById: RequestHandler = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Projet non trouvé" });
      return;
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération du projet" });
  }
};

// ----------------------------------------------------------------------
// POST /api/projects → Ajouter un nouveau projet avec images
// ----------------------------------------------------------------------
export const createProject: RequestHandler = async (req, res) => {
  try {
    const imageCardFile = req.file;
    const galleryFiles = req.files as Express.Multer.File[];

    if (!imageCardFile) {
      res.status(400).json({ message: "L'image principale (imageCard) est obligatoire." });
      return;
    }

    const imageCardBuffer = imageCardFile.buffer;
    const galleryImagesBuffer = galleryFiles?.map((file) => file.buffer) || [];

    const {
      title,
      description,
      technologies,
      githubLink,
      demoLink,
      whatILearned,
      stack,
    } = req.body;

    const parsedStack = typeof stack === "string" ? JSON.parse(stack) : stack;

    const newProject = new Project({
      title,
      description,
      technologies: Array.isArray(technologies) ? technologies : technologies.split(","),
      githubLink,
      demoLink,
      imageCard: imageCardBuffer,
      galleryImages: galleryImagesBuffer,
      whatILearned,
      stack: parsedStack,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Échec de la création du projet" });
  }
};

// ----------------------------------------------------------------------
// PUT /api/projects/:id → Modifier un projet existant
// ----------------------------------------------------------------------
export const updateProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProject = await Project.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedProject) {
      res.status(404).json({ message: "Projet introuvable pour mise à jour" });
      return;
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour" });
  }
};

// ----------------------------------------------------------------------
// DELETE /api/projects/:id → Supprimer un projet
// ----------------------------------------------------------------------
export const deleteProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      res.status(404).json({ message: "Projet introuvable pour suppression" });
      return;
    }
    res.status(200).json({ message: "Projet supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression" });
  }
};

// ----------------------------------------------------------------------
// GET /api/projects/:id/image → Image principale
// ----------------------------------------------------------------------
export const getProjectImage: RequestHandler = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).select("imageCard");
    if (!project || !project.imageCard) {
      res.status(404).json({ message: "Image non trouvée pour ce projet" });
      return;
    }
    res.set("Content-Type", "image/png");
    res.send(project.imageCard);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de l'image" });
  }
};

// ----------------------------------------------------------------------
// GET /api/projects/:id/gallery → Images de galerie (base64)
// ----------------------------------------------------------------------
export const getGalleryImages: RequestHandler = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project || !project.galleryImages?.length) {
      res.status(404).json({ message: "Aucune image de galerie trouvée" });
      return;
    }
    const gallery = project.galleryImages.map((imgBuffer) =>
      `data:image/png;base64,${imgBuffer.toString("base64")}`
    );
    res.status(200).json({ images: gallery });
  } catch {
    res.status(500).json({ message: "Erreur lors de la récupération de la galerie" });
  }
};

// ----------------------------------------------------------------------
// PUT /api/projects/:id/image-card → Modifier l'image principale
// ----------------------------------------------------------------------
export const updateProjectImageCard: RequestHandler = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Projet non trouvé" });
      return;
    }
    const imageCardFile = req.file;
    if (!imageCardFile) {
      res.status(400).json({ message: "Aucune image fournie" });
      return;
    }
    project.imageCard = imageCardFile.buffer;
    await project.save();
    res.status(200).json({ message: "Image principale mise à jour" });
  } catch {
    res.status(500).json({ message: "Erreur lors de la mise à jour de l’image principale" });
  }
};

// ----------------------------------------------------------------------
// PUT /api/projects/:id/gallery → Remplacer toutes les images de galerie
// ----------------------------------------------------------------------
export const updateGalleryImages: RequestHandler = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: "Projet non trouvé" });
      return;
    }

    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      res.status(400).json({ message: "Aucune image fournie pour la galerie" });
      return;
    }

    project.galleryImages = files.map((file) => file.buffer);
    await project.save();

    res.status(200).json({ message: "Galerie mise à jour avec succès" });
  } catch {
    res.status(500).json({ message: "Erreur lors de la mise à jour de la galerie" });
  }
};
