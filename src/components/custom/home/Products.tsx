import MedicineBox from './MidicineBox';

export default function Products() {
  return (
    <div className="w-full bg-[#DCF0FA] py-12 flex flex-col md:flex-col justify-center items-center space-y-6 md:space-y-12 md:space-x-12">
      <div className="flex items-center flex-col text-center">
        <p className="text-base md:text-lg font-semibold text-[#2CA6D5] mb-2">
          PRODUCTS
        </p>
        <p className="text-base md:text-2xl font-bold text-[#01547E]">
          Learn about our products
        </p>
        <p className="text-sm md:text-lg font-light text-gray-600 mt-4 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="flex justify-center items-center mt-8 flex-wrap">
        {Array.from({ length: 3 }).map((_, index) => (
          <MedicineBox
            key={index}
            medicineName="Aspirin"
            description="Aspirin is used to reduce fever and relieve mild to moderate pain."
            imageUrl="/assets/dr.png"
          />
        ))}
      </div>
    </div>
  );
}
