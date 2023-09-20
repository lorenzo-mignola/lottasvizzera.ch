'use client';

import useLanguage from '@/util/hooks/useLangauge';

function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage('it');

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
