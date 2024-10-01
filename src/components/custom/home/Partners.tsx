import { useLocale } from 'next-intl';
import Image from 'next/image';
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
        <div className="flex items-center flex-col text-center gap-2">
          {/* Font size adjusted */}
          <div className=" w-[150px] bg-white p-2 flex items-center justify-center">
            <Image
              alt="Lyomark logo"
              src="/assets/lyomark.png"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
          <p className="text-base md:text-lg font-semibold">Lyomark</p>{' '}
          {/* Text alignment ensured */}
        </div>
        <div className="flex items-center flex-col text-center gap-2">
          <div className=" w-[150px] bg-white p-2">
            <Image
              alt="Bendalis logo"
              src="/assets/bendalis.png"
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <p className="text-base md:text-lg font-semibold">Bendalis</p>
        </div>
        <div className="flex items-center flex-col text-center gap-2">
          <div className=" w-[150px] bg-[#01547E] p-2">
            <Image
              alt="Zambon logo"
              src="/assets/zambon.svg"
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <p className="text-base md:text-lg font-semibold">Zambon</p>
        </div>
        <div className="flex items-center flex-col text-center gap-2">
          {/* <div className="  bg-white"> */}
          <Image
            alt="Biomedical logo"
            src="/assets/biomedical.jpg"
            width={150}
            height={150}
            loading="lazy"
          />
          {/* </div> */}
          <p className="text-base md:text-lg font-semibold">Biomedical</p>
        </div>
        <div className="flex items-center flex-col text-center gap-2 w-[150px]">
          <div className=" bg-white p-2">
            <Image
              alt="Rompharm logo"
              src="/assets/ramapharm.png"
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <p className="text-base md:text-lg font-semibold">Rompharm</p>
        </div>
        <div className="flex items-center flex-col text-center gap-2">
          <div className=" bg-[#01547E] p-2">
            <Image
              alt="Rompharm logo"
              src="/assets/Biofactor.png"
              width={150}
              height={150}
              loading="lazy"
            />
          </div>
          <p className="text-base md:text-lg font-semibold">Biofactor</p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
