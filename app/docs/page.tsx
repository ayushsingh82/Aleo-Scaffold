"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";

const docs = [
  {
    id: "installation",
    title: "Installation",
    description: "Set up your development environment and install required tools",
    content: `
# Installation Guide

This guide will help you set up the Aleo Scaffold development environment.

## Prerequisites

- **Node.js** 18+ and npm
- **Rust** (for Leo CLI)
- **Git**

## Step 1: Install Node.js Dependencies

\`\`\`bash
cd my-app
npm install
\`\`\`

## Step 2: Install Leo CLI

Leo is the programming language for Aleo. You need it to build and deploy programs.

### Option 1: Official Installer (Recommended)

\`\`\`bash
curl -L https://get.aleo.org/install | bash
\`\`\`

After installation, restart your terminal or run:
\`\`\`bash
source ~/.zshrc  # or source ~/.bash_profile
\`\`\`

### Option 2: Build from Source

If the installer doesn't work:

\`\`\`bash
# Install Rust if you don't have it
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Clone and build Leo
git clone https://github.com/AleoHQ/leo.git
cd leo
cargo install --path .
\`\`\`

### Verify Leo Installation

\`\`\`bash
leo --version
\`\`\`

You should see something like: \`leo 3.x.x\`

## Step 3: Set Up Your Development Environment

### Install Development Tools

\`\`\`bash
# Install TypeScript globally (optional)
npm install -g typescript

# Install ESLint (optional)
npm install -g eslint
\`\`\`

## Step 4: Get Testnet Credits

Before deploying, you need testnet credits:

1. Visit [Aleo Faucet](https://faucet.aleo.org/)
2. Or join [Aleo Discord](https://discord.aleo.org/) and request credits

## Step 5: Generate a Private Key

\`\`\`bash
leo account new
\`\`\`

Save your private key securely! You'll need it for deployment.

## Step 6: Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.
    `
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Learn how to deploy your Aleo program to testnet",
    content: `
# Deployment Guide

This guide will help you deploy your Aleo program to the testnet.

## Prerequisites

1. **Leo CLI installed** - See Installation Guide
2. **Private Key** - You need an Aleo private key with testnet credits
3. **Program Built** - Your program must compile successfully

## Getting Testnet Credits

Before deploying, you need testnet credits. You can get them from:
- [Aleo Faucet](https://faucet.aleo.org/)
- [Aleo Discord](https://discord.aleo.org/)

## Deployment Steps

### 1. Build Your Program

First, make sure your program compiles:

\`\`\`bash
cd program
LEO_DISABLE_UPDATE_CHECK=1 leo build
\`\`\`

### 2. Deploy to Testnet

Deploy using the deploy script:

\`\`\`bash
cd program
./deploy.sh YOUR_PRIVATE_KEY
\`\`\`

Or deploy manually:

\`\`\`bash
LEO_DISABLE_UPDATE_CHECK=1 leo deploy \\
  --private-key YOUR_PRIVATE_KEY \\
  --network testnet \\
  --endpoint https://api.explorer.provable.com/v1 \\
  --yes \\
  --broadcast
\`\`\`

### 3. Verify Deployment

After deployment, you'll receive:
- **Transaction ID**: Use this to track your deployment
- **Program Address**: Your program's on-chain identifier

Check your deployment on the [Aleo Explorer](https://testnet.explorer.provable.com/)

## Common Issues

### Insufficient Credits
- **Error**: "Your public balance is insufficient"
- **Solution**: Get more testnet credits from the faucet

### Program Already Exists
- **Error**: "The program already exists on the network"
- **Solution**: Use \`leo upgrade\` instead of \`leo deploy\`, or change the program name
    `
  },
  {
    id: "hooks",
    title: "React Hooks",
    description: "Custom React hooks for interacting with Aleo programs",
    content: `
# React Hooks for Aleo

This scaffold provides custom React hooks to interact with Aleo programs easily.

## Available Hooks

### useWallet

Connect and interact with Aleo wallets.

\`\`\`typescript
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";

const { publicKey, connect, disconnect, connected } = useWallet();
\`\`\`

**Properties:**
- \`publicKey\`: Current connected wallet address
- \`connect()\`: Connect to wallet
- \`disconnect()\`: Disconnect wallet
- \`connected\`: Boolean indicating connection status

### useRequestTransaction

Submit transactions to Aleo programs.

\`\`\`typescript
import { useRequestTransaction } from "./wallet/utils/RequestTransaction";

const { requestTransaction, loading, error } = useRequestTransaction();

const handleSubmit = async () => {
  const transaction = {
    program: "onchainbio.aleo",
    function: "register_bio",
    inputs: [name, bio, currentBlock]
  };
  
  const txId = await requestTransaction(transaction);
  console.log("Transaction ID:", txId);
};
\`\`\`

### useRequestRecords

Fetch records from Aleo programs.

\`\`\`typescript
import { useRequestRecords } from "./wallet/utils/RequestRecords";

const { requestRecords, loading, error } = useRequestRecords();

const fetchBioRecords = async () => {
  const records = await requestRecords("onchainbio.aleo");
  console.log("Bio records:", records);
};
\`\`\`

## Complete Example

\`\`\`typescript
"use client";

import { useState } from "react";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { useRequestTransaction } from "./wallet/utils/RequestTransaction";
import { DecryptPermission, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base";

export default function BioForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const { publicKey, connect, connected } = useWallet();
  const { requestTransaction, loading } = useRequestTransaction();

  const handleSubmit = async () => {
    if (!connected) {
      await connect(DecryptPermission.UponRequest, WalletAdapterNetwork.Testnet);
      return;
    }

    const transaction = {
      program: "onchainbio.aleo",
      function: "register_bio",
      inputs: [name, bio, Date.now().toString()]
    };

    try {
      const txId = await requestTransaction(transaction);
      console.log("Transaction submitted:", txId);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Register Bio"}
      </button>
    </div>
  );
}
\`\`\`
    `
  },
  {
    id: "helpers",
    title: "Helper Functions",
    description: "Utility functions and common patterns",
    content: `
# Helper Functions and Utilities

This document describes the helper functions and utilities available in the scaffold.

## Wallet Utilities

### RequestTransaction

Submit a transaction to an Aleo program.

**Location:** \`app/wallet/utils/RequestTransaction.tsx\`

**Usage:**
\`\`\`typescript
import { useRequestTransaction } from "./wallet/utils/RequestTransaction";

const { requestTransaction, loading, error } = useRequestTransaction();

const txId = await requestTransaction({
  program: "onchainbio.aleo",
  function: "register_bio",
  inputs: ["Alice", "Developer", "12345"]
});
\`\`\`

### RequestRecords

Fetch encrypted records from a program.

**Location:** \`app/wallet/utils/RequestRecords.tsx\`

**Usage:**
\`\`\`typescript
import { useRequestRecords } from "./wallet/utils/RequestRecords";

const { requestRecords, loading } = useRequestRecords();

const records = await requestRecords("onchainbio.aleo");
\`\`\`

## Common Patterns

### Formatting Addresses

\`\`\`typescript
const formatAddress = (address: string, length: number = 4) => {
  if (!address) return "";
  if (address.length <= length * 2) return address;
  return \`\${address.slice(0, length)}...\${address.slice(-length)}\`;
};

// Usage
const shortAddress = formatAddress(publicKey, 4); // "aleo1...xyz"
\`\`\`

### Handling Transaction Errors

\`\`\`typescript
const handleTransaction = async () => {
  try {
    const txId = await requestTransaction(transaction);
    console.log("Success:", txId);
    // Show success message
  } catch (error: any) {
    if (error.message.includes("User rejected")) {
      // User cancelled
      console.log("Transaction cancelled");
    } else if (error.message.includes("Insufficient")) {
      // Not enough credits
      console.error("Insufficient balance");
    } else {
      // Other error
      console.error("Transaction failed:", error);
    }
  }
};
\`\`\`
    `
  }
];

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState(docs[0]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-2">Documentation</h1>
        <p className="text-black/80 mb-8">
          Learn how to build, deploy, and interact with Aleo programs using this scaffold.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-4 sticky top-20">
              <h2 className="text-lg font-bold text-black mb-4">Guides</h2>
              <nav className="space-y-2">
                {docs.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedDoc.id === doc.id
                        ? "bg-black text-white"
                        : "text-black/70 hover:bg-black/5"
                    }`}
                  >
                    <div className="font-medium">{doc.title}</div>
                    <div className="text-xs mt-1 opacity-80">{doc.description}</div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-4">{selectedDoc.title}</h2>
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap text-sm text-black font-mono bg-black/5 p-4 rounded-lg overflow-x-auto">
                  {selectedDoc.content}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
