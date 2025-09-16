import { accessoryCategories, collections, menCategories, womenCategories } from "../data/variables";

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



export type CollectionKey = keyof typeof collections;
export type AccessoryCategory = typeof accessoryCategories[number];
export type AllowedCategory = typeof collections[CollectionKey][number]