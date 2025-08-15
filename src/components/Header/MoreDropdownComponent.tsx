import React from "react";
import Dropdown from "../Dropdown";

interface MoreDropdownComponentProps {
  moreDropdownVisible: boolean;
  setMoreDropdownVisible: (visible: boolean) => void;
}

const MoreDropdownComponent: React.FC<MoreDropdownComponentProps> = ({
  moreDropdownVisible,
  setMoreDropdownVisible,
}) => {
  return (
    <div
      className="group relative z-10 flex w-fit cursor-pointer items-center justify-center"
      onMouseEnter={() => setMoreDropdownVisible(true)}
      onMouseLeave={() => setMoreDropdownVisible(false)}
    >
      <div className="flex items-center justify-center gap-1">
        <img
          src="/more-icon.svg"
          alt="more"
          width={20}
          height={20}
          className="group-hover:brightness-0 group-hover:invert"
          role="presentation"
        />
      </div>
      <div className="absolute left-0 top-[16px] w-6 cursor-pointer">
        <div
          className={`mt-4 ${
            moreDropdownVisible
              ? "border-x border-[rgba(255,255,255,0.04)]"
              : "max-h-0 p-0"
          } z-[1000] flex flex-col overflow-hidden rounded-t-md bg-[#17181D]`}
        >
          <div className="absolute left-1/2 z-[100] -translate-x-1/2">
            <Dropdown
              isVisible={moreDropdownVisible}
              options={[
                {
                  key: "twitter",
                  title: "Twitter",
                  href: "https://x.com/MMTFinance",
                  openInNewTab: true,
                },
                {
                  key: "discord",
                  title: "Discord",
                  href: "https://discord.gg/mmtfinance ",
                  openInNewTab: true,
                },
                {
                  key: "docs",
                  title: "Docs",
                  href: "https://docs.mmt.finance/",
                  openInNewTab: true,
                },
                {
                  key: "tos",
                  title: "Terms of Service",
                  href: "https://docs.mmt.finance/terms-of-service/terms-of-service",
                  openInNewTab: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDropdownComponent;
