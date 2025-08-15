interface RecommendInstallWalletItemProps {
  icon: string;
  name: string;
  url: string;
}

export default function RecommendInstallWalletItem({
  icon,
  name,
  url,
}: RecommendInstallWalletItemProps) {
  return (
    <button
      type="button"
      className="flex w-full cursor-pointer items-center justify-between bg-transparent p-3 transition-all duration-300 hover:bg-gray-800"
      onClick={() => {
        if (typeof window === "undefined") return;
        window.open(url, "_blank");
      }}
    >
      <div className="flex items-center gap-3">
        <img
          src={icon}
          alt={name}
          width={24}
          height={24}
          className="rounded-full"
        />
        <p className="text-text-sm font-medium text-gray-300">{name}</p>
      </div>
      <p className="text-text-sm font-medium text-gray-400">Install</p>
    </button>
  );
}
