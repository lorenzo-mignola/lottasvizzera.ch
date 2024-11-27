import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";
import Link from "next/link";
import Image from "next/image";
import MatImage from "@/public/images/mat.jpeg";
import MatSchemaImage from "@/public/images/mat_schema.jpg";

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
      <div className="mt-2 flex w-full flex-col items-center gap-4 xl:flex-row">
        <div className="w-full">
          <Image alt="Tappetone" className="w-full" src={MatImage} />
        </div>
        <div className="w-full">
          <Image
            alt="Tappetone Schema"
            className="w-full"
            src={MatSchemaImage}
          />
        </div>
      </div>
    </>
  );
}

export default Mat;
