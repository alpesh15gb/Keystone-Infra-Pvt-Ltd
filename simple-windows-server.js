// Ultra-simple production server that works on any platform
const express = require('express');
const path = require('path');

const app = express();

// Serve built files
app.use(express.static(path.join(__dirname, 'dist/public')));

// API endpoints (if any)
app.use('/api/*', (req, res) => {
  res.json({ message: 'API not configured for production' });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on 0.0.0.0:${PORT}`);
  console.log(`Access from: http://YOUR_SERVER_IP:${PORT}`);
});