import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import SectionImage from "@/public/images/section-lotta.jpg";
import { SectionHeader } from "./section-header";
import { SectionParagraph } from "./section-paragraph";

export function SectionLotta() {
  const { t } = useTranslation("home");
  return (
    <section
      className="flex flex-col-reverse bg-base-100 p-5 lg:flex-row lg:items-center lg:p-20 lg:px-40"
      id="section"
    >
      <Image alt="Lotta svizzera" className="lg:mr-4" src={SectionImage} />
      <div>
        <SectionHeader>{t("section-lotta-header")}</SectionHeader>
        <SectionParagraph>{t("section-lotta-body-1")}</SectionParagraph>
        <SectionParagraph>{t("section-lotta-body-2")}</SectionParagraph>
      </div>
    </section>
  );
}
