import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export function Navbar({ role = "user", search, setSearch }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center mb-6 relative">
      <Link
        to={role === "admin" ? "/admin" : "/"}
        className="text-2xl font-extrabold text-purple-700 drop-shadow-sm"
      >
        ReWear ♻️
      </Link>

      <div className="flex items-center gap-4 text-sm font-medium relative">
        {role !== "admin" && (
          <>
            <input
              type="text"
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded text-sm w-60"
            />

            <Link
              to="/"
              className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
            >
              Home
            </Link>

            <Link
              to="/add-product"
              className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
            >
              ➕ Add Item
            </Link>
          </>
        )}

        {/* Conditional: Login vs Profile Dropdown */}
        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 text-purple-700 hover:text-purple-900"
            >
              <FaUserCircle className="text-xl" />
              <span>Profile</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-purple-50 text-sm"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 hover:bg-purple-50 text-sm text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-1 rounded-full flex items-center"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
