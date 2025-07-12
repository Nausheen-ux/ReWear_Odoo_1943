import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    setUser(stored);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-50">
        <p className="text-gray-600">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        Welcome, {user.name} 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Profile
          </h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Points:</strong> {user.points || 100}</p>
        </div>

        {/* Your Items */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Your Uploaded Items
          </h2>
          <p className="text-sm text-gray-500">Feature coming soon…</p>
        </div>

        {/* Swap Summary */}
        <div className="bg-white shadow rounded p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">
            Swaps History
          </h2>
          <p className="text-sm text-gray-500">Feature coming soon…</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/add-item">
          <button className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 font-medium">
            ➕ List a New Item
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserDashboard;
