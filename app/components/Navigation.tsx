"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { WalletButton } from "../wallet/WalletButton";

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

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`font-medium transition-colors py-2 px-1 -mx-1 rounded cursor-pointer inline-block ${
        isActive ? "text-black" : "text-black/70 hover:text-black"
      }`}
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey || e.button === 1) return;
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-[100]">
      <div className="text-center py-2.5 px-4 text-sm bg-black text-white">
        Routes: <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">/bio</code>, <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">/credits</code>, <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">/greeting</code>, <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">/debug</code>, <code className="bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">/docs</code>
      </div>
      <nav className="border-b border-black/20" style={{ backgroundColor: "#FFA977" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-6 relative z-[101]">
            <NavLink href="/bio" isActive={pathname === "/bio"}>
              Bio
            </NavLink>
            <NavLink href="/credits" isActive={pathname === "/credits"}>
              Credits
            </NavLink>
            <NavLink href="/greeting" isActive={pathname === "/greeting"}>
              Greeting
            </NavLink>
            <NavLink href="/debug" isActive={pathname === "/debug"}>
              Debug
            </NavLink>
            <NavLink href="/docs" isActive={pathname === "/docs"}>
              Docs
            </NavLink>
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
