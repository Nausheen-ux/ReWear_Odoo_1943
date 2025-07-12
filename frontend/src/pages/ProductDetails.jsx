// pages/ProductDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/Button";

const dummyProduct = {
  id: "1",
  title: "Blue Hoodie",
  description: "A cozy blue hoodie in good condition. Made from organic cotton.",
  images: [
    "https://via.placeholder.com/300x300.png?text=Main+Image",
    "https://via.placeholder.com/100x100.png?text=Image+1",
    "https://via.placeholder.com/100x100.png?text=Image+2",
    "https://via.placeholder.com/100x100.png?text=Image+3",
    "https://via.placeholder.com/100x100.png?text=Image+4",
  ],
  ecoPoints: 30,
};

function ProductDetails() {
  const { id } = useParams();
  const product = dummyProduct; // In real scenario, fetch based on id

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left: Main Image and thumbnails */}
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-80 object-cover rounded-lg border"
            />
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {product.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Preview ${i + 1}`}
                  className="h-20 w-20 object-cover rounded border"
                />
              ))}
            </div>
          </div>

          {/* Right: Title, Description, and Buttons */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-purple-700 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
              <p className="text-purple-700 font-semibold text-sm mb-2">
                ♻️ {product.Points} Reward Points Required
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold shadow">
                🔄 Swap
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-semibold shadow">
                💰 Redeem with Points
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
