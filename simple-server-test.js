const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('SERVER WORKING - External access confirmed!');
});

const port = 8080;
server.listen(port, '0.0.0.0', () => {
  console.log(`Simple test server running on 0.0.0.0:${port}`);
  console.log(`Test externally: http://YOUR_SERVER_IP:${port}`);
});