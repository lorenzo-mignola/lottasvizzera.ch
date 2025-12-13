"use client";

import { Trans } from "react-i18next";
import { useT } from "../../i18n/client";

function HistoryContent() {
  useT("history");

  return (
    <article>
      <Trans
        components={[
          <h2 className="pt-2 text-lg font-bold" key="h2" />,
          <p key="p" />,
        ]}
        i18nKey="history:body"
      />
    </article>
  );
}
export default HistoryContent;
