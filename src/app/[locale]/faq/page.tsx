import { useTranslations } from 'next-intl';

import Accordion from '@/components/ui/Accordion';

export default function Faq() {
  const t = useTranslations();
  const items = [
    { title: t('whoWeAre'), children: <p>{t('noSellPaymentProviders')}</p> },
    { title: t('ourMission'), children: <p>{t('noSellPaymentProviders')}</p> },
    { title: t('ourVision'), children: <p>{t('noSellPaymentProviders')}</p> }
  ];
  return (
    <div className="p-6 max-w-7xl mx-auto container space-y-6 h-[calc(100vh-275px)]">
      <h1 className="text-2xl mb-4 text-center">{t('faq')}</h1>
      <Accordion items={items} />
    </div>
  );
}
