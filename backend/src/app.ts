// -----------------------------
// Importations de modules
// -----------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";



// -----------------------------
// Chargement des variables d'environnement
// -----------------------------
dotenv.config();

// -----------------------------
// Initialisation de l'application Express
// -----------------------------
const app = express();

// -----------------------------
// Middlewares globaux
// -----------------------------

// Autoriser les requêtes Cross-Origin (accès entre frontend/backend)
app.use(cors());

// Affichage des logs HTTP dans la console (utile pour le développement)
app.use(morgan("dev"));

// Analyse automatique du corps des requêtes en JSON
app.use(express.json());

// Analyse automatique du corps des requêtes encodées (formulaires)
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// Route de test (peut être supprimée plus tard)
// -----------------------------
app.get("/", (req, res) => {
  res.send("Backend Node.js + Express fonctionne !");
});


// -----------------------------
// Dossier statique pour servir les fichiers (images, CV, etc.)
// -----------------------------
import path from "path";

// On rend le dossier "public" accessible via l'URL (ex : /public/cv/cv-ahmed-yahya.pdf)
app.use("/public", express.static(path.join(__dirname, "../../public")));
// -----------------------------
// Routes personnalisées
// -----------------------------
import staticRoutes from "./routes/staticRoutes";
app.use("/api", staticRoutes);


// -----------------------------
// Exportation de l'application (pour le serveur)
// -----------------------------
export default app;
