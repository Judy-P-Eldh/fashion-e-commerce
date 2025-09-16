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
