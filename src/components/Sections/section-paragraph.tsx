import type { PropsWithChildren } from "react";
import React from "react";

export function SectionParagraph({ children }: PropsWithChildren) {
  return <p className="py-2 text-lg">{children}</p>;
}
