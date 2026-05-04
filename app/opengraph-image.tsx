import { ImageResponse } from "next/og";

export const alt = "LexRights — Your digital rights. Enforced.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(4,58,253,0.25), transparent 60%), radial-gradient(ellipse 60% 60% at 100% 100%, rgba(46,91,255,0.18), transparent 60%), #050a1f",
          fontFamily: "Inter, system-ui",
          color: "#f5f7ff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#4a7bff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          <span>LexRights</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ color: "#8b95b8" }}>European Boutique for Digital Rights</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 1000,
            }}
          >
            Your digital rights.{" "}
            <span style={{ color: "#4a7bff" }}>Enforced.</span>
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#8b95b8",
              margin: 0,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Platform suspensions · DSA · GDPR · Digital consumer rights — across the EU.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#5b6594",
            fontSize: 22,
          }}
        >
          <span style={{ fontWeight: 500, color: "#8b95b8" }}>lexrights.com</span>
          <span>Berlin · EU-wide · DE & EN</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
