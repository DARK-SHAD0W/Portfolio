// ------------------------------------------------------------------
// Point d’entrée principal du serveur Node.js (Express)
// ------------------------------------------------------------------

// -----------------------------
// Importation des modules
// -----------------------------
import app from "./app";
import dotenv from "dotenv";
//import connectDB from "./config/db"; // Connexion MongoDB

// -----------------------------
// Chargement des variables d'environnement
// -----------------------------
dotenv.config();

// -----------------------------
// Définition du port d'écoute (valeur par défaut : 5000)
// -----------------------------
const PORT = process.env.PORT || 5000;

// -----------------------------
// Connexion à MongoDB puis démarrage du serveur
// -----------------------------
/*
connectDB().then(() => {
    console.log(`connexion mongoDB reussie`);

});
*/
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
})