// Simple server test to verify Node.js can create a basic server
const http = require('http');

console.log('Testing basic HTTP server creation...');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>Basic Server Test</h1>
    <p>If you see this, Node.js can create servers on your system.</p>
    <p>Time: ${new Date()}</p>
    <p>URL: ${req.url}</p>
  `);
});

const port = 8080;

server.listen(port, '127.0.0.1', () => {
  console.log(`✓ Basic server running at http://127.0.0.1:${port}`);
  console.log('If this works, the issue is with your main application.');
  console.log('Press Ctrl+C to stop');
});

server.on('error', (err) => {
  console.error('✗ Server error:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Try a different port.`);
  }
});