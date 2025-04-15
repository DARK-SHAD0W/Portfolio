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
import projectRoutes from "./routes/projectRoutes"; 
import authRoutes from "./routes/authRoutes";
import cvRoutes from "./routes/cvRoutes"; // Import de la route pour le CV
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
app.use(cors()); // Autoriser les requêtes Cross-Origin
app.use(morgan("dev")); // Logger les requêtes HTTP
app.use(express.json()); // Parser les requêtes JSON
app.use(express.urlencoded({ extended: true })); // Parser les formulaires

// -----------------------------------------------------
// Dossier statique : sert les fichiers comme les images ou le CV PDF
// -----------------------------------------------------
app.use(express.static(path.join(__dirname, "../public")));

// -----------------------------------------------------
// Route de index.html (pour la page d'acceuil)
// -----------------------------------------------------
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


// -----------------------------------------------------
// Montage des routes personnalisées
// -----------------------------------------------------
app.use("/api", staticRoutes);              // Pour les fichiers simples comme le CV
app.use("/api/projects", projectRoutes);    // ✅ Route API pour les projets
app.use("/api", cvRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", authRoutes); // 



// -----------------------------------------------------
// Exportation de l'application Express
// -----------------------------------------------------
export default app;
