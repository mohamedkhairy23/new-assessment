"use client";
import CategoryMenu from "@/components/CategoryMenu";
import FilterBar from "@/components/FilterBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import PhotographerGrid from "@/components/PhotographerGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 bg-white min-h-screen">
        <CategoryMenu />
        <FilterBar />
        <PhotographerGrid />
        <Footer />
      </main>
    </>
  );
}
