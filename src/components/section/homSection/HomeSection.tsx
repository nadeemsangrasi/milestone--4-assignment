import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import homeImg from "@/assets/images/homeImg.jpg";
import Image from "next/image";
const HomeSection = () => {
  return (
    <Wrapper>
      <div className="flex justify-between  gap-10 sm:gap-20 flex-col sm:flex-row">
        <div className="flex flex-col items-center justify-center h-full text-center w-full sm:w-1/2 lg:mt-24">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to the Magical World of Harry Potter
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Explore the legendary tales of Hogwarts and discover the magic
            hidden in every book.
          </p>
          <Button label="Discover the Books" url="/books" />
        </div>
        <div className="w-full sm:w-[40%]">
          <Image src={homeImg} alt="home image" className="rounded" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSection;
