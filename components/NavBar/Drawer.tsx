import { useContext } from 'react';

import { DRAWER_ID } from '../../util/constants';
import { DrawerContext } from '../../util/hooks/DrawerContext';
import DrawerLg from './DrawerLg';
import DrawerMd from './DrawerMd';

function Drawer() {
  const { drawer } = useContext(DrawerContext);
  return (
    <>
      <input ref={drawer} id={DRAWER_ID} type="checkbox" className="drawer-toggle" />
      <DrawerMd />
      <DrawerLg />
    </>
  );
}

export default Drawer;
