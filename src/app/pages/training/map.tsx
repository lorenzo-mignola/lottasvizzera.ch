"use client";
import React from "react";
import { getCookieConsentValue } from "react-cookie-consent";
import { NoCookie } from "@/src/components/cookie/no-cookie";
import { COOKIE_CONSENT } from "@/util/constants";

export function Map() {
  const cookieConsent = getCookieConsentValue(COOKIE_CONSENT);

  if (cookieConsent === "false") {
    return <NoCookie />;
  }

  return (
    <iframe
      sandbox=""
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.826781966347!2d8.921696200000001!3d46.154195300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4785caba31a384cf%3A0x8b828c78bc41a70c!2sVia%20Limedi%207%2C%206594%20Contone!5e0!3m2!1sit!2sch!4v1732728558189!5m2!1sit!2sch"
      title="Via Liemdi 7"
      width="100%"
    />
  );
}
