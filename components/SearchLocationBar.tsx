// components/SearchLocationBar.tsx
"use client";

import { useState, FormEvent } from "react";
import { Search } from "lucide-react";

export default function SearchLocationBar() {
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log("Searching for location:", location, "Sort:", sort);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex-1 transition-all focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100"
      >
        {/* Search Icon */}
        <div className="px-3 text-gray-400">
          <Search size={18} />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by location..."
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 text-sm font-medium transition-colors rounded-none"
        >
          Search
        </button>
      </form>

      {/* Sort Dropdown */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-all"
      >
        <option value="">Sort by</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="high">Highest Rated</option>
        <option value="low">Lowest Rated</option>
      </select>
    </div>
  );
}
