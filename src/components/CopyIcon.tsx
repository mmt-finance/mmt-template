import { Check, Copy } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { safeClipboard } from "../utils";

interface CopyIconProps {
  text: string;
}

export default function CopyIcon(props: CopyIconProps) {
  const { text } = props;
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1_000);
    }
  }, [isCopied]);

  const handleCopy = () => {
    safeClipboard(text);
    setIsCopied(true);
  };

  return isCopied ? (
    <Check className="size-4 ml-2 text-[rgba(255,255,255,0.76)]" />
  ) : (
    <Copy
      className="size-4 ml-2 text-[rgba(255,255,255,0.76)] cursor-pointer"
      onClick={handleCopy}
    />
  );
}
