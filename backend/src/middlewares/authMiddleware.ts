// ----------------------------------------------------------------------
// Middleware : authMiddleware.ts
// Protège les routes avec un token JWT pour authentification admin
// ----------------------------------------------------------------------

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

// Middleware pour vérifier la présence et la validité d’un token JWT
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Token manquant ou invalide" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Attache l’admin décodé à l’objet request si besoin plus tard
    (req as any).admin = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token invalide ou expiré" });
    return;
  }
};

export default isAuthenticated;
