import { useCurrentWallet } from "@mysten/dapp-kit";
import { User } from "lucide-react";

export default function WalletIcon() {
  const currentWallet = useCurrentWallet();

  return currentWallet.currentWallet?.icon ? (
    <img
      src={currentWallet.currentWallet.icon}
      alt="Wallet"
      width={24}
      height={24}
      className="rounded-full"
    />
  ) : (
    <User className="size-6 text-slate-500" />
  );
}
