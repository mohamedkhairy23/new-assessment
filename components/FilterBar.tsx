"use client";
import { usePhotographerContext } from "@/context/PhotographerContext";
import SearchLocationBar from "./SearchLocationBar";

export default function FilterBar() {
  const { filters, setFilters } = usePhotographerContext();

  const updateFilter = (key: keyof typeof filters, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
      <h2 className="text-sm font-medium text-gray-700 mb-3">
        Results For{" "}
        <span className="text-green-600 font-semibold">Photographers</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Service */}
        <select
          value={filters.service}
          onChange={(e) => updateFilter("service", e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Service Type</option>
          <option value="Conference">Conference</option>
          <option value="Product">Product</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
        </select>

        {/* Status */}
        <select
          value={filters.status}
          onChange={(e) => updateFilter("status", e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Select Status</option>
          <option value="level 1">Level 1</option>
          <option value="level 2">Level 2</option>
          <option value="top rated">Top Rated</option>
        </select>

        {/* Budget */}
        <select
          value={filters.budget}
          onChange={(e) => updateFilter("budget", e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Budget</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Delivery Time */}
        <select
          value={filters.time}
          onChange={(e) => updateFilter("time", e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Delivery Time</option>
          <option value="1d">1 Day</option>
          <option value="1w">1 Week</option>
          <option value="1m">1 Month</option>
        </select>
      </div>

      <div className="mt-4">
        <SearchLocationBar />
      </div>
    </div>
  );
}
