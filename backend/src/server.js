/**
 * Portfolio Backend - Express server
 * Handles contact form submissions and serves API
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contact.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS: allow frontend in dev and production (Render: https://aditya-gaku.onrender.com)
const allowedOrigins = [
  'http://localhost:5173',
  'https://aditya-gaku.onrender.com',
  ...(process.env.CLIENT_URL ? [process.env.CLIENT_URL] : []),
].filter(Boolean);
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    return cb(null, false);
  },
  credentials: true,
}));
app.use(express.json());

// API routes
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API running' });
});

/**
 * Production: serve the frontend build from the same server.
 * This allows a single Render Web Service to host:
 * - Frontend at `/`
 * - Backend APIs under `/api/*`
 */
if (process.env.NODE_ENV === 'production') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // backend/src/server.js -> backend/src -> backend -> portfolio root
  const distPath = path.resolve(__dirname, '..', '..', 'frontend', 'dist');
  app.use(express.static(distPath));

  // SPA fallback (avoid intercepting API routes)
  app.get(/^(?!\/api\/).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Stop the existing process or set a different PORT in backend/.env.`);
    process.exit(1);
  }
  throw err;
});
