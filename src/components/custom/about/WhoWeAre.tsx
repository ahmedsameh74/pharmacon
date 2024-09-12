import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <div className="w-full bg-[#DCF0FA] py-12 flex flex-col justify-center items-center space-y-6 md:space-y-12">
      {/* Section Title */}
      <div className="flex flex-col items-start text-start max-w-4xl w-full">
        <div className="flex items-center mb-4 md:mb-6">
          <div className="w-16 h-[2px] bg-blue-500 mr-6"></div>
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
                src="/assets/dr.png"
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Text Half (40%) */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-16 h-[2px] bg-blue-500 mr-4"></div>
                <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
                  The Company
                </h1>
              </div>
              <p className="text-gray-600 ml-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
                <div className="w-16 h-[2px] bg-blue-500 mr-4"></div>
                <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
                  The Company
                </h1>
              </div>
              <p className="text-gray-600 ml-20 text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Image Half (60%) */}
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src="/assets/dr.png"
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
                src="/assets/dr.png"
                alt="Card Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Text Half (40%) */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-16 h-[2px] bg-blue-500 mr-4"></div>
                <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
                  The Company
                </h1>
              </div>
              <p className="text-gray-600 ml-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
