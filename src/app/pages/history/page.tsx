"use client";
import { TextHeader } from "@components/ui/text-header";
import { Trans } from "react-i18next";
import { useT } from "../../i18n/client";

export default function History() {
  const { t } = useT("history");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <article>
        <Trans
          components={[
            <h2 className="pt-2 text-lg font-bold" key="h2" />,
            <p key="p" />,
          ]}
          i18nKey="history:body"
        />
      </article>
    </>
  );
}
