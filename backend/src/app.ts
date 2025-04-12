// -----------------------------------------------------
// Importations de modules
// -----------------------------------------------------
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";

// Import des routes personnalisées
import staticRoutes from "./routes/staticRoutes";

// -----------------------------------------------------
// Chargement des variables d'environnement
// -----------------------------------------------------
dotenv.config();

// -----------------------------------------------------
// Initialisation de l'application Express
// -----------------------------------------------------
const app = express();

// -----------------------------------------------------
// Middlewares globaux
// -----------------------------------------------------

// Autoriser les requêtes Cross-Origin (communication entre frontend et backend)
app.use(cors());

// Affiche les requêtes HTTP dans la console (utile en développement)
app.use(morgan("dev"));

// Permet de parser automatiquement les requêtes JSON
app.use(express.json());

// Permet de parser les données de formulaires encodées (urlencoded)
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------------
// Dossier statique : sert les fichiers comme les images ou le CV PDF
// -----------------------------------------------------
app.use("/public", express.static(path.join(__dirname, "../../public")));

// -----------------------------------------------------
// Route de test simple (à supprimer ou modifier plus tard)
// -----------------------------------------------------
app.get("/", (_req, res) => {
  res.send("Backend Node.js + Express fonctionne !");
});

// -----------------------------------------------------
// Montage des routes personnalisées
// -----------------------------------------------------
app.use("/api", staticRoutes);

// -----------------------------------------------------
// Exportation de l'application Express
// -----------------------------------------------------
export default app;
