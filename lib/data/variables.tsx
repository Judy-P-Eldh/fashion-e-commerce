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