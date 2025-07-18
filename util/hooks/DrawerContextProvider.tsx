import type { PropsWithChildren } from "react";
import { useMemo, useRef } from "react";
import { DrawerContext } from "./DrawerContext";

export function DrawerContextProvider({ children }: PropsWithChildren) {
  const drawer = useRef<HTMLInputElement | null>(null);

  const closeDrawer = () => {
    if (drawer.current?.checked) {
      drawer.current.click();
    }
  };

  const value = useMemo(() => ({ drawer, closeDrawer }), []);

  return <DrawerContext value={value}>{children}</DrawerContext>;
}
