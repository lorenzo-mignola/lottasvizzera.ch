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
      sandbox="allow-scripts"
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.278550313115!2d8.925853093745673!3d46.071521218178695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47843300120f24ab%3A0x830ca13908c6709e!2sCMFG%20ARENA!5e1!3m2!1sit!2sch!4v1789403289748!5m2!1sit!2sch"
      title="Via Liemdi 7"
      width="100%"
    />
  );
}
