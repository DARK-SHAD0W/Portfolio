// backend/src/controllers/MessageController.ts

import { RequestHandler } from 'express';
import Message from '../models/MessageModel';

/**
 * POST /api/messages
 * Crée et stocke un nouveau message dans MongoDB.
 * Accessible sans authentification.
 */
export const createMessage: RequestHandler = async (req, res) => {
  try {
    const { name, firstname,email, subject, message } = req.body;
    const newMessage = new Message({ name,firstname, email, subject, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message reçu.' });
  } catch (err) {
    console.error('createMessage error:', err);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de l'envoi du message." });
  }
};

/**
 * GET /api/messages
 * Récupère tous les messages, triés du plus récent au plus ancien.
 * Accessible uniquement par un admin authentifié.
 */
export const getMessages: RequestHandler = async (_, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error('getMessages error:', err);
    res
      .status(500)
      .json({ message: 'Erreur serveur lors de la récupération des messages.' });
  }
};


