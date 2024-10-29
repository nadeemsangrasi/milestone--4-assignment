import Button from "@/components/shared/Button";
import { fetchBooks } from "@/lib/fetchBooks";
import { IBookCard } from "@/types/types";
import Image from "next/image";

//applying SSG by generating static params
export const generateStaticParams = async () => {
  const books = await fetchBooks();
  return books.map((book: IBookCard) => ({
    book_id: book.number.toString(),
  }));
};
const BookDetailsPage = async ({ params }: { params: { book_id: string } }) => {
  const { book_id } = params;
  const books = await fetchBooks();
  const book = books.find((b: IBookCard) => b.number.toString() === book_id)!;

  return (
    <div className="min-h-screen  dark:bg-secondary-black p-8 flex items-center justify-center max-w-screen-2xl mx-auto">
      <div className="max-w-3xl mx-auto  bg-slate-300  rounded-lg shadow-lg overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center justify-center p-6">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Image
              src={book.cover}
              alt={book.title}
              width={300}
              height={450}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
              {book.title}
            </h1>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Release Date:</strong> {book.releaseDate}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              <strong>Pages:</strong> {book.pages}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {book.description}
            </p>
            <Button label="Back to Books" url="/books" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
