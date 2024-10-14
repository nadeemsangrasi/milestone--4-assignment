import React from "react";

import Image from "next/image";
import Button from "./Button";

const BookCard = ({
  id,
  title,
  cover,
  releaseDate,
}: {
  id?: string;
  title?: string;
  releaseDate?: string;
  cover?: string;
}) => {
  return (
    <div className="bg-slate-300  mx-auto flex flex-col justify-between card rounded-xl text-center md:text-start hover:shadow-xl transition-transform duration-500  w-[300px] md:w-[340px] h-fit pt-4">
      <div className="overflow-hidden rounded-t-xl">
        <Image
          width={1000}
          height={1000}
          src={cover || ""}
          alt={title || "Book cover"}
          className="object-cover rounded-t-lg w-[200px] mx-auto"
        />
      </div>

      <div className="p-5 text-center ">
        <h2 className="text-2xl font-bold text-black dark:text-white mb-2 ">
          {title || "Book title not available"}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {releaseDate || "Release date not available"}
        </p>

        <div className="text-center md:text-start">
          <Button
            label="View Details"
            className="mx-auto block"
            url={`/books/${id || ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
