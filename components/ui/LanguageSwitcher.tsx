/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import useLanguage from '@/util/hooks/useLangauge';

import Language from '../icons/Language';

function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage('it');

  const handleClick = (newLang: string) => {
    setLanguage(newLang);
    (document.activeElement as HTMLLabelElement)?.blur();
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        <span className="flex gap-1">
          <Language />
          {lang.toUpperCase()}
        </span>
      </label>
      <ul className="menu dropdown-content rounded-box right-0 z-[1] bg-base-100 shadow">
        <li>
          <button onClick={() => handleClick('de')} type="button" className={lang === 'de' ? 'font-bold' : ''}>
            DE
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('it')} type="button" className={lang === 'it' ? 'font-bold' : ''}>
            IT
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
