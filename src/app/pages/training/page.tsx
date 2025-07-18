import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { Suspense } from "react";
import { Map } from "./map";

export default function Training() {
  const { t } = useTranslation("training");
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
          i18nKey="training:body"
        />
      </article>

      <div className="mt-5 h-[600px] w-full xl:h-[900px]">
        <Suspense>
          <Map />
        </Suspense>
      </div>
    </>
  );
}
