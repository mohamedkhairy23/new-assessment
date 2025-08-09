// PhotographerGrid.tsx
"use client";

import PhotographerCard from "@/components/PhotographerCard";
import { motion, Variants } from "framer-motion";

type Photographer = {
  id: number;
  name: string;
  level: string;
  cat: string;
  service: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  deliveryTime: number;
};

const mockPhotographers: Photographer[] = [
  {
    id: 1,
    name: "Kaviya Pariya",
    level: "Level 1",
    cat: "Portrait Photographer",
    service: "Wedding",
    rating: 4.8,
    reviews: 120,
    price: 50,
    image: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
    deliveryTime: 1,
  },
  {
    id: 2,
    name: "Liam Carter",
    level: "Level 2",
    cat: "Wedding Photographer",
    service: "Birthday",
    rating: 4.9,
    reviews: 200,
    price: 120,
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg",
    deliveryTime: 7,
  },
  {
    id: 3,
    name: "Aisha Khan",
    level: "Top Rated",
    cat: "Event Photographer",
    service: "Conference",
    rating: 5.0,
    reviews: 300,
    price: 150,
    image: "https://images.pexels.com/photos/2958280/pexels-photo-2958280.jpeg",
    deliveryTime: 30,
  },
  {
    id: 4,
    name: "Lucas Silva",
    level: "Level 1",
    cat: "Travel Photographer",
    service: "Birthday",
    rating: 4.7,
    reviews: 80,
    price: 75,
    image: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg",
    deliveryTime: 1,
  },
  {
    id: 5,
    name: "Sophia Lee",
    level: "Level 2",
    cat: "Fashion Photographer",
    service: "Wedding",
    rating: 4.9,
    reviews: 190,
    price: 140,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    deliveryTime: 7,
  },
  {
    id: 6,
    name: "Ethan Brown",
    level: "Top Rated",
    cat: "Food Photographer",
    service: "Product",
    rating: 5.0,
    reviews: 250,
    price: 100,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    deliveryTime: 30,
  },
  {
    id: 7,
    name: "Isabella Rossi",
    level: "Level 1",
    cat: "Lifestyle Photographer",
    service: "Product",
    rating: 4.6,
    reviews: 60,
    price: 60,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    deliveryTime: 1,
  },
  {
    id: 8,
    name: "Noah Williams",
    level: "Level 2",
    cat: "Nature Photographer",
    service: "Conference",
    rating: 4.8,
    reviews: 150,
    price: 90,
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    deliveryTime: 7,
  },
];

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function PhotographerGrid({
  searchTerm,
  category,
  filters,
}: {
  searchTerm: string;
  category: string;
  filters: { service: string; status: string; budget: string; time: string };
}) {
  const filteredPhotographers = mockPhotographers.filter((p) => {
    const matchesSearch = `${p.name} ${p.cat}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category
      ? p.cat.toLowerCase().includes(category.toLowerCase())
      : true;
    const matchesService = filters.service
      ? p.service === filters.service
      : true;
    const matchesStatus = filters.status
      ? p.level.toLowerCase() === filters.status.toLowerCase()
      : true;
    const matchesBudget =
      filters.budget === "low"
        ? p.price < 80
        : filters.budget === "medium"
        ? p.price >= 80 && p.price <= 120
        : filters.budget === "high"
        ? p.price > 120
        : true;
    const matchesTime =
      filters.time === "1d"
        ? p.deliveryTime <= 1
        : filters.time === "1w"
        ? p.deliveryTime <= 7
        : filters.time === "1m"
        ? p.deliveryTime <= 30
        : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesService &&
      matchesStatus &&
      matchesBudget &&
      matchesTime
    );
  });

  return (
    <main className="p-6 bg-white min-h-screen">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">
        {filteredPhotographers.length} Result
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredPhotographers.map((photographer, index) => (
          <motion.div
            key={photographer.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05 }}
          >
            <PhotographerCard photographer={photographer} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
