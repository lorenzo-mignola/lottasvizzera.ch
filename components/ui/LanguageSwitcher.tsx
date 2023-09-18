'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const setLanguage = useCallback(
    (lang: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('lang', lang);

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router],
  );

  const lang = searchParams.get('lang') || 'it';

  return (
    <>
      Selected : {lang}
      <button onClick={() => setLanguage('de')} type="button">
        DE
      </button>
      /
      <button onClick={() => setLanguage('it')} type="button">
        IT
      </button>
    </>
  );
}

export default LanguageSwitcher;
