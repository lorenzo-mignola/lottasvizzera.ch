"use client";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import CookieConsentBanner from "react-cookie-consent";
import { COOKIE_CONSENT, MAX_AGE } from "@/util/constants";

export function CookieConsent() {
  const { t } = useTranslation("cookie");

  return (
    <CookieConsentBanner
      buttonClasses="!btn !btn-primary !btn-sm !m-1"
      buttonText="OK"
      containerClasses="!md:m-2 !md:p-3 !left-auto !right-0 !m-1 !w-auto !items-center  !rounded-md !bg-base-100 p-2 !text-base-content !opacity-90 !shadow-md"
      cookieName={COOKIE_CONSENT}
      declineButtonClasses="!btn !btn-sm !m-1"
      declineButtonText={t("decline")}
      enableDeclineButton
      expires={MAX_AGE}
      location="bottom"
      overlayClasses="!bg-pink-500"
    >
      <div className="flex flex-col">
        <span className="font-bold">{t("cookie-consent-header")}</span>
        <span>{t("cookie-consent-body")}</span>
      </div>
    </CookieConsentBanner>
  );
}
