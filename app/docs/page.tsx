"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";

interface DocSection {
  id: string;
  title: string;
  description: string;
  sections: {
    title: string;
    content: string;
    type?: "text" | "code" | "list" | "heading";
  }[];
}

const docs: DocSection[] = [
  {
    id: "installation",
    title: "Installation",
    description: "Set up your development environment and install required tools",
    sections: [
      {
        title: "Prerequisites",
        content: "Node.js 18+, Rust (for Leo CLI), Git",
        type: "list"
      },
      {
        title: "Step 1: Install Node.js Dependencies",
        content: "cd my-app\nnpm install",
        type: "code"
      },
      {
        title: "Step 2: Install Leo CLI",
        content: "Leo is the programming language for Aleo. You need it to build and deploy programs.",
        type: "text"
      },
      {
        title: "Option 1: Official Installer (Recommended)",
        content: "curl -L https://get.aleo.org/install | bash",
        type: "code"
      },
      {
        title: "After installation, restart your terminal or run:",
        content: "source ~/.zshrc  # or source ~/.bash_profile",
        type: "code"
      },
      {
        title: "Verify Leo Installation",
        content: "leo --version",
        type: "code"
      },
      {
        title: "Step 3: Get Testnet Credits",
        content: "Visit Aleo Faucet at faucet.aleo.org or join Aleo Discord and request credits",
        type: "text"
      },
      {
        title: "Step 4: Generate a Private Key",
        content: "leo account new",
        type: "code"
      },
      {
        title: "Step 5: Run the Development Server",
        content: "npm run dev",
        type: "code"
      },
      {
        title: "",
        content: "Open http://localhost:3000 in your browser",
        type: "text"
      }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Learn how to deploy your Aleo program to testnet",
    sections: [
      {
        title: "Prerequisites",
        content: "Leo CLI installed, Private Key with testnet credits, Program built successfully",
        type: "list"
      },
      {
        title: "Getting Testnet Credits",
        content: "Visit Aleo Faucet (faucet.aleo.org) or Aleo Discord (discord.aleo.org)",
        type: "text"
      },
      {
        title: "Step 1: Build Your Program",
        content: "cd program\nLEO_DISABLE_UPDATE_CHECK=1 leo build",
        type: "code"
      },
      {
        title: "Step 2: Deploy to Testnet",
        content: "cd program\n./deploy.sh YOUR_PRIVATE_KEY",
        type: "code"
      },
      {
        title: "Or deploy manually:",
        content: "LEO_DISABLE_UPDATE_CHECK=1 leo deploy --private-key YOUR_PRIVATE_KEY --network testnet --endpoint https://api.explorer.provable.com/v1 --yes --broadcast",
        type: "code"
      },
      {
        title: "Step 3: Verify Deployment",
        content: "After deployment, you'll receive a Transaction ID and Program Address. Check your deployment on the Aleo Explorer at testnet.explorer.provable.com",
        type: "text"
      },
      {
        title: "Common Issues",
        content: "Insufficient Credits: Get more testnet credits from the faucet\nProgram Already Exists: Use leo upgrade instead, or change the program name",
        type: "list"
      }
    ]
  },
  {
    id: "hooks",
    title: "React Hooks",
    description: "Custom React hooks for interacting with Aleo programs",
    sections: [
      {
        title: "useWallet",
        content: "Connect and interact with Aleo wallets",
        type: "text"
      },
      {
        title: "Import:",
        content: 'import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";\n\nconst { publicKey, connect, disconnect, connected } = useWallet();',
        type: "code"
      },
      {
        title: "Properties:",
        content: "publicKey: Current connected wallet address\nconnect(): Connect to wallet\ndisconnect(): Disconnect wallet\nconnected: Boolean indicating connection status",
        type: "list"
      },
      {
        title: "useRequestTransaction",
        content: "Submit transactions to Aleo programs",
        type: "text"
      },
      {
        title: "Example:",
        content: 'const { requestTransaction, loading } = useRequestTransaction();\n\nconst handleSubmit = async () => {\n  const transaction = {\n    program: "onchainbio.aleo",\n    function: "register_bio",\n    inputs: [name, bio, currentBlock]\n  };\n  const txId = await requestTransaction(transaction);\n};',
        type: "code"
      },
      {
        title: "useRequestRecords",
        content: "Fetch records from Aleo programs",
        type: "text"
      },
      {
        title: "Example:",
        content: 'const { requestRecords } = useRequestRecords();\n\nconst fetchBioRecords = async () => {\n  const records = await requestRecords("onchainbio.aleo");\n  console.log("Bio records:", records);\n};',
        type: "code"
      },
      {
        title: "Other Available Hooks",
        content: "useRequestRecordPlaintexts: Get decrypted record plaintexts\nuseRequestTransactionHistory: Get transaction history\nuseDecryptMessage: Decrypt encrypted messages\nuseSignMessage: Sign messages with wallet",
        type: "list"
      }
    ]
  },
  {
    id: "helpers",
    title: "Helper Functions",
    description: "Utility functions and common patterns",
    sections: [
      {
        title: "Formatting Addresses",
        content: 'const formatAddress = (address: string, length = 4) => {\n  if (!address) return "";\n  if (address.length <= length * 2) return address;\n  return `${address.slice(0, length)}...${address.slice(-length)}`;\n};\n\nconst shortAddress = formatAddress(publicKey, 4);',
        type: "code"
      },
      {
        title: "Handling Transaction Errors",
        content: 'try {\n  const txId = await requestTransaction(transaction);\n  console.log("Success:", txId);\n} catch (error: any) {\n  if (error.message.includes("User rejected")) {\n    console.log("Transaction cancelled");\n  } else if (error.message.includes("Insufficient")) {\n    console.error("Insufficient balance");\n  } else {\n    console.error("Transaction failed:", error);\n  }\n}',
        type: "code"
      },
      {
        title: "Loading States",
        content: 'const [loading, setLoading] = useState(false);\n\nconst handleAction = async () => {\n  setLoading(true);\n  try {\n    await performAction();\n  } finally {\n    setLoading(false);\n  }\n};',
        type: "code"
      },
      {
        title: "Best Practices",
        content: "Always handle errors - Wallet operations can fail\nShow loading states - Transactions take time\nValidate inputs - Check data before submission\nUse TypeScript - Get type safety\nTest on testnet - Always test before mainnet",
        type: "list"
      }
    ]
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
            <div className="bg-white rounded-lg p-4 sticky top-24">
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
              <h2 className="text-3xl font-bold text-black mb-6">{selectedDoc.title}</h2>
              <div className="space-y-6">
                {selectedDoc.sections.map((section, index) => (
                  <div key={index}>
                    {section.title && (
                      <h3 className="text-lg font-bold text-black mb-2">{section.title}</h3>
                    )}
                    {section.type === "code" ? (
                      <pre className="bg-black/5 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm text-black font-mono whitespace-pre">
                          {section.content}
                        </code>
                      </pre>
                    ) : section.type === "list" ? (
                      <ul className="list-disc list-inside space-y-1 text-black/80">
                        {section.content.split('\n').map((item, i) => (
                          <li key={i} className="ml-2">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-black/80 leading-relaxed">{section.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
