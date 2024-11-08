import { promises as fs } from 'fs';
import path from 'path';

import { Metadata } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { notFound } from 'next/navigation';
// import Loader from '@/components/ui/Loader';
//align stage with dev

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  body: string;
  tags: string[];
}

interface Params {
  params: {
    productId: string;
  };
}

// Function to fetch product data from the local JSON file
async function getProduct(productId: string): Promise<Product> {
  const filePath = path.join(process.cwd(), 'public', 'products.json'); // Adjust the path based on the location of your file
  const fileContents = await fs.readFile(filePath, 'utf-8');

  const products: Product[] = JSON.parse(fileContents);
  const product = products.find(
    (item) => item.title.toLocaleLowerCase() === productId.toLocaleLowerCase()
  );

  if (!product) {
    // throw new Error(`Product with id ${productId} not found`);
    return notFound();
  }

  return product;
}

// Generate dynamic metadata for each product page
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = await getProduct(params.productId);

  return {
    title: `${product.title} | Pharmacon Egypt`,
    description: product.description,
    keywords: [
      product.title,
      `${product.title} | PharmaconEG`,
      `${product.title} | Pharmacon Egypt`,
      `${product.title} PharmaconEG`,
      `${product.title} Pharmacon Egypt`,
      product.tags.join(', ')
    ],
    openGraph: {
      title: `${product.title} | Pharmacon Egypt`,
      description: product.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/products/${params.productId}`,
      type: 'article',
      images: [
        {
          url: product.image, // Product-specific image
          width: 800,
          height: 600,
          alt: `Image of ${product.title}`
        }
      ]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Pharmacon Egypt`,
      description: product.description,
      images: [product.image]
    }
  };
}

// Server component to display product details
export default async function ProductPage({ params }: Params) {
  const product = await getProduct(params.productId);

  return (
    <>
      <Head>
        {/* <link rel="preload" href="../../assets/favicon.ico" as="image" />
        <link
          rel="preload"
          href="/fonts/Cairo-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_APP_URL}/products/${product.title}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: product.title,
              image: product.image,
              description: product.description,
              brand: {
                '@type': 'Brand',
                name: 'PharmaconEG'
              }
            })
          }}
        />
      </Head>
      <div className="container mx-auto px-6 lg:px-0 pt-12 pb-6 flex flex-col items-center justify-center lg:flex-col space-y-8">
        {/* <div className="animate-pulse space-y-4">
          <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
          <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
          <div className="bg-gray-300 h-6 w-full rounded"></div>
          <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
        </div> */}
        <h1 className="text-3xl font-bold text-center lg:text-center text-[#01547E]">
          {product.title}
        </h1>
        <p className="text-center font-light text-gray-500">
          {product.description}
        </p>
        <Image
          src={product.image}
          alt={`Image of ${product.title}`}
          width={800}
          height={300}
          loading={params.productId === '1' ? 'eager' : 'lazy'}
          className="w-auto h-auto object-cover"
        />
        {product.body ? (
          <div
            dangerouslySetInnerHTML={{ __html: product.body }}
            className="product-body container wrap"
          />
        ) : null}
      </div>
    </>
  );
}
