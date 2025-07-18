import type { RefObject } from "react";
import { createContext } from "react";

export const DrawerContext = createContext<{
  drawer: RefObject<HTMLInputElement | null>;
  closeDrawer: () => void;
}>({ drawer: { current: null }, closeDrawer: () => undefined });
