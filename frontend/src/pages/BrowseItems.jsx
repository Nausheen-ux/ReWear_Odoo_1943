import React, { useState } from "react";

const dummyCategories = ["Hoodies", "Jackets", "T-Shirts", "Pants", "Shoes"];
const dummyProducts = [
  {
    id: 1,
    title: "Blue Hoodie",
    image: "https://via.placeholder.com/150x200?text=Hoodie",
  },
  {
    id: 2,
    title: "Vintage Jacket",
    image: "https://via.placeholder.com/150x200?text=Jacket",
  },
  {
    id: 3,
    title: "Graphic Tee",
    image: "https://via.placeholder.com/150x200?text=Tee",
  },
  {
    id: 4,
    title: "Running Shoes",
    image: "https://via.placeholder.com/150x200?text=Shoes",
  },
];

function BrowseItems() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-700">Browse Items</h2>
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-1/3 text-sm"
          />
        </div>

        {/* Carousel Placeholder */}
        <div className="h-48 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
          <p className="text-purple-500 font-semibold">Featured Items Carousel</p>
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {dummyCategories.map((cat) => (
            <button
              key={cat}
              className="bg-white border border-purple-300 text-purple-700 px-4 py-2 rounded shadow-sm hover:bg-purple-50 text-sm font-semibold"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {dummyProducts
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2 text-sm font-medium text-gray-800">
                  {item.title}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseItems;
