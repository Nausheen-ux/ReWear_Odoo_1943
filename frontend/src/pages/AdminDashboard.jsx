import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [pendingItems, setPendingItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [viewItem, setViewItem] = useState(null);

  useEffect(() => {
    fetchPendingItems();
  }, []);

  const fetchPendingItems = async () => {
    setTimeout(() => {
      const dummyData = [
        {
          _id: "1",
          title: "Blue Hoodie",
          description: "A cozy blue hoodie in good condition.",
          category: "Hoodies",
          material: "Cotton",
          size: "M",
          quality: "Good",
          images: [
            "https://via.placeholder.com/300x200.png?text=Blue+Hoodie+1",
            "https://via.placeholder.com/300x200.png?text=Blue+Hoodie+2",
          ],
          tags: ["hoodie", "blue", "warm"],
          status: "pending",
          user: {
            username: "jane_doe",
            email: "jane@example.com",
          },
        },
        {
          _id: "2",
          title: "Denim Jacket",
          description: "Classic denim jacket, slightly worn.",
          category: "Jackets",
          material: "Denim",
          size: "S",
          quality: "Good",
          images: ["https://via.placeholder.com/300x200.png?text=Denim+Jacket+1",
            "https://via.placeholder.com/300x200.png?text=Denim+Jacket+2"
          ],
          tags: ["hoodie", "denim"],
          status: "pending",
          user: {
            username: "john_smith",
            email: "john@example.com",
          },
        },
      ];
      setPendingItems(dummyData);
      setLoading(false);
    }, 1000);
  };

  const handleApprove = (id) => {
    setPendingItems((prev) => prev.filter((item) => item._id !== id));
  };

  const handleRejectOpen = (id) => {
    setSelectedItemId(id);
    setShowRejectModal(true);
  };

  const handleRejectConfirm = () => {
    if (!rejectionReason.trim()) return;
    console.log("Rejected item:", selectedItemId, "Reason:", rejectionReason);
    setPendingItems((prev) =>
      prev.filter((item) => item._id !== selectedItemId)
    );
    setShowRejectModal(false);
    setRejectionReason("");
    setSelectedItemId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow mb-6 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-purple-700 ">Admin Panel</h1>
        <button className="text-sm bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-600 ">
          Logout
        </button>
      </nav>

      <div className="px-5 py-2">
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
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                  {item.user?.username && (
                    <p className="text-sm text-gray-500 mt-2">
                      Uploaded by:{" "}
                      <span className="font-medium">{item.user.username}</span>
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setViewItem(item)}
                    className="bg-purple-600 text-white px-4 py-1 rounded-full font-semibold hover:bg-purple-700 "
                  >
                    View More
                  </button>
                  <button
                    onClick={() => handleApprove(item._id)}
                    className="bg-green-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleRejectOpen(item._id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-full font-semibold hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-2">Reject Item</h2>
            <p className="mb-2 text-sm text-gray-600">
              Please provide a reason:
            </p>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-4"
              rows={3}
              placeholder="e.g., inappropriate content, blurry image..."
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowRejectModal(false);
                  setRejectionReason("");
                  setSelectedItemId(null);
                }}
                className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleRejectConfirm}
                disabled={!rejectionReason.trim()}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View More Modal */}
{viewItem && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-xl relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        onClick={() => setViewItem(null)}
      >
        ✕
      </button>

      <h2 className="text-2xl font-semibold mb-4">{viewItem.title}</h2>

      {/* Image Carousel */}
      <div className="flex overflow-x-auto gap-2 mb-4">
        {viewItem.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${viewItem.title} ${idx + 1}`}
            className="h-40 w-auto rounded border border-gray-300"
          />
        ))}
      </div>

      {/* Item Details */}
      <div className="text-sm text-gray-700 space-y-1 mb-4">
        <p><span className="font-semibold">Description:</span> {viewItem.description}</p>
        <p><span className="font-semibold">Category:</span> {viewItem.category}</p>
        <p><span className="font-semibold">Material:</span> {viewItem.material}</p>
        <p><span className="font-semibold">Size:</span> {viewItem.size}</p>
        <p><span className="font-semibold">Quality:</span> {viewItem.quality}</p>
        {viewItem.tags?.length > 0 && (
          <p>
            <span className="font-semibold">Tags:</span>{" "}
            {viewItem.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 text-gray-800 px-2 py-0.5 rounded text-xs mr-1"
              >
                {tag}
              </span>
            ))}
          </p>
        )}
      </div>

      {/* Uploader Info */}
      {viewItem.user && (
        <div className="text-sm text-gray-600 border-t pt-3">
          <p>
            Uploaded by:{" "}
            <span className="font-medium">{viewItem.user.username}</span>
          </p>
          <p>Email: {viewItem.user.email}</p>
        </div>
      )}
    </div>
  </div>
)}

    </div>
  );
}

export default AdminDashboard;
