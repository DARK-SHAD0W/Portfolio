// backend/src/routes/messageRoutes.ts

import express from 'express';
import {
  createMessage,
  getMessages,
} from '../controllers/MessageController';
import isAuthenticated from '../middlewares/authMiddleware';

const router = express.Router();

// POST public pour envoyer un message
router.post('/', createMessage);

// GET protégé pour lister tous les messages en back‑office
router.get('/', isAuthenticated, getMessages);

export default router;
