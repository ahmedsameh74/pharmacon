export default function StatsBanner() {
  return (
    <div className="w-full bg-[#01547E] text-white py-4 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">3.5</p>{' '}
        {/* Font size adjusted */}
        <p className="text-base md:text-lg font-semibold">
          Job Done Successfully
        </p>{' '}
        {/* Text alignment ensured */}
      </div>
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">2.8k+</p>
        <p className="text-base md:text-lg font-semibold">Worldwide clients</p>
      </div>
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">12+</p>
        <p className="text-base md:text-lg font-semibold">Years experience</p>
      </div>
      <div className="flex items-center flex-col text-center">
        <p className="text-xl md:text-2xl font-bold">30+</p>
        <p className="text-base md:text-lg font-semibold">Trusted Company</p>
      </div>
    </div>
  );
}
