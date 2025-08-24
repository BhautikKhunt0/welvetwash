import express from 'express';
import { createServer } from 'http';
import session from 'express-session';
import routes from './routes.js';

const app = express();
const server = createServer(app);

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// JSON parsing middleware
app.use(express.json());

// API routes
app.use('/api', routes);

// Serve static files and handle SPA routing
app.use(express.static('dist/public'));

// Catch-all handler for SPA routing - serve React app
app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile('dist/public/index.html', { root: process.cwd() });
});

// Generic error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = parseInt(process.env.PORT || '5000', 10);

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});