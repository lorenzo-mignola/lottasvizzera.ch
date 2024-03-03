"use client";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { COOKIE_CONSENT } from "@/util/constants";
import { NoCookie } from "@/src/components/cookie/no-cookie";

export function Map() {
  const { lang } = useTranslation("training");

  const cookieConsent = getCookieConsentValue(COOKIE_CONSENT);

  if (cookieConsent === "false") {
    return <NoCookie />;
  }

  return (
    <iframe
      height="100%"
      src={`https://maps.google.com/maps?&hl=${lang}&q=+(Centro%20Sportivo%20Nazionale%20della%20Giovent%C3%B9)&t=&z=16&ie=UTF8&iwloc=B&output=embed`}
      title="Centro Sportivo Nazionale della Gioventù"
      width="100%"
    />
  );
}
