import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";
import { Suspense } from "react";
import { Map } from "./map";

export default function History() {
  const { t } = useTranslation("training");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <article>
        <Trans
          // eslint-disable-next-line react/jsx-key, jsx-a11y/heading-has-content -- not needed
          components={[<h2 className="pt-2 text-lg font-bold" />, <p />]}
          i18nKey="training:body"
        />
      </article>

      <div className="mt-5 h-[600px] w-full">
        <Suspense>
          <Map />
        </Suspense>
      </div>
    </>
  );
}
