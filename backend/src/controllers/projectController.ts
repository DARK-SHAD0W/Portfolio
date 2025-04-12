// ----------------------------------------------------------------------
// Contrôleur : projectController.ts
// Gère la logique métier pour les projets (CRUD)
// ----------------------------------------------------------------------

import { Request, Response } from "express";
import Project from "../models/ProjectModel";

// ----------------------------------------------------------------------
// GET /api/projects → Récupérer tous les projets
// ----------------------------------------------------------------------
const getAllProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await Project.find().select("-galleryImages"); // Ne pas envoyer les images de galerie directement
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération des projets." });
  }
};

// ----------------------------------------------------------------------
// GET /api/projects/:id → Récupérer un projet par ID
// ----------------------------------------------------------------------
const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Projet introuvable." });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération du projet." });
  }
};

// ----------------------------------------------------------------------
// POST /api/projects → Ajouter un nouveau projet
// ----------------------------------------------------------------------
const createProject = async (req: Request, res: Response) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Échec de la création du projet.", error });
  }
};

// ----------------------------------------------------------------------
// PUT /api/projects/:id → Modifier un projet existant
// ----------------------------------------------------------------------
const updateProject = async (req: Request, res: Response) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) return res.status(404).json({ message: "Projet introuvable." });

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: "Échec de la mise à jour du projet." });
  }
};

// ----------------------------------------------------------------------
// DELETE /api/projects/:id → Supprimer un projet
// ----------------------------------------------------------------------
const deleteProject = async (req: Request, res: Response) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Projet introuvable." });
    res.status(200).json({ message: "Projet supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la suppression." });
  }
};

// ----------------------------------------------------------------------
// Exportation des méthodes
// ----------------------------------------------------------------------
export const projectController = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
