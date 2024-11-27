import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";
import Link from "next/link";
import Image from "next/image";
import SectionImage from "@/public/images/mat.jpeg";

function Mat() {
  const { t } = useTranslation("mat");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <article>
        <Trans
          components={{
            // eslint-disable-next-line jsx-a11y/heading-has-content -- not needed
            title: <h2 className="pt-2 text-lg font-bold" />,
            p: <p />,
            link: (
              <Link
                className="text-primary underline"
                href="mailto:info@lottasvizzera.ch"
              />
            ),
          }}
          i18nKey="mat:body"
        />
      </article>
      <Image alt="Tappetone" className="mt-2 w-full" src={SectionImage} />
    </>
  );
}

export default Mat;
