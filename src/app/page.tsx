"use client";
import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import ProductSection from "../components/productsection";
import AdvantageSection from "../components/advantagesection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <ProductSection />
        <AdvantageSection />

      </main>
      <Footer />
    </div>
  );
}