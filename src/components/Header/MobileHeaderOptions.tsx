"use client";

import { useState } from "react";

import { ChevronUp, Menu } from "lucide-react";
import Dropdown from "../Dropdown";

const MobileHeaderOptions = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div
      className="relative flex items-center justify-between gap-0.5 rounded-md bg-state-hover p-1 lg:hidden"
      role="presentation"
      onClick={() => setDropdownVisible(!dropdownVisible)}
    >
      {!dropdownVisible ? (
        <Menu className="w-6 h-6 text-white" />
      ) : (
        <ChevronUp className="w-6 h-6 text-white" />
      )}
      <div className="absolute left-[50%] top-[40px] z-[100] translate-x-[-50%]">
        <Dropdown
          isVisible={dropdownVisible}
          options={[
            {
              key: "trade",
              title: "Trade",
              href: "/trade?state=swap",
            },
            {
              key: "liquidity",
              title: "Liquidity",
              href: "/liquidity",
            },
            {
              key: "stake",
              title: "xSUI",
              href: "/stake",
            },
            {
              key: "vault",
              title: "Vault",
              href: "/vault",
            },
            {
              key: "portfolio",
              title: "Portfolio",
              href: "/portfolio",
            },
            {
              key: "bridge",
              title: "Bridge",
              href: "https://bridge.sui.io/",
            },
            {
              key: "leaderboard",
              title: "Leaderboard",
              href: "/leaderboard",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MobileHeaderOptions;
