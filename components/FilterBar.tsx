"use client";
import { useState, useEffect } from "react";
import SearchLocationBar from "./SearchLocationBar";

type Filters = {
  service: string;
  status: string;
  budget: string;
  time: string;
};

export default function FilterBar({
  onFiltersChange,
}: {
  onFiltersChange: (filters: Filters) => void;
}) {
  const [service, setService] = useState("");
  const [status, setStatus] = useState("");
  const [budget, setBudget] = useState("");
  const [time, setTime] = useState("");

  // Notify parent whenever filters change
  useEffect(() => {
    onFiltersChange({ service, status, budget, time });
  }, [service, status, budget, time, onFiltersChange]);

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
      <h2 className="text-sm font-medium text-gray-700 mb-3">
        Results For{" "}
        <span className="text-green-600 font-semibold">(UI/UX Design)</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Service */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Service Type</option>
          <option value="ui">UI Design</option>
          <option value="ux">UX Design</option>
          <option value="full">Full UI/UX</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Select Status</option>
          <option value="level 1">Level 1</option>
          <option value="level 2">Level 2</option>
          <option value="top rated">Top Rated</option>
        </select>

        {/* Budget */}
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        >
          <option value="">Budget</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Time */}
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
