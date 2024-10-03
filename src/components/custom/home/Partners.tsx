import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Partners = () => {
  const locale = useLocale();
  return (
    <div
      className={`w-full bg-[#01547E] text-white py-12 md:py-8 flex flex-col gap-[20px] justify-center items-center space-y-6 md:space-y-0 ${locale === 'en' ? 'md:space-x-12' : 'md:space-x-reverse md:space-x-12'}`}
    >
      {/* <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold text-white my-4 px-4 md:px-0 max-w-lg">
        Our Partners
      </h1> */}
      <div
        className={`flex flex-col md:flex-row gap-[70px] justify-center items-center space-y-6 md:space-y-0 ${locale === 'en' ? 'md:space-x-12' : 'md:space-x-reverse md:space-x-12'} px-2`}
      >
        {[
          {
            alt: 'Lyomark logo',
            src: '/assets/Lyomark.png',
            bgColor: 'bg-white'
          },
          {
            alt: 'Bendalis logo',
            src: '/assets/bendalis.png',
            bgColor: 'bg-white'
          },
          {
            alt: 'Zambon logo',
            src: '/assets/zambon.svg',
            bgColor: 'bg-[#01547E]'
          },
          {
            alt: 'Biomedical logo',
            src: '/assets/biomedical.jpg',
            bgColor: ''
          },
          {
            alt: 'Rompharm logo',
            src: '/assets/ramapharm.png',
            bgColor: 'bg-white'
          },
          {
            alt: 'Biofactor logo',
            src: '/assets/biofactor.png',
            bgColor: 'bg-[#01547E]'
          }
        ].map(({ alt, src, bgColor }, index) => (
          <div
            key={index}
            className="flex items-center flex-col text-center gap-2"
          >
            <div
              className={`w-[130px] h-[90px] p-2 ${bgColor} flex items-center justify-center`}
            >
              <Image
                alt={alt}
                src={src}
                width={120}
                height={120}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <p className="text-base md:text-lg font-semibold">
              {alt.split(' ')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
