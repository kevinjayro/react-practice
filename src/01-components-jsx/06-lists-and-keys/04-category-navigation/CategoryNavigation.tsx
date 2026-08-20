type Category = {
  id: number;
  name: string;
  items: string[];
};

type CategoryNavigationProps = {
  categories: Category[];
};

export default function CategoryNavigation({
  categories,
}: CategoryNavigationProps) {
  return (
    <nav>
      {categories.map(({ id, name, items }) => (
        <section key={id}>
          <h2>{name}</h2>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
