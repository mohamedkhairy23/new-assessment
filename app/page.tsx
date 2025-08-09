"use client";
import { useState } from "react";
import CategoryMenu from "@/components/CategoryMenu";
import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PhotographerGrid from "@/components/PhotographerGrid";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar onSearchChange={(term) => setSearchTerm(term)} />
      <main className="p-6 bg-white min-h-screen">
        <CategoryMenu />
        <FilterBar />
        <PhotographerGrid searchTerm={searchTerm} />
        <Footer />
      </main>
    </>
  );
}
