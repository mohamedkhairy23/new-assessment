"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories: string[] = [
  "App Development",
  "Programming & Tech",
  "UI Design",
  "Video & Animation",
  "Writing & Translation",
  "Music & Audio",
  "Digital Marketing",
  "AI Services",
  "Consulting",
  "Bids",
  "Voice & Animations",
  "Automation",
  "Machines",
  "Photography",
];

export default function CategoryMenu() {
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
        onScroll={checkScroll}
        className={`flex overflow-x-auto py-3 space-x-4 scroll-smooth no-scrollbar ${
          showLeftArrow ? "pl-10" : "pl-4"
        } ${showRightArrow ? "pr-10" : "pr-4"}`}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "text-green-600 bg-green-50 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 after:animate-underline"
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
