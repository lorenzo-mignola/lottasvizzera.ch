"use client";

import type { UseTranslationOptions } from "react-i18next";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "./i18next";
import { fallbackLng } from "./settings";

export function useT(ns: any, options?: UseTranslationOptions<undefined>) {
  const queryParams = useSearchParams();
  const lang = queryParams.get("lang") || fallbackLng;

  useEffect(() => {
    if (!lang || i18next.resolvedLanguage === lang) return;
    i18next.changeLanguage(lang);
  }, [lang]);

  return useTranslation(ns, options);
}
