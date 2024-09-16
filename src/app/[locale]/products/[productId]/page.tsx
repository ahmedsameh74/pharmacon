import { promises as fs } from 'fs';
import path from 'path';

import { Metadata } from 'next';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  body: string;
}

interface Params {
  params: {
    productId: string;
  };
}

// Function to fetch product data from the local JSON file
async function getProduct(productId: string): Promise<Product> {
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');

  const products: Product[] = JSON.parse(fileContents);
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }

  return product;
}

// Generate dynamic metadata for each product page
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = await getProduct(params.productId);

  return {
    title: `${product.title} | Pharmacon`,
    description: product.description,
    keywords: [
      product.title,
      'Pharmacon',
      'PharmaconEG',
      'EG',
      'eg',
      'Health',
      'Quality'
    ],
    icons: {
      icon: '../../assets/logo icon.ico',
      apple: '../../assets/logo icon.ico'
    },
    openGraph: {
      title: `${product.title} | Pharmacon`,
      description: product.description,
      url: `https://your-site.com/products/${params.productId}`,
      images: [
        {
          url: product.image, // Product-specific image
          width: 800,
          height: 600
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
      title: `${product.title} | Pharmacon`,
      description: product.description,
      images: [product.image]
    }
  };
}

// Server component to display product details
export default async function ProductPage({ params }: Params) {
  const product = await getProduct(params.productId);

  return (
    <div className="container mx-auto px-6 lg:px-0 pt-12 pb-6 flex flex-col items-center justify-center lg:flex-col space-y-8">
      <h1 className="text-3xl font-bold text-center lg:text-center text-[#01547E]">
        {product.title}
      </h1>
      <p className="text-center font-light text-gray-500">
        {product.description}
      </p>
      <Image
        src={product.image}
        alt={product.title}
        width={800}
        height={300}
        objectFit="cover"
        className="w-auto h-auto"
      />
      {product.body ? (
        <div
          dangerouslySetInnerHTML={{ __html: product.body }}
          className="product-body"
        />
      ) : null}
    </div>
  );
}
