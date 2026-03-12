"use client";

import { useState } from "react";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { Transaction, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base";
import Navigation from "../components/Navigation";
import { stringToField } from "../lib/aleo";

const GREETING_PROGRAM_ID = "greeting.aleo";
const NETWORK = WalletAdapterNetwork.TestnetBeta;
const FEE = 35_000;

export default function GreetingPage() {
  const { publicKey, requestTransaction } = useWallet();
  const [message, setMessage] = useState("Hello Aleo");
  const [txStatus, setTxStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGreet = async () => {
    setError(null);
    setTxStatus(null);
    if (!publicKey || !requestTransaction) {
      setError("Connect your Leo wallet first.");
      return;
    }
    if (!message.trim()) {
      setError("Enter a message.");
      return;
    }
    setLoading(true);
    try {
      const inputs = [stringToField(message.trim().slice(0, 31))];
      const tx = Transaction.createTransaction(
        publicKey,
        NETWORK,
        GREETING_PROGRAM_ID,
        "greet",
        inputs,
        FEE
      );
      const txId = await requestTransaction(tx);
      setTxStatus(`Transaction submitted. ID: ${txId}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      <Navigation />
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-2">Greeting (greeting.aleo)</h1>
        <p className="text-black/80 mb-8">
          Call the <code className="bg-black/10 px-1 rounded">greeting.aleo</code> program. Deploy it first from{" "}
          <code className="bg-black/10 px-1 rounded">program-greeting/</code> with{" "}
          <code className="bg-black/10 px-1 rounded">./deploy.sh &lt;private_key&gt;</code>.
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800 text-sm">
            {error}
          </div>
        )}
        {txStatus && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 text-sm">
            {txStatus}
          </div>
        )}

        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="text-black font-semibold mb-2">Connected:</p>
          {publicKey ? (
            <p className="text-black text-sm font-mono break-all">{publicKey}</p>
          ) : (
            <p className="text-black/60 text-sm">Not connected</p>
          )}
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">Call greet</h2>
          <p className="text-black/80 text-sm mb-4">
            Submits a transaction to the <code className="bg-black/5 px-1 rounded">greet</code> transition with your message (max 31 chars).
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-2">Message</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello Aleo"
                maxLength={31}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>
            <button
              onClick={handleGreet}
              disabled={loading}
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? "Submitting…" : "Submit greet transaction"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
