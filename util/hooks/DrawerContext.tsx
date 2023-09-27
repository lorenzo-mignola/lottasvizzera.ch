import { createContext, MutableRefObject, PropsWithChildren, useMemo, useRef } from 'react';

export const DrawerContext = createContext<{
  drawer: MutableRefObject<HTMLInputElement | null>;
  closeDrawer: () => void;
}>({
  drawer: { current: null },
  closeDrawer: () => undefined,
});

export function DrawerContextProvider({ children }: PropsWithChildren) {
  const drawer = useRef<HTMLInputElement | null>(null);

  const closeDrawer = () => {
    if (drawer.current?.checked) {
      drawer.current?.click();
    }
  };

  const value = useMemo(() => ({ drawer, closeDrawer }), []);

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}
