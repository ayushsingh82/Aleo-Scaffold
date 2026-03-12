"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      <Navigation />

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
                <strong>Programs & routes:</strong> <Link href="/bio" className="font-semibold text-black hover:underline">Bio</Link> (onchainbio.aleo),{" "}
                <Link href="/credits" className="font-semibold text-black hover:underline">Credits</Link> (credits.aleo),{" "}
                <Link href="/greeting" className="font-semibold text-black hover:underline">Greeting</Link> (greeting.aleo).
              </p>
              <p className="text-black font-serif">
                Edit <code className="bg-black/5 px-2 py-1 rounded text-sm font-mono">program/src/main.leo</code> (onchainbio) or <code className="bg-black/5 px-2 py-1 rounded text-sm font-mono">program-greeting/src/main.leo</code>, then <code className="bg-black/5 px-2 py-1 rounded text-sm font-mono">leo build</code> and deploy.
              </p>
              <p className="text-black font-serif">
                Use the <Link href="/debug" className="font-semibold text-black hover:underline">Debug</Link> and <Link href="/docs" className="font-semibold text-black hover:underline">Docs</Link> pages to test and learn.
              </p>
            </div>

            <Link href="/bio">
              <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition-all duration-200 text-sm sm:text-base font-serif">
                Bio &amp; Programs
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
