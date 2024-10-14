import { navLinks } from "@/data/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="mx-2 sm:mx-auto w-full sm:w-3/4 px-6 h-[70px] my-2 flex justify-between items-center">
      <h1 className="text-3xl font-semibold">Harry Potter</h1>
      <ul className="flex items-center gap-3">
        {navLinks.map((link) => (
          <li key={link.url} className="text-lg font-medium">
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
