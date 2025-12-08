"use client";

import i18next from "./i18next";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation, UseTranslationOptions } from "react-i18next";
import { fallbackLng } from "./settings";

const runsOnServerSide = typeof window === "undefined";

export function useT(ns: any, options?: UseTranslationOptions<undefined>) {
  const queryParams = useSearchParams();
  const lang = queryParams.get("lang") || fallbackLng;

  if (runsOnServerSide && i18next.resolvedLanguage !== lang) {
    i18next.changeLanguage(lang);
  } else {
    const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage);
    useEffect(() => {
      if (activeLng === i18next.resolvedLanguage) return;
      setActiveLng(i18next.resolvedLanguage);
    }, [activeLng, i18next.resolvedLanguage]);
    useEffect(() => {
      if (!lang || i18next.resolvedLanguage === lang) return;
      i18next.changeLanguage(lang);
    }, [lang, i18next]);
  }
  return useTranslation(ns, options);
}
