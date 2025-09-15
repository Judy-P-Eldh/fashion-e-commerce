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

export const maleCategories = ['tops', 'mens-shirts', 'mens-shoes', 'mens-watches'] as const;
export const womenCategories = [
  'womens-dresses',
  'womens-shoes',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
] as const;
export const accessoryCategories = [
  'sunglasses',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
] as const;

export const allowedCategories = [...new Set([...maleCategories,...womenCategories, ...accessoryCategories])] as const; 

export const collections = {
  male: maleCategories,
  female: womenCategories,
  accessories: accessoryCategories,
} as const;


