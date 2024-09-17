import { promises as fs } from 'fs';
import path from 'path';

import { Metadata } from 'next';

import ProductDetails from '@/components/custom/product/Product';

export interface Product {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  bodyEn: string;
  bodyAr: string;
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
    title: `${product.titleEn} | Pharmacon`,
    description: product.descriptionEn,
    keywords: [
      product.titleEn,
      product.titleAr,
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
      title: `${product.titleEn} | Pharmacon`,
      description: product.descriptionEn,
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
      title: `${product.titleEn} | Pharmacon`,
      description: product.descriptionEn,
      images: [product.image]
    }
  };
}

// Server component to display product details
export default async function ProductPage({ params }: Params) {
  const product = await getProduct(params.productId);

  return <ProductDetails product={product} />;
}
