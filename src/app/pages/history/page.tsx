import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

export default function History() {
  const { t } = useTranslation("history");
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
