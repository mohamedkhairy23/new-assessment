// components/PhotographerGrid.tsx
import PhotographerCard from "@/components/PhotographerCard";

type Photographer = {
  id: number;
  name: string;
  level: string;
  role: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
};

const mockPhotographers = [
  {
    id: 1,
    name: "Kaviya Pariya",
    level: "Level 1",
    cat: "Portrait Photographer",
    rating: 4.8,
    reviews: 120,
    price: 50,
    image: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
  },
  {
    id: 2,
    name: "Liam Carter",
    level: "Level 2",
    cat: "Wedding Photographer",
    rating: 4.9,
    reviews: 200,
    price: 120,
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg",
  },
  {
    id: 3,
    name: "Aisha Khan",
    level: "Top Rated",
    cat: "Event Photographer",
    rating: 5.0,
    reviews: 300,
    price: 150,
    image: "https://images.pexels.com/photos/2958280/pexels-photo-2958280.jpeg",
  },
  {
    id: 4,
    name: "Lucas Silva",
    level: "Level 1",
    cat: "Travel Photographer",
    rating: 4.7,
    reviews: 80,
    price: 75,
    image: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg",
  },
  {
    id: 5,
    name: "Sophia Lee",
    level: "Level 2",
    cat: "Fashion Photographer",
    rating: 4.9,
    reviews: 190,
    price: 140,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: 6,
    name: "Ethan Brown",
    level: "Top Rated",
    cat: "Food Photographer",
    rating: 5.0,
    reviews: 250,
    price: 100,
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  },
  {
    id: 7,
    name: "Isabella Rossi",
    level: "Level 1",
    cat: "Lifestyle Photographer",
    rating: 4.6,
    reviews: 60,
    price: 60,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    id: 8,
    name: "Noah Williams",
    level: "Level 2",
    cat: "Nature Photographer",
    rating: 4.8,
    reviews: 150,
    price: 90,
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
  },
];
export default function PhotographerGrid({
  searchTerm,
  category,
}: {
  searchTerm: string;
  category: string;
}) {
  const filteredPhotographers = mockPhotographers.filter((p) => {
    const matchesSearch = `${p.name} ${p.cat}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category
      ? p.cat.toLowerCase().includes(category.toLowerCase())
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">
        {filteredPhotographers.length} Result
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredPhotographers.map((photographer) => (
          <PhotographerCard key={photographer.id} photographer={photographer} />
        ))}
      </div>
    </main>
  );
}
