import { useTranslations } from 'next-intl';

import Breadcrumb from '@/components/ui/Breadcrumb';

export default function AboutHead({
  image,
  title
}: {
  image: string;
  title: string;
}) {
  const t = useTranslations();
  return (
    <section
      className="relative w-full h-72 bg-cover bg-center flex items-center justify-start p-6"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-left text-white px-4 md:px-16 flex items-center">
        {/* Text Content */}
        <div>
          <div className="flex items-center mb-4">
            <p className="text-2xl md:text-4xl lg:text-6xl mb-6 w-full">
              {t(title)}
            </p>{' '}
            {/* Text adjusted for various screens */}
          </div>
          <Breadcrumb />
        </div>
      </div>
    </section>
  );
}
