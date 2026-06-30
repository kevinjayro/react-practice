export default function MovieCollection() {
  const movies = ['Interstellar', 'Inception', 'The Prestige', 'Dune'];
  const collectionName = 'Favorite Movies';
  return (
    <section>
      <h1>{collectionName}</h1>
      <p>Total Movies: {movies.length}</p>
      <p>{movies}</p>
    </section>
  );
}
