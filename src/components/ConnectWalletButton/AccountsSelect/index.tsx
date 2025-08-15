import {
  useAccounts,
  useCurrentAccount,
  useResolveSuiNSName,
  useSwitchAccount,
} from "@mysten/dapp-kit";
import type { WalletAccount } from "@wallet-standard/core";
import classNames from "classnames";
import { ChevronLeft } from "lucide-react";
import WalletIcon from "../WalletIcon";
import { getEllipsisTxt } from "../../../utils";

interface IPropType {
  onSelect: () => void;
  onBack: () => void;
}

const AccountItem = ({
  account,
  isSelected,
  onSelect,
}: {
  account: WalletAccount;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const { data: suiNS } = useResolveSuiNSName(account.address);

  return (
    <div
      key={account.address}
      onClick={onSelect}
      className={classNames(
        "flex flex-row items-center rounded-lg text-white text-base gap-x-2 py-2 px-3 hover:bg-[#292A2F] cursor-pointer transition-all duration-300",
        isSelected && "bg-[#292A2F] !cursor-not-allowed"
      )}
      title={account.address}
    >
      <WalletIcon />
      <p className="text-base">
        {suiNS || getEllipsisTxt(account.address, 7, 6)}
      </p>
    </div>
  );
};

export default function AccountsSelect({ onSelect, onBack }: IPropType) {
  const accounts = useAccounts();
  const currentAccount = useCurrentAccount();

  const { mutate: switchAccount } = useSwitchAccount();

  const handleSwitchAccount = (account: WalletAccount) => {
    if (account.address === currentAccount?.address) {
      return;
    }

    switchAccount(
      { account },
      {
        onSuccess: () => {
          onSelect();
        },
      }
    );
  };

  return (
    <div className="w-full flex flex-col bg-[#202126] text-white">
      <div
        className="flex flex-row flex-shrink-0 items-center gap-2 py-2 px-3 cursor-pointer"
        onClick={onBack}
      >
        <ChevronLeft className="size-6 flex-shrink-0 stroke-slate-500" />
        <p className="text-base whitespace-nowrap">Switch Wallet Address</p>
      </div>

      <div className="h-px w-full bg-white/10 my-1" />

      <div className="flex flex-col gap-y-1 max-h-56 mt-1 overflow-y-auto">
        {accounts.map((account) => (
          <AccountItem
            key={account.address}
            account={account}
            isSelected={account.address === currentAccount?.address}
            onSelect={() => handleSwitchAccount(account)}
          />
        ))}
      </div>
    </div>
  );
}
