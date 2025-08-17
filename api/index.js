// Vercel serverless function for API endpoints
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // Handle API routes
  if (req.url.startsWith('/api/')) {
    res.status(200).json({ message: 'API endpoint - contact form not configured for serverless' });
    return;
  }

  // Serve the React app for all other routes
  const indexPath = path.join(__dirname, '../dist/public/index.html');
  
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } else {
    res.status(404).send('Page not found');
  }
};