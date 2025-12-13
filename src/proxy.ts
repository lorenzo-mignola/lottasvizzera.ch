import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import { NextResponse } from "next/server";
import {
  cookieName,
  fallbackLng,
  headerName,
  languages,
} from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // Avoid matching for static files, API routes, etc.
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function proxy(req: NextRequest) {
  // Ignore paths with "icon" or "chrome"
  if (
    req.nextUrl.pathname.includes("icon")
    || req.nextUrl.pathname.includes("chrome")
  ) {
    return NextResponse.next();
  }

  const lng = getLang(req);

  // Check if the language is already in the path
  const lngInPath = languages.find(loc =>
    req.nextUrl.pathname.startsWith(`/${loc}`),
  );
  const headers = new Headers(req.headers);
  headers.set(headerName, lngInPath || lng);

  // If a referer exists, try to detect the language from there and set the cookie accordingly
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") ?? "");
    const lngInReferer = languages.find(l =>
      refererUrl.pathname.startsWith(`/${l}`),
    );
    const response = NextResponse.next({ headers });
    if (lngInReferer)
      response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next({ headers });
}

function getLang(req: NextRequest) {
  if (req.cookies.has(cookieName)) {
    return (
      acceptLanguage.get(req.cookies.get(cookieName)?.value) ?? fallbackLng
    );
  }
  if (req.headers.get("Accept-Language")) {
    return (
      acceptLanguage.get(req.headers.get("Accept-Language")) ?? fallbackLng
    );
  }
  return fallbackLng;
}
