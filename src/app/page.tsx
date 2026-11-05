"use client";
import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import ProductSection from "../components/productsection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <ProductSection />

      </main>
    </div>
  );
}