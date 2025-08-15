export const getEllipsisTxt = (str: string, n = 5, m = 4): string => {
  try {
    if (str) {
      // need to do this otherwise substr will throw error
      str = str.toString();
      if (str.length <= n + m + 3) return str;
      return `${str.slice(0, n)}...${str.slice(-m)}`;
    }
    return "";
  } catch (err) {
    console.error(str, err);
    return str;
  }
};

export const getAccountExplorerUrl = (address: string) => {
  return `https://suivision.xyz/account/${address}`;
};

export async function safeClipboard(text: string): Promise<void> {
  // Check if we're in browser environment
  if (typeof window === "undefined" || typeof navigator === "undefined") return;

  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    try {
      await navigator.clipboard.writeText(text);
      // NotificationComponent({
      //   description: 'Copied to clipboard',
      //   title: 'Success',
      //   type: 'success',
      //   hiddenExplorerLink: true
      // });
    } catch {
      fallbackCopyTextToClipboard(text);
    }
  } else {
    fallbackCopyTextToClipboard(text);
  }
}

// only use it for compatibility
function fallbackCopyTextToClipboard(text: string) {
  // Check if we're in browser environment
  if (typeof document === "undefined") return;

  try {
    const input = document.createElement("input");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    const success = document.execCommand("copy");
    document.body.removeChild(input);
    // if (success) {
    //   NotificationComponent({
    //     description: 'Copied to clipboard',
    //     title: 'Success',
    //     type: 'success',
    //     hiddenExplorerLink: true
    //   });
    // }
  } catch {}
}
