'use client';
import { useLocale } from 'next-intl';
import React from 'react';
import Image from 'next/image';

import { Product } from '@/app/[locale]/products/[productId]/page';

const ProductDetails = ({ product }: { product: Product }) => {
  const locale = useLocale();
  return (
    <div className="container mx-auto px-6 lg:px-0 pt-12 pb-6 flex flex-col items-center justify-center lg:flex-col space-y-8">
      <h1 className="text-3xl font-bold text-center lg:text-center text-[#01547E]">
        {locale === 'ar' ? product.titleAr : product.titleEn}
      </h1>
      <p className="text-center font-light text-gray-500">
        {locale === 'ar' ? product.descriptionAr : product.descriptionEn}
      </p>
      <Image
        src={product.image}
        alt={product.titleEn}
        width={800}
        height={300}
        objectFit="cover"
        className="w-auto h-auto"
      />
      {product.bodyEn && locale === 'en' ? (
        <div
          dangerouslySetInnerHTML={{ __html: product.bodyEn }}
          className="product-body"
        />
      ) : null}
      {product.bodyAr && locale === 'ar' ? (
        <div
          dangerouslySetInnerHTML={{ __html: product.bodyAr }}
          className="product-body"
        />
      ) : null}
    </div>
  );
};

export default ProductDetails;
