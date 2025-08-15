import classNames from "classnames";

interface WalletDetailsDropdownItemProps {
  IconComponent: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  className?: string;
}

const WalletDetailsDropdownItem: React.FC<WalletDetailsDropdownItemProps> = ({
  IconComponent,
  label,
  onClick,
  className,
}) => {
  return (
    <div
      className={classNames(
        "flex w-full px-3 py-2 cursor-pointer items-center justify-start gap-2 bg-transparent transition-all duration-300 hover:bg-zinc-800 rounded-lg text-gray-400",
        className
      )}
      role="presentation"
      onClick={onClick}
    >
      <IconComponent className="size-6 stroke-slate-500" />
      <p className="text-white text-base">{label}</p>
    </div>
  );
};

export default WalletDetailsDropdownItem;
