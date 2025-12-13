"use client";
import { TextHeader } from "@components/ui/text-header";
import Link from "next/link";
import { Suspense } from "react";
import { Trans } from "react-i18next";
import { useT } from "../../i18n/client";
import { Map } from "./map";

export default function Training() {
  const { t } = useT("training");
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
