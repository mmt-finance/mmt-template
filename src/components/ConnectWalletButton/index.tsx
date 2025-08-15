"use client";

import {
  useCurrentAccount,
  useCurrentWallet,
  useResolveSuiNSName,
} from "@mysten/dapp-kit";
import { useRef, useState } from "react";

import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { ChevronUp, WalletIcon } from "lucide-react";
import SecondaryButton from "../Buttons/SecondaryButton";
import WalletDetailsDropdown from "./WalletDetailsDropdown";
import ConnectWalletDropdown from "./ConnectWalletDropdown";
import { getEllipsisTxt } from "../../utils";

const ConnectWalletButton = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [walletDetailsVisible, setWalletDetailsVisible] = useState(false);

  const connectWalletRef = useRef(null);

  const [showWalletDropdown, setShowWalletDropdown] = useState(false);

  useOutsideAlerter(connectWalletRef, () => {
    setDropdownVisible(false);
    setShowWalletDropdown(false);
    setWalletDetailsVisible(false);
  });

  const account = useCurrentAccount();
  const currentWallet = useCurrentWallet();

  const { data: suiNS } = useResolveSuiNSName(account?.address ?? "");

  return (
    <div ref={connectWalletRef} className="relative">
      <SecondaryButton
        additionalClasses={`gap-4 min-w-[54px] min-h-[42px] ${
          account?.address ? "" : "!bg-[#2870FF] !border-none"
        }`}
        onClick={(e) => {
          if (!account) {
            setDropdownVisible(!dropdownVisible);
          } else {
            setWalletDetailsVisible(!walletDetailsVisible);
          }
        }}
      >
        {currentWallet.currentWallet?.icon ? (
          <img
            src={currentWallet.currentWallet.icon}
            alt="Wallet"
            height={20}
            width={20}
            className="rounded-full w-5 h-5"
          />
        ) : (
          <WalletIcon className="w-5 h-5 text-[rgba(255,255,255,0.76)]" />
        )}
        {!account ? (
          <p className="hidden text-text-md font-medium text-gray-50 md:block">
            Connect Wallet
          </p>
        ) : (
          <p className="hidden text-base text-gray-50 md:block">
            {suiNS || getEllipsisTxt(account.address)}
          </p>
        )}
        {account ? (
          <ChevronUp
            className={`${
              walletDetailsVisible ? "rotate-0" : "rotate-180"
            } hidden text-white transition-all duration-300 md:block w-5 h-5`}
          />
        ) : null}
      </SecondaryButton>
      {account ? (
        <WalletDetailsDropdown
          isVisible={walletDetailsVisible}
          setIsVisible={setWalletDetailsVisible}
          suiNs={suiNS}
        />
      ) : (
        <ConnectWalletDropdown
          isVisible={dropdownVisible || showWalletDropdown}
          setIsVisible={(show: boolean) => {
            setDropdownVisible(show);
            setShowWalletDropdown(show);
          }}
        />
      )}
    </div>
  );
};

export default ConnectWalletButton;
