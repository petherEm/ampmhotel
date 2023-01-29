import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";

import HeroSlider from "../components/HeroSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AmPM - Hotel</title>
        <meta name="description" content="AM PM Hotel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />


      <HeroSlider />
      <div className="container mx-auto relative">
        <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:-top-12 lg:left-0 lg:right-0 lg:p-0 lg:z-30">
          <BookForm />
        </div>
      </div>

      <Rooms />

      <Footer />
    </>
  );
}
