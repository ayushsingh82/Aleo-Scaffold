import Link from "next/link";

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
      <span className={`${size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl"} font-bold text-gray-900`}>
        BlindBet
      </span>
    </div>
  );
}

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/markets" className="text-gray-700 hover:text-gray-900 font-medium">
              Markets
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 font-medium">
              How it Works
            </Link>
            <Link href="/create-market" className="text-gray-700 hover:text-gray-900 font-medium">
              Create Market
            </Link>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
