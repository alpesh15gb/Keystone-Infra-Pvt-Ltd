// Replit Autoscale Production Server
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, 'dist/public')));

// Handle all routes for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Keystone Infra website running on port ${PORT}`);
  console.log(`📱 Access at: https://${process.env.REPL_SLUG}-${process.env.REPL_OWNER}.replit.app`);
});