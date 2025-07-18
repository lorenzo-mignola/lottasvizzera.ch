"use client";

import { Suspense } from "react";
import { DrawerContextProvider } from "@/util/hooks/DrawerContextProvider";
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
      <Suspense>
        <LanguageSwitcher />
      </Suspense>
    </nav>
  );
}
