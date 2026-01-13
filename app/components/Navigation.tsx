"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dimensions = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  
  return (
    <div className="flex items-center gap-2">
      <svg width={dimensions} height={dimensions} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="60" height="60" rx="12" fill="black"/>
        <ellipse cx="32" cy="34" rx="18" ry="12" stroke="white" strokeWidth="3" fill="none"/>
        <circle cx="32" cy="34" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="34" r="4" fill="white"/>
        <line x1="8" y1="22" x2="56" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="8" y1="46" x2="56" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span className={`${size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl"} font-bold text-black`}>
        Aleo-Scaffold
      </span>
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-black/20" style={{ backgroundColor: "#FFA977" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              href="/bio" 
              className={`font-medium transition-colors ${
                pathname === "/bio" 
                  ? "text-black" 
                  : "text-black/70 hover:text-black"
              }`}
            >
              Bio
            </Link>
            <Link 
              href="/debug" 
              className={`font-medium transition-colors ${
                pathname === "/debug" 
                  ? "text-black" 
                  : "text-black/70 hover:text-black"
              }`}
            >
              Debug
            </Link>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
