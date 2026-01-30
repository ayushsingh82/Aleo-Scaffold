# Aleo-Scaffold

A modern, open-source toolkit for building decentralized applications on the Aleo blockchain. Designed to streamline the process of creating and deploying Leo programs with beautiful, privacy-first user interfaces.

## Live Deployment

| Resource | Link |
|----------|------|
| **Program ID** | `onchainbio.aleo` |
| **Network** | Testnet |
| **Status** | Deployed |
| **Transaction** | [`at1zq7k39c76wyqspwzs55lqdj5znzhdhjkv3p09wttn45l9r5j3vrs8ng3j7`](https://testnet.explorer.provable.com/transaction/at1zq7k39c76wyqspwzs55lqdj5znzhdhjkv3p09wttn45l9r5j3vrs8ng3j7) |
| **Program Explorer** | [View on Provable](https://testnet.explorer.provable.com/program/onchainbio.aleo) |

## Features

- **Zero-Knowledge Privacy** - All user data is private by default using Aleo's ZK proofs
- **OnChain Bio System** - Decentralized profile storage where users own their data
- **Wallet Integration** - Seamless Leo Wallet connection with TestnetBeta support
- **Debug Console** - Built-in tools to test and interact with your Leo programs
- **Hot Reload** - Frontend adapts automatically as you edit Leo programs
- **Modern Stack** - Next.js 14, TypeScript, Tailwind CSS

## Quick Start

### Prerequisites

- Node.js 18+
- Leo CLI ([Installation Guide](https://developer.aleo.org/leo/installation))
- Leo Wallet browser extension

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to access the application.

## Project Structure

```
my-app/
├── app/
│   ├── page.tsx           # Home page
│   ├── bio/page.tsx       # Bio registration & viewing
│   ├── debug/page.tsx     # Debug console for Leo programs
│   ├── docs/page.tsx      # Documentation viewer
│   ├── components/        # Shared React components
│   └── wallet/            # Wallet integration utilities
├── program/
│   ├── src/main.leo       # onchainbio.aleo source code
│   ├── build/             # Compiled program artifacts
│   └── deploy.sh          # Deployment script
└── docs/                  # Markdown documentation
```

## OnChainBio Program

The `onchainbio.aleo` program implements a decentralized profile system:

### Record Structure

```leo
record BioProfile:
    owner as address.private;
    name as field.private;
    bio as field.private;
    created_at_block as u64.private;
    updated_at_block as u64.private;
```

### Functions

| Function | Description |
|----------|-------------|
| `register_bio` | Create a new bio profile |
| `update_bio` | Update existing profile (owner only) |
| `get_bio` | Retrieve profile details (owner only) |
| `view_bio` | Check if bio exists for an address |

## Development Workflow

### Edit Leo Programs

```bash
cd program
# Edit src/main.leo
leo build
```

### Deploy to Testnet

```bash
cd program
leo deploy --broadcast --yes
```

### Frontend Development

The frontend at `app/` automatically connects to your deployed program. Use the Debug page to test transactions before building UI.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Smart Contracts | Leo / Aleo |
| Privacy | Zero-Knowledge Proofs |
| Wallet | Leo Wallet Adapter |

## Resources

- [Aleo Developer Docs](https://developer.aleo.org/)
- [Leo Language Guide](https://developer.aleo.org/leo/)
- [Aleo Testnet Explorer](https://testnet.explorer.provable.com/)

## License

MIT
