import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import SectionImage from "@/public/images/section-atls.jpg";
import { SectionHeader } from "./section-header";
import { SectionParagraph } from "./section-paragraph";

export function SectionATLS() {
  const { t } = useTranslation("home");
  return (
    <section
      className="bg-neutral p-5 text-neutral-content lg:flex lg:items-center lg:p-20 lg:px-40"
      id="section-atls"
    >
      <div>
        <SectionHeader>{t("section-atls-header")}</SectionHeader>
        <SectionParagraph>{t("section-atls-body-1")}</SectionParagraph>
        <SectionParagraph>{t("section-atls-body-2")}</SectionParagraph>
      </div>
      <Image alt="Lotta svizzera" className="lg:ml-4" src={SectionImage} />
    </section>
  );
}
