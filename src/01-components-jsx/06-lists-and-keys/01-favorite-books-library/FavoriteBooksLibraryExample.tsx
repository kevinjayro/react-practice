import FavoriteBooksLibrary from './components/FavoriteBooksLibrary';

const bookList = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
  },
];

export default function FavoriteBooksLibraryExample() {
  return <FavoriteBooksLibrary books={bookList} />;
}
