"use client";

import { Language } from "@components/icons/language";
import { useRef } from "react";
import { ButtonDropDown } from "./button-dropdown";
import type { Languages } from "@/types/languages";
import { useLanguage } from "@/util/hooks/useLangauge";

export function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage("it");
  const dropDownRef = useRef<HTMLElement>(null);

  const handleClick = (newLang: Languages) => {
    setLanguage(newLang);
    if (dropDownRef.current) {
      dropDownRef.current.click();
    }
  };

  return (
    <details className="dropdown">
      <summary
        className="btn m-1 border-transparent bg-transparent shadow-none"
        ref={dropDownRef}
      >
        <span className="flex gap-1">
          <Language />
          {lang.toUpperCase()}
        </span>
      </summary>
      <ul className="menu dropdown-content right-0 z-[51] rounded-box bg-base-100 shadow">
        <ButtonDropDown
          active={lang === "it"}
          chip="IT"
          handleClick={() => {
            handleClick("it");
          }}
          text="Italiano"
        />
        <ButtonDropDown
          active={lang === "de"}
          chip="DE"
          handleClick={() => {
            handleClick("de");
          }}
          text="Deutsch"
        />
      </ul>
    </details>
  );
}
