export type Category = 'electronics' | 'office' | 'accessories';

export type Product = {
  id: number;
  name: string;
  category: Category;
  price: number;
};
