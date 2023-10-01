/* eslint-disable jsx-a11y/no-noninteractive-tabindex -- tab is not used*/

"use client";

import { Language } from "../icons/language";
import useLanguage from "@/util/hooks/useLangauge";

export function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage("it");

  const handleClick = (newLang: string) => {
    setLanguage(newLang);
    (document.activeElement as HTMLLabelElement).blur();
  };

  return (
    <div className="dropdown">
      <label className="btn m-1 border-transparent bg-transparent" tabIndex={0}>
        <span className="flex gap-1">
          <Language />
          {lang.toUpperCase()}
        </span>
      </label>
      <ul className="menu dropdown-content rounded-box right-0 z-[1] bg-base-100 shadow">
        <li>
          <button
            className={lang === "de" ? "font-bold" : ""}
            onClick={() => {
              handleClick("de");
            }}
            type="button"
          >
            DE
          </button>
        </li>
        <li>
          <button
            className={lang === "it" ? "font-bold" : ""}
            onClick={() => {
              handleClick("it");
            }}
            type="button"
          >
            IT
          </button>
        </li>
      </ul>
    </div>
  );
}
