import { useLocale } from 'next-intl';
import Image from 'next/image';

export default function WhoWeAre() {
  const locale = useLocale();
  return (
    <div className="w-full bg-[#DCF0FA] py-12 flex flex-col justify-center items-center space-y-6 md:space-y-12">
      {/* Section Title */}
      <div className="flex flex-col items-start text-start max-w-4xl w-full">
        <div className="flex items-center mb-4 md:mb-6">
          <div
            className={`w-16 h-[2px] bg-blue-500 ${locale === 'en' ? 'mr-6' : 'ml-6'}`}
          ></div>
          <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
            Who We Are
          </h1>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col justify-center items-center mt-8 gap-8">
        {/* First Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden h-auto">
          <div className="grid grid-cols-1 md:grid-cols-[60%,40%] h-full">
            {/* Image Half (60%) */}
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/assets/place.png"
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Text Half (40%) */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4 md:mb-6">
                <div
                  className={`w-16 h-[2px] bg-blue-500 ${locale === 'en' ? 'mr-4' : 'ml-4'}`}
                ></div>
                <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
                  Our Vision
                </h1>
              </div>
              <p className="text-gray-600">
                expanding our presence in the Egyptian pharmaceutical market
                across the various therapeutic areas and meeting the growing
                healthcare needs. We aim to be among the top players in the
                Egyptian pharma market.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden h-auto">
          <div className="grid grid-cols-1 md:grid-cols-[40%,60%] h-full">
            {/* Text Half (40%) */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4 md:mb-6">
                <div
                  className={`w-16 h-[2px] bg-blue-500 ${locale === 'en' ? 'mr-4' : 'ml-4'}`}
                ></div>
                <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
                  Our Mission
                </h1>
              </div>
              <p className="text-gray-600 text-start">
                to have a role in improving quality of life in the community
                through providing access to affordable high-quality
                pharmaceutical solutions. To recruit and develop high caliber
                employees who share our values and beliefs. And to work with our
                partners to achieve our goals.
              </p>
            </div>

            {/* Image Half (60%) */}
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/assets/placee.png"
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden h-auto">
          <div className="grid grid-cols-1 md:grid-cols-[60%,40%] h-full">
            {/* Image Half (60%) */}
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/assets/placeee.png"
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Text Half (40%) */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4 md:mb-6">
                <div
                  className={`w-16 h-[2px] bg-blue-500 ${locale === 'en' ? 'mr-4' : 'ml-4'}`}
                ></div>
                <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
                  Our Value
                </h1>
              </div>
              <p className="text-gray-600">
                to provide the Egyptian patient by a pharmaceutical product with
                a high standard of safety and efficacy profile and competitive
                price. Our goal is to be one of the best pharmaceutical
                companies in the Egyptian market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
