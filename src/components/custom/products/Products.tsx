'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import Loader from '@/components/ui/Loader';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProductsComponent() {
  const [activeTab, setActiveTab] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 4;

  // Fetch the products from the JSON file
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

  // Filter products based on active tab
  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((product) => product.tags.includes(activeTab));

  // Calculate the total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Paginate the products
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full py-12 flex flex-col justify-center items-center space-y-6">
      {/* Section Title */}
      <div className="text-center">
        <h4 className="text-[#2CA6D5] uppercase text-sm">Products</h4>
        <h1 className="text-3xl font-bold text-[#01547E] my-2">
          Learn About Our Products
        </h1>
        <p className="text-[#01547E] font-light max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Tabs for product categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 ">
        {[
          'all',
          'Vitamins',
          'Cosmetics',
          'Supplements',
          'Medicines',
          'Skin Care',
          'For Woman'
        ].map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveTab(category);
              setCurrentPage(1); // Reset to first page when switching categories
            }}
            className={`px-4 py-2 rounded-full border transition ${
              activeTab === category
                ? 'bg-[#00557C] text-white'
                : 'border-gray-300 text-gray-600 hover:bg-[#00557C] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loader */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* No Products Case */}
          {paginatedProducts.length === 0 ? (
            <div className="text-center text-gray-500 mt-12">
              <p>No products available in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
              {/* Product Cards */}
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="w-36 h-36 flex-shrink-0 relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={160}
                      height={160}
                      className="rounded-full object-cover border border-gray-200 p-1"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-[#01547E] mb-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-500 mb-4">{product.description}</p>
                    <Link
                      href={`products/${product.id}`}
                      className="text-sm text-[#01547E] inline-flex items-center hover:underline"
                    >
                      Learn More
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                  currentPage === page
                    ? 'bg-[#00557C] text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
