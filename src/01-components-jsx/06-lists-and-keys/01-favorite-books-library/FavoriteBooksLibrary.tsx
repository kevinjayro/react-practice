type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

type FavoriteBooksLibraryProps = {
  books: Book[];
};

export default function FavoriteBooksLibrary({
  books,
}: FavoriteBooksLibraryProps) {
  return (
    <section>
      <h2>Favorite Books</h2>
      <ul>
        {books.map(({ id, title, author, year }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{author}</p>
            <span>{year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
