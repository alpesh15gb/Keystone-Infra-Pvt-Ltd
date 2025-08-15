#!/bin/bash

# Test script to verify external access works
PORT=${PORT:-3000}

echo "Testing external access configuration..."
echo "=================================="

# Start the debug server
echo "Starting debug server on 0.0.0.0:${PORT}..."
HOST=0.0.0.0 PORT=${PORT} node debug-external-access.js &
SERVER_PID=$!

# Wait for server to start
sleep 2

# Test local access
echo "Testing local access..."
curl -s http://localhost:${PORT} | head -2 || echo "Local access failed"

echo ""
echo "Testing 0.0.0.0 access..."
curl -s http://0.0.0.0:${PORT} | head -2 || echo "0.0.0.0 access failed"

echo ""
echo "Server should be accessible from external IP on port ${PORT}"
echo "Test from external machine: curl http://YOUR_SERVER_IP:${PORT}"

# Keep server running for manual testing
echo ""
echo "Press Ctrl+C to stop the test server"
wait $SERVER_PID