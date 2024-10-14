import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import aboutImg from "@/assets/images/home.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <Wrapper>
      <div
        className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center mt-10"
        id="about"
      >
        <div className="w-full md:w-[40%]">
          <Image
            src={aboutImg}
            alt="About Harry Potter"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center h-full w-full md:w-[55%] text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            About World of Harry Potter
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
            The <span className="font-semibold">Harry Potter</span> series is a
            legendary collection of seven books written by{" "}
            <span className="italic">J.K. Rowling</span>. These magical stories
            transport readers into the life of a young wizard, as he embarks on
            thrilling adventures at{" "}
            <span className="font-semibold">Hogwarts</span>. It's a journey
            filled with magic, friendship, and the ultimate fight between good
            and evil.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-900">
            Whether you're discovering the books for the first time or returning
            to the magic, the world of Harry Potter continues to inspire
            generations.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
