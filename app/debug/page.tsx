"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";

export default function DebugPage() {
  const [selectedTab, setSelectedTab] = useState<"bio" | "poem">("bio");
  const [onchainBioAddress, setOnchainBioAddress] = useState("0x5d2c589056728b30e3e644d5dff3b999433e3f1648aa622bbeb9027d7310d88d");
  const [onchainPoemsAddress, setOnchainPoemsAddress] = useState("0x5d2c589056728b30e3e644d5dff3b999433e3f1648aa622bbeb9027d7310d88d");
  
  const [bioViewAddress, setBioViewAddress] = useState("");
  const [bioRegisterName, setBioRegisterName] = useState("");
  const [bioRegisterBio, setBioRegisterBio] = useState("");
  
  const [poemViewAddress, setPoemViewAddress] = useState("");
  const [poemRegisterTitle, setPoemRegisterTitle] = useState("");
  const [poemRegisterContent, setPoemRegisterContent] = useState("");
  const [poemRegisterAuthor, setPoemRegisterAuthor] = useState("");

  const handleBioView = () => {
    console.log("View bio for:", bioViewAddress);
  };

  const handleBioRegister = () => {
    console.log("Register bio:", { name: bioRegisterName, bio: bioRegisterBio });
  };

  const handlePoemView = () => {
    console.log("View poem for:", poemViewAddress);
  };

  const handlePoemRegister = () => {
    console.log("Register poem:", { 
      title: poemRegisterTitle, 
      content: poemRegisterContent,
      author: poemRegisterAuthor 
    });
  };

  const shortAddress = (addr: string) => {
    if (addr.length <= 10) return addr;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-2">Debug</h1>
        <p className="text-black/80 mb-8">
          You can debug & interact with your deployed modules here.
          Check packages/nextjs/app/debug/page.tsx
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSelectedTab("bio")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedTab === "bio"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-white/80"
            }`}
          >
            Bio
          </button>
          <button
            onClick={() => setSelectedTab("poem")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedTab === "poem"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-white/80"
            }`}
          >
            Poem
          </button>
        </div>

        {/* Onchain Bio Module */}
        {selectedTab === "bio" && (
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">onchain_bio</h2>
            <p className="text-black/60 text-sm mt-1">Program: onchainbio.aleo</p>
          </div>

          {/* View Function */}
          <div className="mb-6 p-4 bg-black/5 rounded-lg">
            <h3 className="text-lg font-bold text-black mb-3">View</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-black font-medium mb-2">get_bio</label>
                <div className="space-y-2">
                  <div>
                    <label className="block text-black/70 text-sm mb-1">arg0:</label>
                    <input
                      type="text"
                      value={bioViewAddress}
                      onChange={(e) => setBioViewAddress(e.target.value)}
                      placeholder="address"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black"
                    />
                  </div>
                  <button
                    onClick={handleBioView}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-colors text-sm font-medium"
                  >
                    Run
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Register Function */}
          <div className="mb-6 p-4 bg-black/5 rounded-lg">
            <h3 className="text-lg font-bold text-black mb-3">register</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-black/70 text-sm mb-1">arg0:</label>
                <input
                  type="text"
                  value={bioRegisterName}
                  onChange={(e) => setBioRegisterName(e.target.value)}
                  placeholder="0x1::string::String"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black mb-2"
                />
              </div>
              <div>
                <label className="block text-black/70 text-sm mb-1">arg1:</label>
                <input
                  type="text"
                  value={bioRegisterBio}
                  onChange={(e) => setBioRegisterBio(e.target.value)}
                  placeholder="0x1::string::String"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black mb-2"
                />
              </div>
              <button
                onClick={handleBioRegister}
                className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-colors text-sm font-medium"
              >
                Run
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="p-4 bg-black/5 rounded-lg">
            <h3 className="text-lg font-bold text-black mb-3">Resources</h3>
            <div className="space-y-2 text-sm">
              <div className="text-black/70">0x1::account::Account</div>
              <div className="text-black/70">root:{`{...}`}</div>
              <div className="text-black/70">0x1::code::PackageRegistry</div>
              <div className="text-black/70">root:{`{...}`}</div>
            </div>
          </div>
        </div>
        )}

        {/* Onchain Poems Module */}
        {selectedTab === "poem" && (
        <div className="bg-white rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-black">onchain_poems</h2>
            <p className="text-black/60 text-sm mt-1">Program: onchainpoems.aleo</p>
          </div>

          {/* View Function */}
          <div className="mb-6 p-4 bg-black/5 rounded-lg">
            <h3 className="text-lg font-bold text-black mb-3">View</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-black font-medium mb-2">get_poem</label>
                <div className="space-y-2">
                  <div>
                    <label className="block text-black/70 text-sm mb-1">arg0:</label>
                    <input
                      type="text"
                      value={poemViewAddress}
                      onChange={(e) => setPoemViewAddress(e.target.value)}
                      placeholder="address"
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black"
                    />
                  </div>
                  <button
                    onClick={handlePoemView}
                    className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-colors text-sm font-medium"
                  >
                    Run
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Register Function */}
          <div className="mb-6 p-4 bg-black/5 rounded-lg">
            <h3 className="text-lg font-bold text-black mb-3">register</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-black/70 text-sm mb-1">arg0:</label>
                <input
                  type="text"
                  value={poemRegisterTitle}
                  onChange={(e) => setPoemRegisterTitle(e.target.value)}
                  placeholder="0x1::string::String"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black mb-2"
                />
              </div>
              <div>
                <label className="block text-black/70 text-sm mb-1">arg1:</label>
                <input
                  type="text"
                  value={poemRegisterContent}
                  onChange={(e) => setPoemRegisterContent(e.target.value)}
                  placeholder="0x1::string::String"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black mb-2"
                />
              </div>
              <div>
                <label className="block text-black/70 text-sm mb-1">arg2:</label>
                <input
                  type="text"
                  value={poemRegisterAuthor}
                  onChange={(e) => setPoemRegisterAuthor(e.target.value)}
                  placeholder="0x1::string::String"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-black mb-2"
                />
              </div>
              <button
                onClick={handlePoemRegister}
                className="px-4 py-2 bg-black text-white rounded hover:bg-black/80 transition-colors text-sm font-medium"
              >
                Run
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="p-4 bg-black/5 rounded-lg">
            <h3 className="text-lg font-bold text-black mb-3">Resources</h3>
            <div className="space-y-2 text-sm">
              <div className="text-black/70">0x1::account::Account</div>
              <div className="text-black/70">root:{`{...}`}</div>
              <div className="text-black/70">0x1::code::PackageRegistry</div>
              <div className="text-black/70">root:{`{...}`}</div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
