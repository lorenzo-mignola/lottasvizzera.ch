import useTranslation from 'next-translate/useTranslation';

import { TextHeader } from '../../../components/ui/TextHeader';

function Contacts() {
  const { t } = useTranslation('contacts');
  return <TextHeader>{t('title')}</TextHeader>;
}

export default Contacts;
