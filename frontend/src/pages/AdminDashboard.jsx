import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";

function AdminDashboard() {
const [pendingItems, setPendingItems] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingItems();
  }, []);

  // ✅ Fetch from backend instead of dummy data
const fetchPendingItems = async () => {
  // 🧪 Use dummy data temporarily
  const dummyItems = [
    {
      _id: "1",
      title: "Vintage Blue Hoodie",
      description: "A cozy blue hoodie, gently used.",
      images: ["https://via.placeholder.com/300x200.png?text=Blue+Hoodie"],
    },
    {
      _id: "2",
      title: "Bohemian Maxi Skirt",
      description: "Flowy boho skirt, perfect for festivals.",
      images: ["https://via.placeholder.com/300x200.png?text=Boho+Skirt"],
    },
    {
      _id: "3",
      title: "Classic Black Blazer",
      description: "Formal blazer in excellent condition.",
      images: ["https://via.placeholder.com/300x200.png?text=Black+Blazer"],
    },
    {
      _id: "4",
      title: "Graphic Tee",
      description: "Trendy oversized tee with a cool print.",
      images: ["https://via.placeholder.com/300x200.png?text=Graphic+Tee"],
    },
    {
      _id: "5",
      title: "Striped Polo Shirt",
      description: "Comfortable polo shirt for casual wear.",
      images: ["https://via.placeholder.com/300x200.png?text=Striped+Polo"],
    }
  ];

  setPendingItems(dummyItems);
  setLoading(false);

  // If you want to switch to backend:
  /*
  try {
    const res = await axios.get("http://localhost:5000/api/admin/items?status=pending");
    setPendingItems(res.data);
  } catch (err) {
    console.error("Error fetching items:", err);
  } finally {
    setLoading(false);
  }
  */
};


const handleApprove = async (id) => {
try {
await axios.patch(`http://localhost:5000/api/admin/items/${id}/approve`);
setPendingItems(prev => prev.filter(item => item._id !== id));
} catch (err) {
console.error("Approve failed:", err);
}
};

const handleReject = async (id) => {
try {
await axios.patch(`http://localhost:5000/api/admin/items/${id}/reject`);
setPendingItems(prev => prev.filter(item => item._id !== id));
} catch (err) {
console.error("Reject failed:", err);
}
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white text-gray-800">
      <Navbar role="admin"/>

      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Tabs */}
        {/* Admin Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Total Items</h3>
            <p className="text-2xl font-bold text-purple-600">122</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Pending</h3>
            <p className="text-2xl font-bold text-yellow-500">
              {pendingItems.length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Approved</h3>
            <p className="text-2xl font-bold text-green-600">85</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">Rejected</h3>
            <p className="text-2xl font-bold text-red-500">17</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          {['Manage Users', 'Manage Orders', 'Manage Listings'].map(label => (
            <button key={label} className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-50 shadow">
              {label}
            </button>
          ))}
        </div>

        {/* Items */}
        <h2 className="text-2xl font-extrabold text-purple-700 mb-4 ">Pending Items</h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : pendingItems.length === 0 ? (
          <p className="text-green-600 font-medium">No pending items 🎉</p>
        ) : (
          <div className="space-y-5">
            {pendingItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow flex flex-col sm:flex-row items-center sm:justify-between p-4 gap-4"
              >
                {/* Image */}
                <div className="w-28 h-28 rounded-md overflow-hidden bg-gray-200">
                  <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

          {/* Details */}
          <div className="flex-1 sm:px-6 text-center sm:text-left">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleApprove(item._id)}
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(item._id)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
</div>
);
}

export default AdminDashboard;