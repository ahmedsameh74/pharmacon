'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ProductDetails = () => {
  const param = useRouter();
  console.log(param);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
