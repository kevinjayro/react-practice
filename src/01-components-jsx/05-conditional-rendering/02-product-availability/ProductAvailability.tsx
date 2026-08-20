type ProductAvailabilityProps = {
  productName: string;
  inStock: boolean;
};

export default function ProductAvailability({
  productName,
  inStock,
}: ProductAvailabilityProps) {
  return (
    <div>
      <h2>{productName}</h2>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}
