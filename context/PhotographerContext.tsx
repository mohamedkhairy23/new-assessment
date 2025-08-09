"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Filters = {
  service: string;
  status: string;
  budget: string;
  time: string;
};

type PhotographerContextType = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  location: string;
  setLocation: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

const PhotographerContext = createContext<PhotographerContextType | undefined>(
  undefined
);

export function PhotographerProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [filters, setFilters] = useState<Filters>({
    service: "",
    status: "",
    budget: "",
    time: "",
  });
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  return (
    <PhotographerContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
        filters,
        setFilters,
        location,
        setLocation,
        sort,
        setSort,
      }}
    >
      {children}
    </PhotographerContext.Provider>
  );
}

export function usePhotographerContext() {
  const context = useContext(PhotographerContext);
  if (!context) {
    throw new Error(
      "usePhotographerContext must be used within a PhotographerProvider"
    );
  }
  return context;
}
