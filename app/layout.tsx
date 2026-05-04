import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lexrights.com",
  ),
  title: {
    default: "LexRights — Your digital rights. Enforced.",
    template: "%s | LexRights",
  },
  description:
    "Europe's specialized boutique law firm for digital rights. Platform suspensions, DSA complaints, GDPR damages, consumer protection for digital content.",
  applicationName: "LexRights",
  authors: [{ name: "LexRights Rechtsanwälte PartG mbB" }],
  creator: "LexRights",
  publisher: "LexRights Rechtsanwälte PartG mbB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "LexRights",
    locale: "en_US",
    alternateLocale: ["de_DE"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lexrights",
    creator: "@lexrights",
  },
};

export const viewport: Viewport = {
  themeColor: "#050a1f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
