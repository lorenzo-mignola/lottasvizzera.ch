import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import { ContactsCard } from "@components/Card/contacts-card";

function Contacts() {
  const { t } = useTranslation("contacts");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-2 pt-2">
        <ContactsCard
          action
          address="6597 Agarone, Via Cà di Sopra 10"
          email="dipietro.loris@gmail.com"
          name="Loris Di Pietro"
          phone="+41 78 896 16 02"
          title={t("president")}
        />
        <ContactsCard
          action
          address="6528 Camorino, Ai Basciòcch 5B"
          email="crotta@bluewin.ch"
          name="Ruth Crotta"
          phone="+41 79 696 91 79"
          title={t("secretary")}
        />
        <ContactsCard
          action
          address="6528 Camorino, Ai Basciòcch 5B"
          email="robcrotta@gmail.com"
          name="Robin Crotta"
          phone="+41 77 419 29 81"
          title={t("technical")}
        />
      </div>
      <div className="divider" />
      <h2 className="pb-1 text-lg font-bold">Comitato</h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-2">
        <ContactsCard name="Loris Di Pietro" title={t("president")} />
        <ContactsCard name="Aurelio Vizzardi" title={t("vicePresident")} />
        <ContactsCard name="Ruth Crotta" title={t("secretary")} />
        <ContactsCard name="Robin Crotta" title={t("technical")} />
        <ContactsCard name="Oscar Facchini" title={t("member")} />
      </div>
    </>
  );
}

export default Contacts;
