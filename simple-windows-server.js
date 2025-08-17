// Ultra-simple Windows-compatible server
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/client')));

// Basic contact form endpoint (logs to console)
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:');
  console.log(`Name: ${req.body.firstName} ${req.body.lastName}`);
  console.log(`Email: ${req.body.email}`);
  console.log(`Company: ${req.body.company}`);
  console.log(`Message: ${req.body.message}`);
  res.json({ success: true, message: 'Message logged to console' });
});

// Serve the main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/client/index.html'));
});

// Simple server start
app.listen(port, (err) => {
  if (err) {
    console.error('Server error:', err);
    return;
  }
  console.log(`✓ Keystone Infra website running at http://localhost:${port}`);
  console.log('Contact form submissions will appear in this console');
});

// Handle errors
process.on('uncaughtException', (err) => {
  console.error('Server error:', err.message);
  process.exit(1);
});