// ------------------------------------------------------------------
// Configuration de la base de données MongoDB via Mongoose
// ------------------------------------------------------------------

// -----------------------------
// Importation des modules
/*
// -----------------------------
import mongoose from "mongoose";

// -----------------------------
// Fonction de connexion à la base MongoDB
// -----------------------------
const connectDB = async () => {
  try {
    // Récupération de l'URI MongoDB depuis les variables d'environnement
    const MONGO_URI = process.env.MONGO_URI;

    // Vérification de la présence de l'URI
    if (!MONGO_URI) {
      throw new Error("URI de connexion MongoDB manquante (MONGO_URI non définie)");
    }

    // Connexion à MongoDB
    await mongoose.connect(MONGO_URI);

    // Message de confirmation
    console.log("Connexion à MongoDB établie avec succès");
  } catch (error) {
    // Affichage de l'erreur et arrêt du processus
    console.error("Erreur lors de la connexion à MongoDB :", error);
    process.exit(1);
  }
};

// -----------------------------
// Exportation de la fonction
// -----------------------------
export default connectDB;
*/