"use client";
import { TextHeader } from "@components/ui/text-header";
import Image from "next/image";
import Link from "next/link";
import MatImage from "@/public/images/mat.jpeg";
import MatSchemaImage from "@/public/images/mat_schema.jpg";
import { useT } from "../../i18n/client";
import { Trans } from "react-i18next";

function Mat() {
  const { t } = useT("mat");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
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
