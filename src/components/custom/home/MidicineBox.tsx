import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MedicineBoxProps {
  medicineName: string;
  description: string;
  imageUrl: string;
  id: number | string;
}

const MedicineBox: React.FC<MedicineBoxProps> = ({
  medicineName,
  description,
  imageUrl,
  id
}) => {
  const locale = useLocale();
  return (
    <div className="flex flex-col items-center p-6 max-w-sm relative my-8 w-full">
      {/* Box */}
      <div className="relative w-full h-56 rounded-lg">
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

      <Link
        href={`${locale}/products/${id}`}
        className="mt-6 text-xl font-bold text-center text-[#01547E]"
      >
        {medicineName}
      </Link>

      <p className="text-[#2CA6D5] text-center mt-2">{description}</p>
    </div>
  );
};

export default MedicineBox;
