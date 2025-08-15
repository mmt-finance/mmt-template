"use client";

import { useConnectWallet } from "@mysten/dapp-kit";
import { useEffect, useState } from "react";

import { MSafeWallet } from "@msafe/sui-wallet";
import { getFullnodeUrl } from "@mysten/sui/client";
import ConnectWalletButton from "../ConnectWalletButton";
import HeaderOptions from "./HeaderOptions";
import MobileHeaderOptions from "./MobileHeaderOptions";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { mutate: connect } = useConnectWallet();

  const connectWallet = () => {
    if (typeof window === "undefined") return;
    connect({
      wallet: new MSafeWallet(
        "mmt-dex",
        getFullnodeUrl("mainnet"),
        "sui:mainnet"
      ),
      silent: true,
    });
  };

  useEffect(() => {
    connectWallet();
    if (typeof window === "undefined") return;

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="z-[1000] flex w-full items-center justify-start gap-1 md:gap-1 flex-col">
      <div className="flex w-full items-center justify-between p-4 gap-3 md:gap-8">
        <a href="/" className="flex items-center justify-start gap-1">
          <img
            src={
              isMobile ? "./mmt-logo-sq-transparent.svg" : "./momentum-logo.svg"
            }
            alt="Momentum Logo"
            width={182}
            height={24}
            className="z-10 w-[30px] md:w-[182px] md:h-[24px] cursor-pointer"
          />
        </a>
        <HeaderOptions />
        <div className="ml-auto flex items-center justify-end gap-x-2">
          <MobileHeaderOptions />

          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
