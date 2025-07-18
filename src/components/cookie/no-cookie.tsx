import { setCookie } from "cookies-next";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import React from "react";
import { COOKIE_CONSENT, MAX_AGE } from "@/util/constants";

export function NoCookie() {
  const { t } = useTranslation("cookie");
  const router = useRouter();

  return (
    <div className="alert" role="alert">
      <svg
        className="size-6 shrink-0 stroke-info"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
      <span>{t("no-cookie")}</span>
      <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            setCookie(COOKIE_CONSENT, true, { maxAge: MAX_AGE });
            router.refresh();
          }}
          type="button"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
