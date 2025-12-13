"use client";
import Link from "next/link";
import { Trans } from "react-i18next";
import { useT } from "../../i18n/client";

function TrainingContent() {
  useT("training");

  return (
    <article>
      <Trans
        components={{
          title: <h2 className="pt-2 text-lg font-bold" />,
          p: <p />,
          link: (
            <Link
              className="text-primary underline"
              href="mailto:info@lottasvizzera.ch"
            />
          ),
        }}
        i18nKey="training:body"
      />
    </article>
  );
}
export default TrainingContent;
