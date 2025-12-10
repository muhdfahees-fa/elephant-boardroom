#!/bin/bash
set -e

IMAGE="elephant-boardroom:latest"
CONTAINER_NAME="elephant-boardroom-test"
CONTAINER_PORT=3000

echo "Testing Docker Image: $IMAGE"

# Always cleanup
cleanup() {
  docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
}
trap cleanup EXIT

# Start container with RANDOM host port
CONTAINER_ID=$(docker run -d \
  --name "$CONTAINER_NAME" \
  -p 0:$CONTAINER_PORT \
  "$IMAGE")

if [ -z "$CONTAINER_ID" ]; then
  echo "✗ Failed to start container"
  exit 1
fi

echo "✓ Container started"

# Get dynamically assigned port
HOST_PORT=$(docker inspect \
  --format='{{(index (index .NetworkSettings.Ports "'$CONTAINER_PORT'/tcp") 0).HostPort}}' \
  "$CONTAINER_NAME")

echo "✓ Mapped port: localhost:$HOST_PORT → $CONTAINER_PORT"

# Wait for app to respond (max ~30s)
echo "Waiting for app to respond..."
for i in {1..15}; do
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$HOST_PORT || true)
  if [ "$HTTP_CODE" == "200" ]; then
    break
  fi
  sleep 2
done

if [ "$HTTP_CODE" != "200" ]; then
  echo "✗ App did not become ready"
  docker logs "$CONTAINER_NAME"
  exit 1
fi

echo "✓ App is responding (HTTP 200)"

# Content check
if curl -s http://localhost:$HOST_PORT | grep -q "Hello from Elephant Board Room"; then
  echo "✓ Content is correct"
else
  echo "✗ Content missing or incorrect"
  docker logs "$CONTAINER_NAME"
  exit 1
fi

echo "✅ All Docker tests passed!"
