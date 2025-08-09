"use client";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { Search, Bell, MessageSquare, ShoppingCart, X } from "lucide-react";

type NavbarProps = {
  onSearchChange?: (term: string) => void;
};

export default function Navbar({ onSearchChange }: NavbarProps) {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchChange?.(searchTerm.trim());
    setIsMobileSearchOpen(false);
  };

  if (!isClient) return null;

  return (
    <div className="w-full border-b border-gray-200 relative">
      <nav className="bg-white shadow-sm px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-green-500 text-white rounded-md p-2">
            <span className="font-bold">Logo</span>
          </div>
          <span className="hidden sm:inline-block text-gray-700 font-medium">
            Logo Place
          </span>
        </div>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/2 max-w-xl"
        >
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Find Vendor / Freelancer"
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchTerm(e.target.value);
              // Removed onSearchChange call here for search only on submit
            }}
            className="bg-transparent outline-none px-3 flex-1 text-sm text-gray-700"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-600 transition"
          >
            Search
          </button>
        </form>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-600 hover:text-green-500"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          >
            {isMobileSearchOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Search className="w-6 h-6" />
            )}
          </button>

          <MessageSquare className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-500" />
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-500" />
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-500" />

          <div className="relative" ref={profileRef}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            />
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">johndoe@example.com</p>
                </div>
                <button
                  onClick={() => console.log("Logging out...")}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Search */}
      {isMobileSearchOpen && (
        <div className="bg-white border-t border-gray-200 p-3 md:hidden">
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full px-3 py-2"
          >
            <Search className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Find Vendor / Freelancer"
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
                // Removed onSearchChange call here as well
              }}
              className="bg-transparent outline-none px-3 flex-1 text-sm text-gray-700"
              autoFocus
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-1 rounded-full hover:bg-green-600 transition"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
