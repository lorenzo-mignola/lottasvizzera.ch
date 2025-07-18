"use client";
import { getCookieConsentValue } from "react-cookie-consent";
import { NoCookie } from "@/src/components/cookie/no-cookie";
import { COOKIE_CONSENT } from "@/util/constants";

interface DriveDocumentsProps {
  src: string;
  year: string;
}

export function DriveDocuments({ src, year }: DriveDocumentsProps) {
  const cookieConsent = getCookieConsentValue(COOKIE_CONSENT);

  if (cookieConsent === "false") {
    return <NoCookie />;
  }

  return (
    <iframe
      sandbox=""
      className="min-h-[60vh]"
      src={src}
      title={`doc-${year}`}
      width="100%"
    />
  );
}
