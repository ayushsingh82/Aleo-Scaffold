# Aleo-Scaffold

[Documentation](https://github.com/yourusername/aleo-scaffold) | [Website](https://aleo-scaffold.vercel.app)

🧪 **Aleo-Scaffold** is an open-source, cutting-edge toolkit for building decentralized applications (dApps) on Aleo blockchain. It's designed to streamline the process of creating and deploying Leo programs and building user interfaces that interact seamlessly with those programs.

⚙️ Built using **Leo**, **Aleo TS SDK**, **Next.js**, **Tailwind CSS**, and **TypeScript**.

## Features

🛫 **Deployment Scripts**: Simplify and automate your deployment workflow.

✅ **Program Hot Reload**: Your frontend automatically adapts to changes in your Leo programs as you edit them.

🪝 **Custom Hooks**: A collection of React hooks to simplify interactions with Leo programs.

🧱 **Components**: A library of common Web3 components to rapidly build your frontend.

🔐 **Wallet Integration**: Connect to any Aleo-compatible wallet and interact with the Aleo network directly from your frontend.

Perfect for hackathons, prototyping, or launching your next Aleo project!

## Getting Started

### Prerequisites

- Node.js 18+ 
- Aleo CLI tools (for local development)
- A Leo-compatible wallet

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aleo-scaffold.git
cd aleo-scaffold

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to access the application.

## Project Structure

```
aleo-scaffold/
├── my-app/
│   ├── app/             # Next.js frontend application
│   │   ├── page.tsx     # Home page
│   │   ├── bio/         # Bio page
│   │   └── debug/       # Debug modules page
│   ├── program/         # Leo program
│   │   └── src/
│   │       └── main.leo # onchainbio.aleo source
│   ├── README.md
│   └── package.json
├── AleoPass/            # Example AleoPass project
└── README.md
```

## Deployment

The `onchainbio.aleo` program has been deployed to Aleo Testnet.

**Program Address:** `onchainbio.aleo`

**Deployment Transaction:** [View on Explorer](https://testnet.explorer.provable.com/transaction/at1zq7k39c76wyqspwzs55lqdj5znzhdhjkv3p09wttn45l9r5j3vrs8ng3j7)

**Program Page:** [View Program](https://testnet.explorer.provable.com/program/onchainbio.aleo)

**Network:** Testnet  
**Status:** ✅ Deployed and Confirmed  
**Transaction ID:** `at1zq7k39c76wyqspwzs55lqdj5znzhdhjkv3p09wttn45l9r5j3vrs8ng3j7`

## Usage

### Editing the Frontend

Get started by editing `packages/nextjs/app/page.tsx`

### Editing Leo Programs

Edit your Aleo program `onchainbio.aleo` in `program/src/main.leo`

### Debugging Modules

Tinker with your Aleo modules using the **Debug Modules** tab in the navigation.

## Architecture

- **Frontend**: Next.js 14+ with TypeScript
- **Smart Contracts**: Leo (Aleo's smart contract language)
- **Privacy**: Zero-knowledge proofs via Aleo's cryptographic libraries
- **Styling**: Tailwind CSS

## Resources

- [Aleo Documentation](https://developer.aleo.org/)
- [Leo Programming Language](https://developer.aleo.org/leo/)
- [Zero-Knowledge Proofs](https://zeroknowledge.fm/)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - see LICENSE file for details.
