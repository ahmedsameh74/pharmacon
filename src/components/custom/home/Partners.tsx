import { useLocale } from 'next-intl';
import React from 'react';

const Partners = () => {
  const locale = useLocale();
  return (
    <div
      className={`w-full bg-[#01547E] text-white py-12 md:py-8 flex flex-col gap-[20px] justify-center items-center space-y-6 md:space-y-0 ${locale === 'en' ? 'md:space-x-12' : 'md:space-x-reverse md:space-x-12'}`}
    >
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold text-white my-4 px-4 md:px-0 max-w-lg">
        Our Partners
      </h1>
      <div
        className={`flex flex-col md:flex-row gap-[70px] justify-center items-center space-y-6 md:space-y-0 ${locale === 'en' ? 'md:space-x-12' : 'md:space-x-reverse md:space-x-12'}`}
      >
        <div className="flex items-center flex-col text-center">
          {/* <p className="text-xl md:text-2xl font-bold">3.5</p>{' '} */}
          {/* Font size adjusted */}
          <p className="text-base md:text-lg font-semibold">Lyomark</p>{' '}
          {/* Text alignment ensured */}
        </div>
        <div className="flex items-center flex-col text-center">
          {/* <p className="text-xl md:text-2xl font-bold">2.8k+</p> */}
          <p className="text-base md:text-lg font-semibold">Bendalis</p>
        </div>
        <div className="flex items-center flex-col text-center">
          {/* <p className="text-xl md:text-2xl font-bold">12+</p> */}
          <p className="text-base md:text-lg font-semibold">Zambon</p>
        </div>
        <div className="flex items-center flex-col text-center">
          {/* <p className="text-xl md:text-2xl font-bold">30+</p> */}
          <p className="text-base md:text-lg font-semibold">Biomedical</p>
        </div>
        <div className="flex items-center flex-col text-center">
          {/* <p className="text-xl md:text-2xl font-bold">30+</p> */}
          <p className="text-base md:text-lg font-semibold">Rompharm</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
