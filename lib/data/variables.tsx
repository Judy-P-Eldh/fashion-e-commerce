export const womenCategories = [
  'womens-dresses',
  'womens-shoes',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
] as const;
export const menCategories = ['tops', 'mens-shirts', 'mens-shoes', 'mens-watches'] as const;
export const accessoryCategories = [
  'sunglasses',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
] as const;

export const allowedCategoriesSet = new Set([
  ...womenCategories,
  ...menCategories,
  ...accessoryCategories,
]);

export const collections = {
  women: womenCategories,
  men: menCategories,
  accessories: accessoryCategories,
} as const;

export const categoryLabels: Record<string, string> = {
  "womens-dresses": "Women's dresses",
  "womens-shoes": "Women's shoes",
  "womens-watches": "Women's watches",
  "womens-bags": "Women's bags",
  "womens-jewellery": "Women's jewellery",
  "mens-shirts": "Men's shirts",
  "mens-shoes": "Men's shoes",
  "mens-watches": "Men's watches",
  "tops": "Tops",
  "sunglasses": "Sunglasses",
};

export const inShoppingCart: string[] = [];
