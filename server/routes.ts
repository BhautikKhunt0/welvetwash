import express from 'express';

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Placeholder for future API routes
router.get('*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

export default router;