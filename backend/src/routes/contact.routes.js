/**
 * Contact form API routes
 * POST /api/contact - Submit contact form
 */

import express from 'express';
import { submitContact } from '../controllers/contact.controller.js';

const router = express.Router();

// Helpful for browser checks / uptime monitors
router.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'Contact endpoint is alive. Use POST /api/contact to submit the form.',
    methods: ['POST'],
  });
});

router.post('/', submitContact);

export default router;
