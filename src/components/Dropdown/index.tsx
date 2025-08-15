import React from "react";

interface IPropType {
  options: {
    key: string;
    title: string;
    href?: string;
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    openInNewTab?: boolean;
  }[];
  isVisible: boolean;
  additionalClasses?: string;
}

const Dropdown = (props: IPropType) => {
  const { options, isVisible, additionalClasses } = props;

  return (
    <div
      className={`flex w-[140px] flex-col items-center border-[rgba(255,255,255,0.04)] justify-start gap-0.5 transition-all duration-300  z-[10000000] relative ${
        isVisible ? "max-h-[500px] border" : "max-h-0 p-0"
      } overflow-hidden rounded-md bg-[#17181D] ${additionalClasses || ""}`}
    >
      {options.map((option) =>
        option.href ? (
          <a
            href={option.href}
            key={option.key}
            target={option.openInNewTab ? "_blank" : "_self"}
            className="flex w-full cursor-pointer items-center justify-center rounded bg-[#17181D] bg-opacity-50 px-2 py-2.5 !text-gray-400 transition-all duration-300 hover:bg-opacity-100 hover:text-gray-25"
          >
            <p className="text-sm">{option.title}</p>
          </a>
        ) : (
          <div
            key={option.key}
            className="flex w-full cursor-pointer items-center justify-center rounded bg-[#17181D] bg-opacity-50 px-2 py-2.5 text-gray-400 transition-all duration-300 hover:bg-opacity-100 hover:text-gray-25"
            role="presentation"
            onClick={option.onClick}
          >
            <p className="text-sm">{option.title}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Dropdown;
