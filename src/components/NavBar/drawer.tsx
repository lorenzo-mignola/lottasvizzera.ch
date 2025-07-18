import { use } from "react";
import { DRAWER_ID } from "@/util/constants";
import { DrawerContext } from "@/util/hooks/DrawerContext";
import { DrawerLg } from "./drawer-lg";
import { DrawerMd } from "./drawer-md";

export function Drawer() {
  const { drawer } = use(DrawerContext);
  return (
    <>
      <input
        className="drawer-toggle"
        id={DRAWER_ID}
        ref={drawer}
        type="checkbox"
      />
      <DrawerMd />
      <DrawerLg />
    </>
  );
}
