import { UseTranslationOptions } from "react-i18next";
import i18next from "./i18next";
import { fallbackLng, cookieName } from "./settings";
import { cookies, headers } from "next/headers";

export async function getT(
  ns: any,
  options?: UseTranslationOptions<undefined>,
) {
  const cookie = await cookies();
  const lng = cookie.get(cookieName)?.value;

  if (lng && i18next.resolvedLanguage !== lng) {
    await i18next.changeLanguage(lng);
  }

  if (ns && !i18next.hasLoadedNamespace(ns)) {
    await i18next.loadNamespaces(ns);
  }

  const language = lng ?? i18next.resolvedLanguage ?? fallbackLng;
  const namespace = Array.isArray(ns) ? ns[0] : ns;
  return {
    t: i18next.getFixedT(language, namespace, options?.keyPrefix),
    i18n: i18next,
  };
}
