import React from 'react';
import { useTranslations } from 'next-intl';

import Breadcrumb from '@/components/ui/Breadcrumb';

const ContactHeader = () => {
  const t = useTranslations();
  return (
    <div className="container mx-auto px-6 lg:px-0 pt-12 pb-6 flex flex-col items-center justify-center lg:flex-col space-y-8">
      <Breadcrumb titleColor="gray" />
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-[#01547E]">
        {t('contactUs')}
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-center font-light text-gray-600">
        {t('getInTouch')}
      </p>
    </div>
  );
};

export default ContactHeader;
