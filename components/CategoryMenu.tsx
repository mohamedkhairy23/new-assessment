"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories: string[] = [
  "Portrait Photographer",
  "Wedding Photographer",
  "Travel Photographer",
  "Event Photographer",
  "Fashion Photographer",
  "Food Photographer",
  "Lifestyle Photographer",
  "Nature Photographer",
  "Product Photographer",
  "Real Estate Photographer",
  "Sports Photographer",
  "Pet Photographer",
  "Commercial Photographer",
  "Aerial Photographer",
  "Underwater Photographer",
  "Documentary Photographer",
  "Fine Art Photographer",
  "Street Photographer",
  "Architectural Photographer",
  "Astrophotographer",
  "Candid Photographer",
];

export default function CategoryMenu({
  onCategorySelect,
}: {
  onCategorySelect: (category: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? "" : category; // toggle
    setActiveCategory(newCategory);
    onCategorySelect(newCategory);
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      checkScroll();
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <div className="relative w-full bg-white border-b border-gray-200">
      {/* Gradient overlays - stronger now that scrollbar is hidden */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-0" />
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-0" />

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          aria-label="Scroll Left"
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full p-2 z-10 flex hover:bg-white active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
      )}

      {/* Scrollable Categories - Scrollbar completely hidden */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto py-3 space-x-4 no-scrollbar"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "text-green-600 bg-green-50"
                : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          aria-label="Scroll Right"
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full p-2 z-10 flex hover:bg-white active:scale-95 transition-all"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      )}
    </div>
  );
}
