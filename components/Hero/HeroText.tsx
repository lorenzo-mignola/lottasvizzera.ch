import Link from 'next/link';

function HeroText() {
  return (
    <div>
      <h1 className="text-2xl font-bold lg:text-6xl">
        Benvenuti sul sito ufficiale dell&apos;associazine ticinese di lotta Svizzera
      </h1>
      <p className="py-6 lg:text-lg">
        L&apos;associazione ticinese di lotta svizzera (ATLS) è membro dell&apos;Associazione di lotta svizzera della
        Svizzera centrale (ISV) e dell&apos;Associazione federeale di lotta svizzera (ESV). L&apos;ATLS ha quale scopo
        la cura, la promozione e la diffusione della lotta svizzera e in questo modo contribuisce alla conservazione
        degli usi e costumi popolari.
      </p>
      <Link href="/contacts">
        <button className="btn btn-primary" type="button">
          Contatti
        </button>
      </Link>
    </div>
  );
}

export default HeroText;
