"use client";

import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useEffect, useCallback, ReactNode } from "react";

interface SubscribeToEventsProps {
  onAccountChange?: () => void;
  children?: ReactNode;
}

export const SubscribeToEvents: FC<SubscribeToEventsProps> = ({
  onAccountChange,
  children,
}) => {
  const { wallet, publicKey } = useWallet();

  const handleAccountChange = useCallback(() => {
    if (onAccountChange) {
      onAccountChange();
    }
    // Handle account change, reconnect
  }, [onAccountChange]);

  useEffect(() => {
    if (wallet?.adapter) {
      (wallet.adapter as LeoWalletAdapter).on("accountChange", handleAccountChange);
      // Removes event listener during component teardown
      return () => {
        (wallet.adapter as LeoWalletAdapter).off("accountChange", handleAccountChange);
      };
    }
  }, [wallet, publicKey, handleAccountChange]);

  return <>{children}</>;
};
