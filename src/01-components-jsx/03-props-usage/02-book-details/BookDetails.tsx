type BookDetailsProps = {
  title: string;
  author: string;
  pages: number;
  publishedYear: number;
};

export default function BookDetails({
  title,
  author,
  pages,
  publishedYear,
}: BookDetailsProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
      <p>Published: {publishedYear}</p>
    </article>
  );
}
