import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";

export default function History() {
  const { t } = useTranslation("history");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <article>
        <Trans
          // eslint-disable-next-line react/jsx-key, jsx-a11y/heading-has-content -- not needed
          components={[<h2 className="pt-2 text-lg font-bold" />, <p />]}
          i18nKey="history:body"
        />
      </article>
    </>
  );
}
