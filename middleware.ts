import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing, detectLocaleFromCountry, type Locale } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /slurp/i,
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /sogou/i,
  /facebot/i,
  /twitterbot/i,
  /linkedinbot/i,
  /whatsapp/i,
  /applebot/i,
];

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!hasLocalePrefix && pathname === "/") {
    const userAgent = request.headers.get("user-agent");
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value as Locale | undefined;

    if (cookieLocale && routing.locales.includes(cookieLocale)) {
      return NextResponse.redirect(new URL(`/${cookieLocale}`, request.url));
    }

    if (!isBot(userAgent)) {
      const country =
        request.headers.get("x-vercel-ip-country") ??
        request.headers.get("cf-ipcountry") ??
        null;

      const detected = detectLocaleFromCountry(country);
      return NextResponse.redirect(new URL(`/${detected}`, request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|studio|.*\\..*).*)"],
};
