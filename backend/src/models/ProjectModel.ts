// ------------------------------------------------------
// Importations
// ------------------------------------------------------
import mongoose, { Schema, Document } from "mongoose";

// ------------------------------------------------------
// Interface TypeScript pour typer un projet
// ------------------------------------------------------
export interface IProject extends Document {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  imageCard: Buffer;
  galleryImages: Buffer[];
  whatILearned: string;
  stack: {
    name: string;
    icon: string;
    description: string;
  }[];
}

// ------------------------------------------------------
// Schéma Mongoose correspondant au modèle Project
// ------------------------------------------------------
const projectSchema = new Schema<IProject>(
  {
    // Titre du projet (obligatoire)
    title: {
      type: String,
      required: true,
    },

    // Description courte affichée sur la carte
    description: {
      type: String,
      required: true,
    },

    // Technologies utilisées dans le projet
    technologies: {
      type: [String],
      required: true,
    },

    // Lien GitHub du projet
    githubLink: {
      type: String,
      required: true,
    },

    // (Optionnel) Lien vers la version en ligne / démo
    demoLink: {
      type: String,
    },

    // Image affichée dans la carte du projet (format buffer)
    imageCard: {
      type: Buffer,
      required: true,
    },

    // Galerie d’images du projet (tableau de buffers)
    galleryImages: {
      type: [Buffer],
      default: [],
    },

    // Ce que j’ai appris (retour d'expérience personnel)
    whatILearned: {
      type: String,
      required: true,
    },

    // Stack technique animé : tableau d'objets
    stack: [
      {
        name: { type: String, required: true },           // Nom de la techno
        icon: { type: String, required: true },           // Nom du fichier ou URL de l’icône
        description: { type: String, required: true },    // Brève description
      },
    ],
  },
  {
    timestamps: true, // Ajoute automatiquement createdAt et updatedAt
  }
);

// ------------------------------------------------------
// Export du modèle
// ------------------------------------------------------
export default mongoose.model<IProject>("Project", projectSchema);
