import React from "react";

interface IPropType {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  // active?: boolean;
  size?: "sm" | "md" | "base" | "xl" | "2xl";
  isLoading?: boolean;
  additionalClasses?: string;
}

const sizeToPaddingMap = {
  sm: "py-1.5 px-3 text-xs rounded gap-1",
  md: "py-2 px-[14px] text-xs rounded-md gap-1.5",
  base: "py-2 px-4 text-sm rounded-lg gap-1.5",
  xl: "py-3 px-[18px] text-sm rounded-lg gap-2",
  "2xl": "py-4 px-[22px] text-base rounded-xl gap-2.5",
};

const SecondaryButton = (props: IPropType) => {
  const { children, onClick, disabled, size, isLoading, additionalClasses } =
    props;

  return (
    <button
      className={`secondary-button flex items-center justify-center transition-all duration-300
          ${sizeToPaddingMap[size || "base"]}
          ${
            disabled
              ? " hover:bg-state-hover"
              : isLoading
              ? " hover:bg-[rgba(255,255,255,0.1)]"
              : "cursor-pointer bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.04)]"
          }
          ${additionalClasses}
          
      `}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {isLoading ? (
        <div className="scale-[1.75] text-gray-25">...</div>
      ) : (
        children
      )}
    </button>
  );
};

export default SecondaryButton;
