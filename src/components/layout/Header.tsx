"use client";
import { navLinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/herryLogo.png";
import { signOut, useSession } from "next-auth/react";
import { GoSignIn } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="mx-2 sm:mx-auto w-full  px-6 h-[10%] sm:h-[70px] my-2 flex justify-between items-center sm:flex-row flex-col bg-slate-200 rounded sm:max-w-screen-xl ">
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

        {status === "unauthenticated" ? (
          <Link href={"/sign-in"}>
            <GoSignIn className="text-3xl" />
          </Link>
        ) : (
          <div className="flex items-center space-x-4">
            {status === "authenticated" && (
              <Link href={"/profile"}>
                <Image
                  src={session?.user?.image || ""}
                  alt={session?.user?.name || "User Image"}
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
              </Link>
            )}

            <LuLogOut
              onClick={() => signOut()}
              className="text-3xl cursor-pointer"
            />
          </div>
        )}
      </ul>
    </header>
  );
};

export default Header;
