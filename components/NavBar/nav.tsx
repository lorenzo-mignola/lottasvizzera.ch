"use client";

import { DrawerContextProvider } from "../../util/hooks/DrawerContext";
import { LanguageSwitcher } from "../ui/language-switcher";
import { Drawer } from "./drawer";

export function Nav() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-base-200">
      <DrawerContextProvider>
        <div className="drawer">
          <Drawer />
        </div>
      </DrawerContextProvider>
      <LanguageSwitcher />
    </nav>
  );
}
