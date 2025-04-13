// ------------------------------------------------------------------
// Script temporaire d’insertion d’un projet de test dans MongoDB
// ------------------------------------------------------------------

import dotenv from "dotenv";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import Project from "../models/ProjectModel";

// Charger les variables d’environnement (.env)
dotenv.config();

// Connexion à MongoDB
const MONGO_URI = process.env.MONGO_URI || "";

mongoose.connect(MONGO_URI).then(async () => {
  console.log("Connecté à MongoDB - insertion du projet...");

  // Lire une image (imageCard) depuis le disque (doit exister dans /public/images)
  const imageCard = fs.readFileSync(
    path.join(__dirname, "../../public/images/image1.png")
  );

  // Lire une galerie de plusieurs images (doivent exister)
  const gallery1 = fs.readFileSync(
    path.join(__dirname, "../../public/images/gallery1.png")
  );
  const gallery2 = fs.readFileSync(
    path.join(__dirname, "../../public/images/gallery2.png")
  );

  // Création du projet
  const project = new Project({
    title: "Portfolio FullStack",
    description: "Site personnel pour présenter mes projets et compétences.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    githubLink: "https://github.com/tonprofil/portfolio",
    imageCard,
    galleryImages: [gallery1, gallery2],
    whatILearned: "J’ai appris à gérer un projet complet frontend + backend avec base de données.",
    stack: [
      {
        name: "React",
        icon: "react.png",
        description: "Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques.",
      },
      {
        name: "Node.js",
        icon: "node.png",
        description: "Environnement serveur basé sur JavaScript pour créer une API rapide.",
      },
      {
        name: "MongoDB",
        icon: "mongodb.png",
        description: "Base de données NoSQL flexible pour stocker mes projets et images.",
      },
    ],
  });

  await project.save();
  console.log("Projet inséré avec succès !");
  mongoose.disconnect();
});
