import { getCookie, hasCookie, setCookie } from "cookies-next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { COOKIE_KEY } from "../constants";

const MAX_AGE = 100 * 24 * 60 * 60 * 1000;

export const useLanguage = (defaultLocale: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const lang = searchParams.get("lang") || defaultLocale;

  const setLanguage = useCallback(
    (newLang: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("lang", newLang);
      router.replace(`${pathname}?${params.toString()}`);
      setCookie(COOKIE_KEY, newLang || defaultLocale, { maxAge: MAX_AGE });
    },
    [searchParams, router, pathname, defaultLocale],
  );

  // set user lang in cookie on open
  useEffect(() => {
    if (hasCookie(COOKIE_KEY)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- checked before
      setLanguage(getCookie(COOKIE_KEY)!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on first render
  }, []);

  return {
    setLanguage,
    lang,
  };
};
