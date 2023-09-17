'use client';

import { DrawerContextProvider } from '../util/hooks/DrawerContext';
import Drawer from './Drawer';

function Nav() {
  return (
    <nav className="navbar bg-base-200 sticky top-0 z-50">
      <DrawerContextProvider>
        <div className="drawer">
          <Drawer />
        </div>
      </DrawerContextProvider>
    </nav>
  );
}

export default Nav;
