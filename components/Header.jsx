import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between">
        {/* LOGO */}

        <Link href="/">
          {header ? (
            <Image src={LogoDark} width={160} height={100} />
          ) : (
            <Image src={LogoWhite} width={160} height={100} />
          )}
        </Link>

        {/* NAV */}

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] items-center uppercase lg:gap-x-8`}
        >
          <Link href="" className="hover:text-accent transition">
            Home
          </Link>
          <Link href="" className="hover:text-accent transition">
            Rooms
          </Link>
          <Link href="" className="hover:text-accent transition">
            Restaurant
          </Link>
          <Link href="" className="hover:text-accent transition">
            Spa
          </Link>
          <Link href="" className="hover:text-accent transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
