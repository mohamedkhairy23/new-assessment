"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { usePhotographerContext } from "@/context/PhotographerContext";

export default function SearchLocationBar() {
  const { location, setLocation, sort, setSort } = usePhotographerContext();
  const [localLocation, setLocalLocation] = useState(location);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setLocation(localLocation);
    console.log("Searching for location:", localLocation, "Sort:", sort);
  };

  const handleInputChange = (value: string) => {
    setLocalLocation(value);
    if (value.trim() === "") {
      setLocation("");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200 flex-wrap">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex w-full sm:flex-1 items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100"
      >
        <div className="px-3 text-gray-400 flex-shrink-0">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={localLocation}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Search by location..."
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none min-w-0"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 text-sm font-medium transition-colors rounded-none whitespace-nowrap"
        >
          Search
        </button>
      </form>

      {/* Sort Dropdown */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full sm:w-auto border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 transition-all"
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
