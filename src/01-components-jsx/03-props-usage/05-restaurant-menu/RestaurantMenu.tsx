type RestaurantMenuProps = {
  restaurantName: string;
  mainDish: string;
  price: number;
  ingredients: string[];
};

export default function RestaurantMenu({
  restaurantName,
  mainDish,
  price,
  ingredients,
}: RestaurantMenuProps) {
  return (
    <section>
      <h1>{restaurantName}</h1>
      <p>Main Dish: {mainDish}</p>
      <p>Price: ${price}</p>
      <p>Ingredients: {ingredients}</p>
    </section>
  );
}
