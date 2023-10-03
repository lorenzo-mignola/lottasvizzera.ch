import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import Trans from "next-translate/Trans";

export default function History() {
  const { t, lang } = useTranslation("training");
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
        <iframe
          height="100%"
          src={`https://maps.google.com/maps?&hl=${lang}&q=+(Centro%20Sportivo%20Nazionale%20della%20Giovent%C3%B9)&t=&z=16&ie=UTF8&iwloc=B&output=embed`}
          title="Centro Sportivo Nazionale della Gioventù"
          width="100%"
        />
      </div>
    </>
  );
}
