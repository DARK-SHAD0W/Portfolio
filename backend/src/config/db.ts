// ------------------------------------------------------------------
// Fichier : db.ts
// Description : Configuration et connexion à la base MongoDB avec Mongoose
// ------------------------------------------------------------------

import mongoose from "mongoose";

// ------------------------------------------------------------------
// Fonction de connexion à la base MongoDB
// ------------------------------------------------------------------
const connectDB = async () => {
  try {
    // Récupère l'URI de connexion depuis les variables d'environnement (.env)
    const MONGO_URI = process.env.MONGO_URI;

    // Vérifie que l'URI est bien définie
    if (!MONGO_URI) {
      throw new Error("URI de connexion MongoDB manquante (MONGO_URI non définie)");
    }

    // Connexion à la base MongoDB
    await mongoose.connect(MONGO_URI);

    // Message de confirmation dans la console
    console.log(" Connexion à MongoDB établie avec succès");
  } catch (error) {
    // En cas d'erreur, affichage et arrêt du serveur
    console.error("Erreur lors de la connexion à MongoDB :", error);
    process.exit(1);
  }
};

// ------------------------------------------------------------------
// Export de la fonction pour être utilisée dans le serveur principal
// ------------------------------------------------------------------
export default connectDB;
