export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  stock: number;
  brand: string;
  weight: number;
  dimensions: { width: number; height: number; depth: number };
  shippingInformation: string;
  availabilityStatus: string;
  reviews: { reviwerName: string; comment: string; rating: number }[];
  returnPolicy: string;
  images: string[];
  thumbnail: string;
}

export interface ProductResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

export const categories = [
  'womens-dresses',
  'womens-shoes',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'tops',
  'sunglasses',
] as const;


// create category type that is union of these two
export const maleCategories = ['tops', 'mens-shirts', 'mens-shoes', 'mens-watches'];
export const womenCategories = [
  'womens-dresses',
  'womens-shoes',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
];

export type Category = (typeof categories)[number];
