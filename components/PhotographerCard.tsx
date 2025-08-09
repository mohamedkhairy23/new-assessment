// components/PhotographerCard.tsx
"use client";

import Image from "next/image";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

type Photographer = {
  id: number;
  name: string;
  level: string;
  cat: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
};

export default function PhotographerCard({
  photographer,
}: {
  photographer: Photographer;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={photographer.image}
          alt={photographer.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-green-600 rounded-md w-8 h-8 flex items-center justify-center hover:bg-green-700 transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={16}
            className={isFavorite ? "text-white fill-white" : "text-white"}
            strokeWidth={isFavorite ? 1 : 2}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Name */}
        <div className="flex items-center gap-2">
          <Image
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt={photographer.name}
            width={32}
            height={32}
            className="rounded-full border-2 border-white shadow-sm"
          />
          <span className="font-semibold text-gray-800 truncate">
            {photographer.name}
          </span>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {photographer.level}
          </p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {photographer.cat}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1">
          <Star size={16} className="text-green-500 fill-green-500" />
          <span className="text-sm text-gray-700 font-medium">
            {photographer.rating.toFixed(1)}
          </span>
          <span className="text-xs text-gray-500 ml-1">
            ({photographer.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <p className="text-sm text-gray-700 mt-2">
          From{" "}
          <span className="font-bold text-green-600">
            ${photographer.price}
          </span>
          /hr
        </p>

        {/* Button */}
        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          View Portfolio
        </button>
      </div>
    </div>
  );
}
