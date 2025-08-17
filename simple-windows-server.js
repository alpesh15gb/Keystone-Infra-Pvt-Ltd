// Ultra-simple production server that works on any platform
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Check if files exist
const distPath = path.join(__dirname, 'dist/public');
const indexPath = path.join(distPath, 'index.html');

console.log('Checking files...');
console.log('Dist path:', distPath);
console.log('Index exists:', fs.existsSync(indexPath));

if (!fs.existsSync(indexPath)) {
  console.log('ERROR: index.html not found! Run npm run build first');
  process.exit(1);
}

// Serve static files with proper headers
app.use(express.static(distPath, {
  index: 'index.html',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html');
    }
  }
}));

// Handle all routes by serving React app
app.get('*', (req, res) => {
  console.log('Serving:', req.url);
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Production server running on 0.0.0.0:' + PORT);
  console.log('Access from: http://YOUR_SERVER_IP:' + PORT);
});