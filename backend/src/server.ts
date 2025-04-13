// ------------------------------------------------------------------
// Point d’entrée principal du serveur Node.js avec Express
// ------------------------------------------------------------------

// -----------------------------
// Importations des modules
// -----------------------------
import app from "./app";                 // L'application Express
import dotenv from "dotenv";            // Pour charger les variables d’environnement
import connectDB from "./config/db";    // Connexion à la base MongoDB

// -----------------------------
// Chargement des variables d’environnement depuis .env
// -----------------------------
dotenv.config();

// -----------------------------
// Définition du port d'écoute (valeur par défaut : 5000)
// -----------------------------
const PORT = process.env.PORT || 5000;

// -----------------------------
// Connexion à MongoDB puis démarrage du serveur
// -----------------------------
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
  });
});
