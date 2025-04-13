// ----------------------------------------------------------------------
// Contrôleur : ProjectController.ts
// Gère la logique métier pour les projets (CRUD)
// ----------------------------------------------------------------------

import { RequestHandler } from "express";
import Project from "../models/ProjectModel";

// ----------------------------------------------------------------------
// GET /api/projects → Récupérer tous les projets
// ----------------------------------------------------------------------
export const getAllProjects: RequestHandler = async (_req, res) => {
  try {
    const projects = await Project.find().select("-galleryImages"); // Exclure les images lourdes dans la liste
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur lors de la récupération des projets.",
    });
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
    res.status(500).json({
      message: "Erreur lors de la récupération du projet",
    });
  }
};

// ----------------------------------------------------------------------
// POST /api/projects → Ajouter un nouveau projet
// ----------------------------------------------------------------------
export const createProject: RequestHandler = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({
      message: "Échec de la création du projet.",
    });
  }
};

// ----------------------------------------------------------------------
// PUT /api/projects/:id → Modifier un projet existant
// ----------------------------------------------------------------------
export const updateProject: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProject = await Project.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedProject) {
      res
        .status(404)
        .json({ message: "Projet introuvable pour mise à jour" });
      return;
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour",
    });
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
      res
        .status(404)
        .json({ message: "Projet introuvable pour suppression" });
      return;
    }

    res.status(200).json({ message: "Projet supprimé avec succès" });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression",
    });
  }
};
