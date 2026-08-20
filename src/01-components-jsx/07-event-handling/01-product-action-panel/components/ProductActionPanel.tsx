import type { Product } from '../types/product';

type ProductActionPanelProps = {
  product: Product;
};

export default function ProductActionPanel({
  product,
}: ProductActionPanelProps) {
  const handleViewDetails = (product: Product) => {
    console.log(product);
  };

  const handleAddToCart = (id: number) => {
    console.log(id);
  };

  const handleAddToWishlist = (name: string) => {
    console.log(name);
  };
  return (
    <section>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => handleViewDetails(product)}>View Details</button>
      <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
      <button onClick={() => handleAddToWishlist(product.name)}>
        Add to Wishlist
      </button>
    </section>
  );
}
