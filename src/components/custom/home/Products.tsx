'use client';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations();
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true); // Start loading
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
      // finally {
      //   // setLoading(false); // End loading
      // }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full bg-[#DCF0FA] py-12 flex flex-col md:flex-col justify-center items-center space-y-6 md:space-y-12">
      <div className="flex items-center flex-col text-center">
        <p className="text-base md:text-lg font-semibold text-[#11546E] mb-2">
          {t('products')}
        </p>
        <p className="text-base md:text-2xl font-bold text-[#01547E]">
          {t('learnProducts')}
        </p>
        <p className="text-sm md:text-lg font-light text-gray-600 mt-4 w-3/4">
          {t('ourServParagraph')}
        </p>
      </div>
      <div
        className={`grid gap-2 w-full max-w-4xl px-4 mt-8 ${
          products?.length === 1
            ? 'grid-cols-1 justify-center place-items-center' // Center the single item
            : 'grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {products
          ?.slice(0, 3)
          .map((product) => (
            <MedicineBox
              key={product.id}
              medicineName={product.title}
              description={product.tags.join(', ')}
              imageUrl={product.image}
              id={product.title}
            />
          ))}
      </div>
    </div>
  );
}
