import type { PropsWithChildren } from "react";
import React from "react";

export function SectionHeader({ children }: PropsWithChildren) {
  return (
    <h2 className="mb-7 text-2xl font-semibold lg:text-3xl">{children}</h2>
  );
}
