import { getCookie, hasCookie, setCookie } from "cookies-next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { COOKIE_KEY, MAX_AGE } from "@/util/constants";

export function useLanguage(defaultLocale: string) {
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
      // @ts-expect-error -- wrong type
      setLanguage(getCookie(COOKIE_KEY)!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only on first render
  }, []);

  return {
    setLanguage,
    lang,
  };
}
