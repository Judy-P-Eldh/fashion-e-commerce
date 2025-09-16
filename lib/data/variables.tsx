export const menCategories = ['tops', 'mens-shirts', 'mens-shoes', 'mens-watches'] as const;
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

export const allowedCategoriesSet = new Set([...menCategories,...womenCategories, ...accessoryCategories]); 

export const collections = {
  men: menCategories,
  women: womenCategories,
  accessories: accessoryCategories,
} as const;