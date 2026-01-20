"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WalletButton } from "./wallet/WalletButton";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 border-b border-black/20">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="60" height="60" rx="12" fill="white"/>
              <ellipse cx="32" cy="34" rx="18" ry="12" stroke="black" strokeWidth="3" fill="none"/>
              <circle cx="32" cy="34" r="8" stroke="black" strokeWidth="2.5" fill="none"/>
              <circle cx="32" cy="34" r="4" fill="black"/>
              <line x1="8" y1="22" x2="56" y2="18" stroke="black" strokeWidth="3" strokeLinecap="round"/>
              <line x1="8" y1="46" x2="56" y2="50" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-black font-serif">Aleo-Scaffold</h1>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/bio" 
            className={`font-medium transition-colors font-serif ${
              pathname === "/bio" 
                ? "text-black" 
                : "text-black/70 hover:text-black"
            }`}
          >
            Bio
          </Link>
          <Link 
            href="/debug" 
            className={`font-medium transition-colors font-serif ${
              pathname === "/debug" 
                ? "text-black" 
                : "text-black/70 hover:text-black"
            }`}
          >
            Debug
          </Link>
          <Link 
            href="/docs" 
            className={`font-medium transition-colors font-serif ${
              pathname === "/docs" 
                ? "text-black" 
                : "text-black/70 hover:text-black"
            }`}
          >
            Docs
          </Link>
          <WalletButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-8 py-8 sm:py-12 mt-8 sm:mt-12">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black font-serif leading-tight flex items-center justify-center gap-4 whitespace-nowrap">
              <div className="relative flex-shrink-0" style={{ width: '1em', height: '1em' }}>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTWm1MiZYtEvWHRZQLt2MvCe4QNW8E8gYaA&s"
                  alt="Aleo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="whitespace-nowrap">Blockchain 
                
               <span className="text-black"> <br/>Starter-Kit</span></span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black/80 leading-relaxed font-serif">
              Build the next generation of private, on-chain applications with zero-knowledge proofs. 
              <br/> Shape the future of decentralized applications on Aleo blockchain.
            </p>

            {/* Instructions */}
            <div className="bg-white rounded-lg p-6 space-y-4">
              <p className="text-black font-serif">
                Get started by editing <code className="bg-black/5 px-2 py-1 rounded text-sm font-mono">packages/nextjs/app/page.tsx</code>
              </p>
              <p className="text-black font-serif">
                Edit your Aleo program <code className="bg-black/5 px-2 py-1 rounded text-sm font-mono">OnchainBio.aleo</code> in <code className="bg-black/5 px-2 py-1 rounded text-sm font-mono">packages/aleo/sources</code>
              </p>
              <p className="text-black font-serif">
                Tinker with your Aleo modules using the <Link href="/debug" className="font-semibold text-black hover:underline">Debug Modules</Link> tab.
              </p>
            </div>

            <Link href="/debug">
              <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition-all duration-200 text-sm sm:text-base font-serif">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
