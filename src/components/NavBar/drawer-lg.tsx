/* eslint-disable jsx-a11y/label-has-associated-control -- label is used for drawer open */

import { Pages } from "./pages";
import { DRAWER_ID } from "@/util/constants";

export function DrawerLg() {
  return (
    <div className="drawer-side">
      <label className="drawer-overlay" htmlFor={DRAWER_ID} />
      <ul className="menu min-h-full w-80 bg-base-200 p-4">
        <Pages />
      </ul>
    </div>
  );
}
