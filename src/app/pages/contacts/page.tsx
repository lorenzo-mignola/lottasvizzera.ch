import useTranslation from "next-translate/useTranslation";
import { TextHeader } from "@components/ui/text-header";
import { ContactsCard } from "@components/Card/contacts-card";

function Contacts() {
  const { t } = useTranslation("contacts");
  return (
    <>
      <TextHeader>{t("title")}</TextHeader>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-2">
        <ContactsCard
          action
          address="6597 Agarone, Via Cà di Sopra 10"
          email="dipietro.loris@gmail.com"
          name="Loris Di Pietro"
          phone="+41 78 896 16 02"
          size="large"
          title="Presidente"
        />
        <ContactsCard
          action
          address="6528 Camorino, Ai Basciòcch 5B"
          email="crotta@bluewin.ch"
          name="Ruth Crotta"
          phone="+41 91 857 80 68"
          size="large"
          title="Segretaria"
        />
        <ContactsCard
          action
          address="6528 Camorino, Ai Basciòcch 5B"
          email="robcrotta@gmail.com"
          name="Robin Crotta"
          phone="+41 77 419 29 81"
          size="large"
          title="Responsabile tecnico"
        />
      </div>
      <div className="divider" />
      <h2>Comitato</h2>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-2">
        <ContactsCard name="Loris Di Pietro" title="Presidente" />
        <ContactsCard name="Aurelio Vizzardi" title="Vice presidente" />
        <ContactsCard name="Ruth Crotta" title="Segretaria" />
        <ContactsCard name="Robin Crotta" title="Responsabile tecnico" />
        <ContactsCard name="Oscar Facchini" title="Revisore" />
      </div>
    </>
  );
}

export default Contacts;
