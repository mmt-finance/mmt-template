import {
  useCurrentAccount,
  useDisconnectWallet,
  useAccounts,
} from "@mysten/dapp-kit";
import { useState } from "react";

import { getAccountExplorerUrl, getEllipsisTxt } from "../../../utils";

import { LogOut, UserCircle, Clock } from "lucide-react";
import WalletDetailsDropdownItem from "./DropdownItem";
import CopyIcon from "../../CopyIcon";
import WalletIcon from "../WalletIcon";
import AccountsSelect from "../AccountsSelect";

interface IPropType {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  suiNs?: string | null;
}

const WalletDetailsDropdown = (props: IPropType) => {
  const { isVisible, setIsVisible, suiNs } = props;

  const { mutate: disconnect } = useDisconnectWallet();
  const account = useCurrentAccount();
  const accounts = useAccounts();
  const [showAccountList, setShowAccountList] = useState(false);

  const handlePortfolioClick = () => {
    window.location.href = "https://app.mmt.finance/portfolio";
    setIsVisible(false);
  };

  const handleRecentTxClick = () => {
    if (typeof window === "undefined") return;

    window.open(
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      `${getAccountExplorerUrl(account?.address!)}?tab=Transaction+Blocks`,
      "_blank"
    );
  };

  const handleDisconnect = () => {
    disconnect();
    setIsVisible(false);
  };

  return (
    <div
      className={`absolute right-0 top-14 flex w-[280px] flex-col items-center justify-start transition-all duration-300 ${
        isVisible ? "max-h-[500px] p-3" : "max-h-0"
      } z-[100] overflow-hidden rounded-md bg-[#202126]`}
    >
      {showAccountList ? (
        <AccountsSelect
          onSelect={() => setShowAccountList(false)}
          onBack={() => setShowAccountList(false)}
        />
      ) : (
        <>
          <div className="flex w-full items-center justify-start gap-x-2 px-3 py-2">
            <WalletIcon />
            <div className="flex flex-row items-center justify-between w-full">
              <div
                className="flex cursor-pointer items-center justify-start gap-1"
                role="presentation"
              >
                <a
                  className="!text-white text-base hover:underline"
                  href={`https://suiscan.xyz/address/${account?.address}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {suiNs || getEllipsisTxt(account?.address || "")}
                </a>

                <CopyIcon text={account?.address || ""} />
              </div>

              {/* {suiNs ? (
                <p className="text-white text-base">
                  {getEllipsisTxt(account?.address!)}
                </p>
              ) : null} */}

              {accounts.length > 1 && (
                <div
                  className="text-white text-xs cursor-pointer relative rounded-md bg-[#292A2F] px-2 py-1"
                  onClick={() => setShowAccountList((v) => !v)}
                >
                  Switch
                </div>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-white/10 my-1" />

          <div className="flex flex-col gap-y-1 w-full">
            <WalletDetailsDropdownItem
              IconComponent={UserCircle}
              label="My Position"
              onClick={handlePortfolioClick}
            />
            <WalletDetailsDropdownItem
              IconComponent={Clock}
              label="Recent Transactions"
              onClick={handleRecentTxClick}
            />
          </div>

          <div className="h-px w-full bg-white/10 my-1" />

          <WalletDetailsDropdownItem
            IconComponent={LogOut}
            label="Log Out"
            onClick={handleDisconnect}
          />
        </>
      )}
    </div>
  );
};

export default WalletDetailsDropdown;
