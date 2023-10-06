import useTranslation from "next-translate/useTranslation";
import { SectionHeader } from "./section-header";
import { SectionParagraph } from "./section-paragraph";

export function SectionATLS() {
  const { t } = useTranslation("home");
  return (
    <section
      className="bg-neutral p-5 text-neutral-content lg:p-20"
      id="section-atls"
    >
      <SectionHeader>{t("section-atls-header")}</SectionHeader>
      <SectionParagraph>{t("section-atls-body-1")}</SectionParagraph>
      <SectionParagraph>{t("section-atls-body-2")}</SectionParagraph>
    </section>
  );
}
