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
