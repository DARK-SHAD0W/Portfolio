// File: backend/src/models/MessageModel.ts
import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  firstname: { type: String, required: true },
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  subject:   { type: String, required: true },
  message:   { type: String, required: true },
  createdAt: { type: Date,   default: Date.now },
});

export default model('Message', messageSchema);
