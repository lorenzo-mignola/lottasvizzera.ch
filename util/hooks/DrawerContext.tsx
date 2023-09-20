import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from 'react';

export const DrawerContext = createContext<{ drawerOpen: boolean; setDrawerOpen: Dispatch<SetStateAction<boolean>> }>({
  drawerOpen: false,
  setDrawerOpen: () => undefined,
});

export function DrawerContextProvider({ children }: PropsWithChildren) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const value = useMemo(() => ({ drawerOpen, setDrawerOpen }), [drawerOpen, setDrawerOpen]);
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}
