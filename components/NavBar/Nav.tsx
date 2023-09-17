'use client';

import { DrawerContextProvider } from '../util/hooks/DrawerContext';
import Drawer from './Drawer';

function Nav() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-base-200">
      <DrawerContextProvider>
        <div className="drawer">
          <Drawer />
        </div>
      </DrawerContextProvider>
    </nav>
  );
}

export default Nav;
