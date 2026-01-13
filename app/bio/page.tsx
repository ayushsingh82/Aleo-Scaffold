"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";

export default function BioPage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [bioData, setBioData] = useState<any>(null);

  const handleRegister = () => {
    // TODO: Implement Aleo transaction submission
    console.log("Register bio:", { name, bio });
  };

  const handleFetchBio = () => {
    // TODO: Implement Aleo resource fetching
    console.log("Fetch bio for address:", address);
  };

  const handleViewBio = () => {
    // TODO: Implement Aleo view function call
    console.log("View bio for address:", address);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFA977" }}>
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-black mb-2">Bio</h1>
        <p className="text-black/80 mb-8">
          This is your decentralized profile stored on the Aleo blockchain.
        </p>

        {/* Connected Address */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <p className="text-black font-semibold mb-2">Connected Address:</p>
          <p className="text-black/60 text-sm">Not connected</p>
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
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium"
            >
              Register Bio
            </button>
          </div>
        </div>

        {/* Fetch Bio Resource */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Fetch Bio Resource
          </h2>
          <p className="text-black/80 text-sm mb-6">
            Fetch bio data directly from the resource account on the Aleo blockchain using the Scaffold Aleo useGetAccountResource hook.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-2">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>
            
            <button
              onClick={handleFetchBio}
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium"
            >
              Fetch Bio
            </button>
            
            {bioData && (
              <div className="mt-4 p-4 bg-black/5 rounded-lg">
                <pre className="text-sm text-black overflow-auto">
                  {JSON.stringify(bioData, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* View Bio */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black mb-4">View Bio</h2>
          <p className="text-black/80 text-sm mb-6">
            Read bio data from the Aleo blockchain using a view function using the Scaffold Aleo useView hook.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-black font-medium mb-2">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
              />
            </div>
            
            <button
              onClick={handleViewBio}
              className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium"
            >
              View Bio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
