#!/bin/bash

echo "Running Security Scans..."

# Scan Docker image for vulnerabilities
echo "1. Scanning Docker image..."
docker scan localhost:5000/elephant-boardroom:latest || echo "Docker scan not available"

# Check for npm vulnerabilities
echo "2. Checking npm packages..."
npm audit

# Fix vulnerabilities if possible
npm audit fix
