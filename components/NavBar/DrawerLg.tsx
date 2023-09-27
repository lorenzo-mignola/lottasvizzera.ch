/* eslint-disable jsx-a11y/label-has-associated-control */

import { DRAWER_ID } from '../../util/constants';
import Pages from './Pages';

function DrawerLg() {
  return (
    <div className="drawer-side">
      <label htmlFor={DRAWER_ID} className="drawer-overlay" />
      <ul className="menu min-h-full w-80 bg-base-200 p-4">
        <Pages />
      </ul>
    </div>
  );
}

export default DrawerLg;
