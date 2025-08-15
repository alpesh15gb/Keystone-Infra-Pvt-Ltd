// Simple test server for debugging external access issues
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head><title>External Access Test</title></head>
    <body>
      <h1>Server is accessible externally!</h1>
      <p>Time: ${new Date().toISOString()}</p>
      <p>Your IP: ${req.connection.remoteAddress}</p>
      <p>Port: ${process.env.PORT || 3000}</p>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

server.listen(port, host, () => {
  console.log(`Test server running on ${host}:${port}`);
  console.log(`Test from external: http://YOUR_SERVER_IP:${port}`);
});