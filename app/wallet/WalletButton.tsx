"use client";

import React, { FC, useCallback, useEffect } from "react";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { useWalletModal } from "@demox-labs/aleo-wallet-adapter-reactui";
import { WalletReadyState, DecryptPermission, WalletAdapterNetwork } from "@demox-labs/aleo-wallet-adapter-base";

export const WalletButton: FC = () => {
  const { publicKey, disconnect, connecting, wallet, connected, connect } = useWallet();
  const { setVisible } = useWalletModal();

  // Log wallet state for debugging
  useEffect(() => {
    console.log("Wallet state:", {
      publicKey,
      connecting,
      connected,
      wallet: wallet?.adapter?.name,
      readyState: wallet?.adapter?.readyState,
    });
  }, [publicKey, connecting, connected, wallet]);

  const handleClick = useCallback(async () => {
    if (publicKey) {
      try {
        await disconnect();
        console.log("Wallet disconnected successfully.");
      } catch (error) {
        console.error("Error disconnecting wallet:", error);
      }
    } else {
      console.log("Attempting to connect wallet...");
      const readyState = wallet?.adapter?.readyState;
      if (readyState === WalletReadyState.Installed && wallet) {
        try {
          console.log("Wallet is installed and ready, attempting direct connection...");
          await connect(DecryptPermission.UponRequest, WalletAdapterNetwork.Testnet);
          console.log("Direct wallet connection attempted.");
        } catch (error) {
          console.error("Direct connection failed, opening modal:", error);
          setVisible(true); // Fallback to modal if direct connect fails
        }
      } else {
        console.log("Wallet not installed or ready, opening modal.");
        setVisible(true);
      }
    }
  }, [publicKey, disconnect, setVisible, wallet, connect]);

  return (
    <button
      onClick={handleClick}
      disabled={connecting}
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors font-medium font-serif disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {connecting
        ? "Connecting..."
        : publicKey
        ? `${publicKey.slice(0, 4)}...${publicKey.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
};
