import useTranslation from 'next-translate/useTranslation';

import { TextHeader } from '../../../components/ui/TextHeader';

function Documents() {
  const { t } = useTranslation('documents');
  return <TextHeader>{t('title')}</TextHeader>;
}

export default Documents;
