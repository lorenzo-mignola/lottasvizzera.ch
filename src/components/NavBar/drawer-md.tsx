import { Suspense } from "react";
import { MenuIcon } from "./menu-icon";
import { Pages } from "./pages";
import { Logo } from "./logo";
import { DRAWER_ID } from "@/util/constants";

export function DrawerMd() {
  return (
    <div className="drawer-content flex flex-col">
      <div className="navbar w-full">
        <MenuIcon id={DRAWER_ID} />
        <Suspense>
          <Logo />
        </Suspense>
        <div className="hidden flex-none lg:flex">
          <ul className="menu menu-horizontal">
            <Pages />
          </ul>
        </div>
      </div>
    </div>
  );
}
