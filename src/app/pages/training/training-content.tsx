"use client";
import { Trans } from "react-i18next";
import { useT } from "../../i18n/client";

function TrainingContent() {
  useT("training");

  return (
    <article className="mb-2">
      <Trans
        components={{
          title: <h2 className="pt-2 text-lg font-bold" />,
          p: <p />,
          mail: (
            <a
              className="text-primary underline"
              href="mailto:info@lottasvizzera.ch"
            />
          ),
          phone: (
            <a
              className="text-primary underline"
              href="tel:+41774192981"
            />
          ),
        }}
        i18nKey="training:body"
      />
    </article>
  );
}
export default TrainingContent;
