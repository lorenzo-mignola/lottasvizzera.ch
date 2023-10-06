import useTranslation from "next-translate/useTranslation";
import { SectionHeader } from "./section-header";
import { SectionParagraph } from "./section-paragraph";

export function SectionLotta() {
  const { t } = useTranslation("home");
  return (
    <section className="bg-base-100 p-5 text-right lg:p-20" id="section">
      <SectionHeader>{t("section-lotta-header")}</SectionHeader>
      <SectionParagraph>{t("section-lotta-body-1")}</SectionParagraph>
      <SectionParagraph>{t("section-lotta-body-2")}</SectionParagraph>
    </section>
  );
}
