"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Star, Camera, MapPin, Clock } from "lucide-react";

type Photographer = {
  id: number;
  name: string;
  level: string;
  cat: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  service: string;
  deliveryTime: number;
  location: string;
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
    image: "https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg",
    deliveryTime: 1,
    location: "New York",
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
    image: "https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg",
    deliveryTime: 7,
    location: "Los Angeles",
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
    location: "Chicago",
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
    location: "Miami",
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
    image: "https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg",
    deliveryTime: 7,
    location: "San Francisco",
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
    location: "Seattle",
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
    image: "https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg",
    deliveryTime: 1,
    location: "Austin",
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
    location: "Denver",
  },
];

export default function PhotographerDetails() {
  const { id } = useParams();
  const photographer = mockPhotographers.find((p) => p.id === Number(id));

  if (!photographer)
    return (
      <p className="text-center py-20 text-gray-500">Photographer not found.</p>
    );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[420px] shadow-lg"
      >
        <Image
          src={photographer.image}
          alt={photographer.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-end">
          <div className="p-8 text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold drop-shadow-lg"
            >
              {photographer.name}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-lg opacity-90"
            >
              {photographer.cat} · {photographer.level}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-10">
          {/* About Section */}
          <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Camera className="text-green-500" /> About
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              I am {photographer.name}, a passionate{" "}
              {photographer.cat.toLowerCase()} specializing in{" "}
              {photographer.service.toLowerCase()} photography. I’ve worked with
              clients from all over {photographer.location}, delivering memories
              they’ll cherish forever. My style blends creativity with technical
              expertise to produce visually stunning results.
            </p>
          </section>

          {/* Portfolio Gallery */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Portfolio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-48 rounded-lg overflow-hidden shadow-md cursor-pointer group"
                >
                  <Image
                    src={`https://picsum.photos/seed/${i + 1}/500/500`}
                    alt={`Portfolio ${i + 1}`}
                    fill
                    className="object-cover group-hover:brightness-90 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Booking Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-xl shadow-lg space-y-5 sticky top-24 self-start"
        >
          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="text-yellow-500 fill-yellow-500" />
            <span className="text-lg font-semibold text-gray-500">
              {photographer.rating}
            </span>
            <span className="text-gray-500">
              ({photographer.reviews} reviews)
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} /> {photographer.location}
          </div>

          {/* Delivery Time */}
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} /> Delivery in {photographer.deliveryTime} days
          </div>

          {/* Price & Button */}
          <div className="pt-4 border-t">
            <p className="text-2xl font-bold text-green-600">
              ${photographer.price}/hr
            </p>
            <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold shadow-md transition-colors">
              Contact Photographer
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
