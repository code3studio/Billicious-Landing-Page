import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Page;
