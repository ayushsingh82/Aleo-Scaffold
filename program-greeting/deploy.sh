#!/bin/bash
# Deploy greeting.aleo to testnet
# Usage: ./deploy.sh <your_private_key>

if [ -z "$1" ]; then
    echo "Error: Private key is required"
    echo "Usage: ./deploy.sh <your_private_key>"
    exit 1
fi

PRIVATE_KEY=$1
echo "Building greeting.aleo..."
leo build
if [ $? -ne 0 ]; then
    echo "Build failed."
    exit 1
fi

echo "Deploying greeting.aleo to testnet..."
LEO_DISABLE_UPDATE_CHECK=1 leo deploy --private-key "$PRIVATE_KEY" --network testnet

if [ $? -eq 0 ]; then
    echo "Deployment successful! Use the /greeting page to call the greet transition."
else
    echo "Deployment failed."
    exit 1
fi
