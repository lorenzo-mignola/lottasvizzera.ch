import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

function HeroText() {
  const { t } = useTranslation('home');

  return (
    <div>
      <h1 className="text-2xl font-bold lg:text-6xl">{t('header')}</h1>
      <p className="py-6 lg:text-lg">{t('subHeader')}</p>
      <Link href="/contacts">
        <button className="btn btn-primary" type="button">
          {t('cta')}
        </button>
      </Link>
    </div>
  );
}

export default HeroText;
