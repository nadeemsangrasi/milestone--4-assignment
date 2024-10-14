import { navLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/herryLogo.png";
const Header = () => {
  return (
    <header className="mx-2 sm:mx-auto w-full sm:max-w-[80%] px-6 h-[10%] sm:h-[70px] my-2 flex justify-between items-center sm:flex-row flex-col bg-slate-200 rounded">
      <Image
        src={logo}
        alt="logo"
        className="w-[80px] h-[60px] sm:w-[150px] sm:h-[160px] object-contain"
      />
      <ul className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
        {navLinks.map((link) => (
          <li key={link.url} className="sm:text-lg font-medium hover:underline">
            <Link href={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
