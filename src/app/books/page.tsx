import BookCard from "@/components/shared/BookCard";
import { fetchBooks } from "@/lib/fetchBooks";
import { IBookCard } from "@/types/types";
import React from "react";

const BooksPage = async () => {
  const books = await fetchBooks();
  return (
    <div className="max-w-screen-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-6 text-center py-6">
        All Books
      </h1>
      <div className="flex justify-between  flex-wrap gap-7 sm:gap-6">
        {books.map((book: IBookCard) => (
          <BookCard
            key={book.number}
            id={book.number.toString()}
            title={book.title}
            cover={book.cover}
            releaseDate={book.releaseDate}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
