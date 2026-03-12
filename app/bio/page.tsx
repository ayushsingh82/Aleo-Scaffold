"use client";

import { useState } from "react";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { Transaction, WalletAdapterNetwork, WalletNotConnectedError } from "@demox-labs/aleo-wallet-adapter-base";
import Navigation from "../components/Navigation";
import { PROGRAM_ID, stringToField } from "../lib/aleo";

const NETWORK = WalletAdapterNetwork.TestnetBeta;
const FEE = 150_000;

export default function BioPage() {
  const { publicKey, requestTransaction, requestRecords } = useWallet();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [bioData, setBioData] = useState<string[] | Record<string, unknown> | null>(null);
  const [txStatus, setTxStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<"register" | "fetch" | "view" | null>(null);

  const handleRegister = async () => {
    setError(null);
    setTxStatus(null);
    if (!publicKey || !requestTransaction) {
      setError("Connect your Leo wallet first.");
      return;
    }
    if (!name.trim() || !bio.trim()) {
      setError("Name and bio are required.");
      return;
    }
    setLoading("register");
    try {
      const inputs = [
        stringToField(name.trim()),
        stringToField(bio.trim()),
        "0u64", // current_block; in production you could fetch from chain
      ];
      const tx = Transaction.createTransaction(
        publicKey,
        NETWORK,
        PROGRAM_ID,
        "register_bio",
        inputs,
        FEE
      );
      const txId = await requestTransaction(tx);
      setTxStatus(`Transaction submitted. ID: ${txId}`);
      setName("");
      setBio("");
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
    } finally {
      setLoading(null);
    }
  };

  const handleFetchBio = async () => {
    setError(null);
    setBioData(null);
    if (!publicKey || !requestRecords) {
      setError("Connect your Leo wallet first.");
      return;
    }
    setLoading("fetch");
    try {
      const records = await requestRecords(PROGRAM_ID);
      setBioData(Array.isArray(records) ? records : [records]);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
    } finally {
      setLoading(null);
    }
  };

  const handleViewBio = async () => {
    setError(null);
    setBioData(null);
    if (!publicKey || !requestRecords) {
      setError("Connect your Leo wallet first.");
      return;
    }
    setLoading("view");
    try {
      const records = await requestRecords(PROGRAM_ID);
      setBioData(Array.isArray(records) ? records : [records]);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-2">Bio</h1>
        <p className="text-black/80 mb-8">
          This is your decentralized profile stored on the Aleo blockchain.
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

        {/* Connected Address */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="text-black font-semibold mb-2">Connected Address:</p>
          {publicKey ? (
            <p className="text-black text-sm font-mono break-all">{publicKey}</p>
          ) : (
            <p className="text-black/60 text-sm">Not connected</p>
          )}
        </div>

        {/* Register or Update Bio */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Register or Update Your Bio
          </h2>
          <p className="text-black/80 text-sm mb-6">
            Enter your name and a short bio to store on-chain using the useSubmitTransaction hook from Scaffold Aleo.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-2">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>
            
            <div>
              <label className="block text-black font-medium mb-2">Your Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write a short bio about yourself"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>
            
            <button
              onClick={handleRegister}
              disabled={!!loading}
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium disabled:opacity-50"
            >
              {loading === "register" ? "Submitting…" : "Register Bio"}
            </button>
          </div>
        </div>

        {/* Fetch Bio Records */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Fetch your Bio records
          </h2>
          <p className="text-black/80 text-sm mb-6">
            Request your <code className="bg-black/5 px-1 rounded">onchainbio.aleo</code> records from the Leo wallet. Records are private and only your wallet can decrypt them.
          </p>
          
          <button
            onClick={handleFetchBio}
            disabled={!!loading}
            className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium disabled:opacity-50"
          >
            {loading === "fetch" ? "Fetching…" : "Fetch my records"}
          </button>
          
          {bioData && (
            <div className="mt-4 p-4 bg-black/5 rounded-lg">
              <pre className="text-sm text-black overflow-auto max-h-64">
                {JSON.stringify(bioData, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* View Bio (your records) */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">View your Bio</h2>
          <p className="text-black/80 text-sm mb-6">
            Bio data is stored in private records. Use this to load your own records again. (The program does not expose a public view for other addresses; that would require a mapping in the Leo program.)
          </p>
          
          <button
            onClick={handleViewBio}
            disabled={!!loading}
            className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium disabled:opacity-50"
          >
            {loading === "view" ? "Loading…" : "View my Bio records"}
          </button>
        </div>
      </div>
    </div>
  );
}
