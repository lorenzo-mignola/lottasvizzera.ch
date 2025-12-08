import { Suspense } from "react";
import { DRAWER_ID } from "@/util/constants";
import { Logo } from "./logo";
import { MenuIcon } from "./menu-icon";
import { Pages } from "./pages";

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
