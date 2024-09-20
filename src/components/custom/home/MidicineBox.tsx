import Image from 'next/image';
import React from 'react';

interface MedicineBoxProps {
  medicineName: string;
  description: string;
  imageUrl: string;
}

const MedicineBox: React.FC<MedicineBoxProps> = ({
  medicineName,
  description,
  imageUrl
}) => {
  return (
    <div className="flex flex-col items-center p-6 max-w-sm relative my-8">
      {/* Box */}
      <div className="relative w-full h-32 rounded-lg">
        {/* Trapezoid shape using pseudo-elements */}
        <div className="absolute inset-0 bg-[#01547E] rounded-3xl"></div>
        <Image
          src={imageUrl}
          alt={medicineName}
          width={200}
          loading="lazy"
          height={200}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-auto h-auto object-contain rounded-lg"
        />
      </div>

      <h2 className="mt-6 text-xl font-bold text-center text-[#01547E]">
        {medicineName}
      </h2>

      <p className="text-[#2CA6D5] text-center mt-2">{description}</p>
    </div>
  );
};

export default MedicineBox;
