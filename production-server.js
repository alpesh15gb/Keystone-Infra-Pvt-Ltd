// Production server for external access
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist/public')));

// Handle all routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public/index.html'));
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Production server running on ${host}:${port}`);
  console.log(`Access from external: http://YOUR_SERVER_IP:${port}`);
});