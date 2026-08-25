import type { Product } from './ProductInventory.type';

export const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
    stock: 5,
    featured: true,
  },
  {
    id: 2,
    name: 'Keyboard',
    price: 80,
    stock: 10,
    featured: false,
  },
  {
    id: 3,
    name: 'Monitor',
    price: 350,
    stock: 3,
    featured: true,
  },
];
