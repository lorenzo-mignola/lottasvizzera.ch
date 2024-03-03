"use client";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import CookieConsentBanner from "react-cookie-consent";
import { COOKIE_CONSENT, MAX_AGE } from "@/util/constants";

export function CookieConsent() {
  const { t } = useTranslation("cookie");

  return (
    <CookieConsentBanner
      buttonStyle={{
        backgroundColor: "#f1f1f1",
        fontSize: "16px",
        borderRadius: "8px",
        margin: "8px",
      }}
      buttonText="Ok"
      contentStyle={{
        margin: "8px",
      }}
      cookieName={COOKIE_CONSENT}
      declineButtonStyle={{
        borderRadius: "8px",
        backgroundColor: "transparent",
        border: "1px solid oklch(var(--bc))",
        color: "oklch(var(--bc))",
      }}
      declineButtonText={t("decline")}
      enableDeclineButton
      expires={MAX_AGE}
      location="bottom"
      style={{
        background: "oklch(var(--b3))",
        opacity: 0.9,
        color: "oklch(var(--bc))",
        alignItems: "center",
        boxShadow:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      }}
    >
      <div className="flex flex-col">
        <span className="font-bold">{t("cookie-consent-header")}</span>
        <span>{t("cookie-consent-body")}</span>
      </div>
    </CookieConsentBanner>
  );
}
