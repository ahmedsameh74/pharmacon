'use client';
import { useEffect, useState } from 'react';
import MedicineBox from './MidicineBox';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts();
  }, []);
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
        {products?.slice(0, 3).map((product) => (
          <MedicineBox
            key={product.id}
            medicineName={product.title}
            description={product.description}
            imageUrl={product.image}
          />
        ))}
      </div>
    </div>
  );
}
