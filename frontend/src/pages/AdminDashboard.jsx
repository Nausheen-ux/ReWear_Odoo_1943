import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [pendingItems, setPendingItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingItems();
  }, []);

  const fetchPendingItems = async () => {
    // Simulated API delay using dummy data
    setTimeout(() => {
      const dummyData = [
        {
          _id: "1",
          title: "Blue Hoodie",
          description: "A cozy blue hoodie in good condition.",
          images: ["https://via.placeholder.com/300x200.png?text=Blue+Hoodie"],
        },
        {
          _id: "2",
          title: "Denim Jacket",
          description: "Classic denim jacket, slightly worn.",
          images: ["https://via.placeholder.com/300x200.png?text=Denim+Jacket"],
        },
      ];
      setPendingItems(dummyData);
      setLoading(false);
    }, 1000);

    // If backend is ready later, replace above with:
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

  const handleApprove = (id) => {
    // Simulate approval logic
    setPendingItems(prev => prev.filter(item => item._id !== id));

    // If backend ready later:
    // await axios.patch(`http://localhost:5000/api/admin/items/${id}/approve`);
  };

  const handleReject = (id) => {
    // Simulate rejection logic
    setPendingItems(prev => prev.filter(item => item._id !== id));

    // If backend ready later:
    // await axios.patch(`http://localhost:5000/api/admin/items/${id}/reject`);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Pending Item Approvals</h1>

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
  );
}

export default AdminDashboard;
