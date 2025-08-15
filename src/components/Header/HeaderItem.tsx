import type { ReactNode } from "react";
import React from "react";

interface HeaderItemProps {
  href: string;
  label: string;
  isSelected: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: ReactNode;
  target?: string;
  newTag?: boolean;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
  href,
  label,
  isSelected,
  onMouseEnter,
  onMouseLeave,
  children,
  target,
  newTag,
}) => {
  return (
    <div
      className="group relative z-10 flex items-center justify-center gap-2 text-sm"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={href}
        target={target}
        className="relative flex w-fit cursor-pointer items-center justify-center gap-2"
      >
        <p
          className={`text-text-sm font-medium transition-colors text-nowrap duration-300 ${
            isSelected
              ? "text-white"
              : "text-[rgba(255,255,255,0.76)] group-hover:text-white"
          }`}
          style={{
            fontFamily: "Inter Variable, sans-serif",
          }}
        >
          {label}
        </p>
        <span
          className={`absolute left-1/2 top-[22px] h-[2px] -translate-x-1/2 bg-gray-50 transition-all duration-300 ${
            isSelected ? "w-[calc(100%)]" : "w-0 group-hover:w-[calc(100%)]"
          }`}
        />
      </a>
      {children}
      {newTag && (
        <div className="flex rounded-full border border-green-200 bg-green-300 px-2 py-0.5">
          <p className="whitespace-nowrap text-text-micro text-green-100">
            New
          </p>
        </div>
      )}
    </div>
  );
};

export default HeaderItem;
