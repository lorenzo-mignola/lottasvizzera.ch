"use client";
import { getCookieConsentValue } from "react-cookie-consent";
import { COOKIE_CONSENT } from "@/util/constants";
import { NoCookie } from "@/src/components/cookie/no-cookie";

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
      className="min-h-[60vh]"
      src={src}
      title={`doc-${year}`}
      width="100%"
    />
  );
}
