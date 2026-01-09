import Image from "next/image";
import Link from "next/link";

// BlindBet Logo SVG Component
function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dimensions = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  const fontSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl";
  
  return (
    <div className="flex items-center gap-2">
      <svg width={dimensions} height={dimensions} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background rounded square */}
        <rect x="2" y="2" width="60" height="60" rx="12" fill="black"/>
        
        {/* Eye shape - almond/ellipse */}
        <ellipse cx="32" cy="34" rx="18" ry="12" stroke="white" strokeWidth="3" fill="none"/>
        
        {/* Iris */}
        <circle cx="32" cy="34" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
        
        {/* Pupil */}
        <circle cx="32" cy="34" r="4" fill="white"/>
        
        {/* Blindfold diagonal lines */}
        <line x1="8" y1="22" x2="56" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="8" y1="46" x2="56" y2="50" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span className={`${fontSize} font-bold text-black`}>BlindBet</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <Link href="#" className="flex items-center gap-2">
          <Logo size="lg" />
        </Link>
        <div className="flex gap-6 text-black font-medium">
          <Link href="#" className="hover:opacity-70 transition-opacity">Markets</Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">How it Works</Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">Create Market</Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">Connect Wallet</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-black mb-6">
            Private Prediction Markets
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-10">
            Build and trade on prediction markets with complete privacy. 
            Powered by zero-knowledge cryptography on Aleo blockchain.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg border-2 border-transparent hover:border-black transition-all">
              Start Trading
            </button>
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg border-2 border-transparent hover:border-black transition-all">
              Create Market
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-8 border-2 border-transparent shadow-lg">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-black mb-3">100% Private</h3>
            <p className="text-black/80">
              All transactions and positions are encrypted using zero-knowledge proofs. 
              Your data stays yours.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-8 border-2 border-transparent shadow-lg">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-black mb-3">Decentralized</h3>
            <p className="text-black/80">
              Built on Aleo blockchain for trustless execution. No central authority, 
              no KYC required.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-8 border-2 border-transparent shadow-lg">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-black mb-3">Fast Settlement</h3>
            <p className="text-black/80">
              Quick market resolution and prize distribution. Trade with instant 
              feedback and automated payouts.
            </p>
          </div>
        </div>

        {/* Live Markets Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">Live Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Market Card 1 */}
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-black/60">Crypto</span>
                  <h4 className="text-xl font-bold text-black">BTC to reach $100K by end of 2024?</h4>
                </div>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">Active</span>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">Yes</span>
                  <div className="text-2xl font-bold text-black">62¢</div>
                </div>
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">No</span>
                  <div className="text-2xl font-bold text-black">38¢</div>
                </div>
              </div>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all">
                Trade This Market
              </button>
            </div>

            {/* Market Card 2 */}
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-black/60">Sports</span>
                  <h4 className="text-xl font-bold text-black">Lakers vs Warriors - Who wins?</h4>
                </div>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">Active</span>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">Lakers</span>
                  <div className="text-2xl font-bold text-black">55¢</div>
                </div>
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">Warriors</span>
                  <div className="text-2xl font-bold text-black">45¢</div>
                </div>
              </div>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all">
                Trade This Market
              </button>
            </div>

            {/* Market Card 3 */}
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-black/60">Politics</span>
                  <h4 className="text-xl font-bold text-black">Fed cuts rates in Q4 2024?</h4>
                </div>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">Active</span>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">Yes</span>
                  <div className="text-2xl font-bold text-black">48¢</div>
                </div>
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">No</span>
                  <div className="text-2xl font-bold text-black">52¢</div>
                </div>
              </div>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all">
                Trade This Market
              </button>
            </div>

            {/* Market Card 4 */}
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-sm text-black/60">Technology</span>
                  <h4 className="text-xl font-bold text-black">GPT-5 released before 2025?</h4>
                </div>
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">Active</span>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">Yes</span>
                  <div className="text-2xl font-bold text-black">71¢</div>
                </div>
                <div className="flex-1 bg-black/5 rounded-lg p-3 text-center">
                  <span className="text-black/60 text-sm">No</span>
                  <div className="text-2xl font-bold text-black">29¢</div>
                </div>
              </div>
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all">
                Trade This Market
              </button>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg text-center">
              <div className="text-3xl font-bold text-black mb-2">1</div>
              <h4 className="text-lg font-bold text-black mb-2">Connect Wallet</h4>
              <p className="text-black/80 text-sm">Link your Aleo wallet to get started</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg text-center">
              <div className="text-3xl font-bold text-black mb-2">2</div>
              <h4 className="text-lg font-bold text-black mb-2">Pick a Market</h4>
              <p className="text-black/80 text-sm">Browse or create prediction markets</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg text-center">
              <div className="text-3xl font-bold text-black mb-2">3</div>
              <h4 className="text-lg font-bold text-black mb-2">Trade Privately</h4>
              <p className="text-black/80 text-sm">Buy Yes or No positions anonymously</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-transparent shadow-lg text-center">
              <div className="text-3xl font-bold text-black mb-2">4</div>
              <h4 className="text-lg font-bold text-black mb-2">Claim Winnings</h4>
              <p className="text-black/80 text-sm">Get paid when markets resolve</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-12 border-2 border-transparent shadow-lg text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Ready to Start?</h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands of traders using BlindBet for private prediction markets
          </p>
          <button className="px-10 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-black/80 transition-all">
            Launch App →
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/20 py-8">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo size="sm" />
          <div className="flex gap-6 text-black/70">
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">Discord</a>
            <a href="#" className="hover:text-black transition-colors">GitHub</a>
            <a href="#" className="hover:text-black transition-colors">Docs</a>
          </div>
          <div className="text-black/70">
            © 2024 BlindBet. Built on Aleo.
          </div>
        </div>
      </footer>
    </div>
  );
}

