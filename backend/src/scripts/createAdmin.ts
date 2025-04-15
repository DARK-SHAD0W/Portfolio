// --------------------------------------------------------------
// Script pour créer un compte admin par défaut dans MongoDB
// --------------------------------------------------------------

import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/AdminModel";

// Chargement des variables d’environnement
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

const createAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(" Connexion MongoDB réussie");

    // Vérifie si un admin existe déjà
    const existingAdmin = await Admin.findOne({ email: "letaiefahmedyahya@gmail.com" });
    if (existingAdmin) {
      console.log(" Un admin avec cet email existe déjà");
      process.exit(0);
    }

    // Crée un nouvel admin
    const newAdmin = new Admin({
      email: "letaiefahmedyahya@gmail.com",
      password: "Admin123", // sera hashé automatiquement si middleware de hachage
    });

    await newAdmin.save();
    console.log(" Admin créé avec succès");
    process.exit(0);
  } catch (error) {
    console.error(" Erreur lors de la création de l’admin :", error);
    process.exit(1);
  }
};

createAdmin();
