#!/bin/bash

echo "Testing Docker Image..."

# Run container in background
CONTAINER_ID=$(docker run -d -p 3001:3000 elephant-boardroom:latest)

# Wait for container to start
sleep 5

# Test if container is running
CONTAINER_STATUS=$(docker inspect -f '{{.State.Status}}' $CONTAINER_ID)

if [ "$CONTAINER_STATUS" != "running" ] && [ "$CONTAINER_STATUS" != "exited" ]; then
  echo "✗ Container failed to start"
  docker logs $CONTAINER_ID
  exit 1
fi

# Test if app responds
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3001)

if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✓ App is responding (HTTP $HTTP_CODE)"
else
    echo "✗ App is not responding (HTTP $HTTP_CODE)"
    docker logs $CONTAINER_ID
    docker stop $CONTAINER_ID
    docker rm $CONTAINER_ID
    exit 1
fi

# Test specific content
if curl -s http://localhost:3001 | grep -q "Hello from Elephant Board Room"; then
    echo "✓ Content is correct"
else
    echo "✗ Content is missing"
    docker stop $CONTAINER_ID
    docker rm $CONTAINER_ID
    exit 1
fi

# Cleanup
docker stop $CONTAINER_ID
docker rm $CONTAINER_ID

echo "✓ All Docker tests passed!"
