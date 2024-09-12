import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-xl">
        <div className="flex items-center mb-4 md:mb-6">
          <div className="w-16 h-[2px] bg-blue-500 mr-4"></div>
          <h1 className="text-lg md:text-xl font-bold text-[#01547E]">
            The Company
          </h1>
        </div>
        <p className="text-gray-600 ml-4 md:ml-20">
          This is a paragraph inside a card banner. You can use this space to
          give an introduction or highlight important information for your
          users.
        </p>
      </div>

      <div className="max-w-4xl mx-auto my-8 p-2 bg-white rounded-lg space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex justify-center">
            <Image
              src="/assets/dr.png"
              alt="About"
              style={{ width: 'auto', height: 'auto' }}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-[#01547E] mb-4">
              Not just a regular pharmaceutical agency
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-white hover:bg-[#01547E] text-[#01547E] hover:text-white border border-[#01547E] px-4 py-2 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-[#01547E] mb-4">
              Not just a regular pharmaceutical agency
            </h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-white hover:bg-[#01547E] text-[#01547E] hover:text-white border border-[#01547E] px-4 py-2 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/dr.png"
              alt="About"
              style={{ width: 'auto', height: 'auto' }}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
