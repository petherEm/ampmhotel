import React from "react";
import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        <Link href="/" >
          <Image src={LogoWhite} />
        </Link>
        Copyright &copy; 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
