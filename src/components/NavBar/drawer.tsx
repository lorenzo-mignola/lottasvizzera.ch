import { useContext } from "react";
import { DrawerLg } from "./drawer-lg";
import { DrawerMd } from "./drawer-md";
import { DRAWER_ID } from "@/util/constants";
import { DrawerContext } from "@/util/hooks/DrawerContext";

export function Drawer() {
  const { drawer } = useContext(DrawerContext);
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
