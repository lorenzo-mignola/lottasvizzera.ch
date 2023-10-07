import React from "react";

interface ButtonDropDownProps {
  active: boolean;
  handleClick: () => void;
  chip: string;
  text: string;
}

export function ButtonDropDown({
  active,
  handleClick,
  chip,
  text,
}: ButtonDropDownProps) {
  return (
    <li
      className={`${active ? "font-semibold" : ""} my-2`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleClick();
        }
      }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role -- need to be li for safari
      role="button"
    >
      <span>
        <span
          className={`badge badge-primary ${active ? "" : "badge-outline"}`}
        >
          {chip}
        </span>
        {text}
      </span>
    </li>
  );
}
