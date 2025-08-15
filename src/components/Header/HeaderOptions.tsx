import { useState } from "react";

import Dropdown from "../Dropdown";
import HeaderItem from "./HeaderItem";
import MoreDropdownComponent from "./MoreDropdownComponent";

const HeaderOptions = () => {
  const [selected, setSelected] = useState("trade");
  const [bridgeDropdownVisible, setBridgeDropdownVisible] = useState(false);
  const [tradeDropdownVisible, setTradeDropdownVisible] = useState(false);
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);
  // const pathname = usePathname();

  return (
    <div className="relative hidden items-center justify-start gap-8 lg:flex">
      <HeaderItem
        href="https://app.mmt.finance/trade"
        label="Trade"
        isSelected={selected === "trade"}
        onMouseEnter={() => setTradeDropdownVisible(true)}
        onMouseLeave={() => setTradeDropdownVisible(false)}
      ></HeaderItem>

      <HeaderItem
        href="https://app.mmt.finance/liquidity"
        label="Liquidity"
        isSelected={selected === "liquidity"}
      ></HeaderItem>

      <HeaderItem
        href="https://app.mmt.finance/stake"
        label="xSUI"
        isSelected={selected === "stake"}
      ></HeaderItem>

      <HeaderItem
        href="https://app.mmt.finance/vault"
        label="Vaults"
        isSelected={selected === "vault"}
      ></HeaderItem>

      <HeaderItem
        href="https://app.mmt.finance/portfolio"
        label="My Position"
        isSelected={selected === "portfolio"}
      >
        {/* <div className="absolute left-[50%] top-[40px] z-[100] translate-x-[-50%]">
          <Dropdown
            isVisible={portfolioDropdownVisible}
            options={[
              {
                key: 'lp',
                title: 'lp positions',
                href: '/portfolio?state=lp'
              },
              {
                key: 'vault',
                title: 'vault positions',
                href: '/portfolio?state=vault'
              }
            ]}
          />
        </div> */}
      </HeaderItem>

      <HeaderItem
        href=""
        // target="_blank"
        label="Bridge"
        isSelected={selected === "bridge"}
        onMouseEnter={() => setBridgeDropdownVisible(true)}
        onMouseLeave={() => setBridgeDropdownVisible(false)}
      >
        <div className="absolute left-[50%] top-[40px] z-[100] translate-x-[-50%]">
          <Dropdown
            isVisible={bridgeDropdownVisible}
            options={[
              {
                key: "bridge-usdc",
                title: "Sui Bridge",
                href: "https://bridge.sui.io/bridge-usdc",
                openInNewTab: true,
              },
              {
                key: "wormhole-sui",
                title: "Wormhole",
                href: "https://wormhole.mmt.finance",
                openInNewTab: true,
              },
              {
                key: "squid-sui",
                title: "Squid",
                href: "https://squid.mmt.finance",
                openInNewTab: true,
              },
            ]}
          />
        </div>
      </HeaderItem>

      <HeaderItem
        href="https://app.mmt.finance/leaderboard"
        label="Leaderboard"
        isSelected={selected === "leaderboard"}
      ></HeaderItem>

      <MoreDropdownComponent
        moreDropdownVisible={moreDropdownVisible}
        setMoreDropdownVisible={setMoreDropdownVisible}
      />
    </div>
  );
};

export default HeaderOptions;
