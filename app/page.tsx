import useTranslation from 'next-translate/useTranslation';

import Hero from '../components/Hero/Hero';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="hero-container">
      {t('title')}
      <Hero />
    </div>
  );
}
