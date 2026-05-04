import Script from "next/script";

const PLAUSIBLE_DOMAIN = "lexrights.com";
const PLAUSIBLE_SRC = "https://plausible.io/js/script.outbound-links.js";

export function Plausible() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src={PLAUSIBLE_SRC}
      strategy="afterInteractive"
    />
  );
}
