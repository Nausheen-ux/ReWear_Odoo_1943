import { Link } from "react-router-dom";

export function Navbar({ role = "user" }) {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center mb-6">
      <Link
        to={role === "admin" ? "/admin" : "/"}
        className="text-2xl font-extrabold text-purple-700 drop-shadow-sm"
      >
        ReWear ♻️
      </Link>

      <div className="flex items-center gap-4 text-sm font-medium">
  {role === "admin" ? null : (
    <>
      <Link
        to="/dashboard"
        className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
      >
        🏠 Home
      </Link>
      <Link
        to="/add-product"
        className="text-purple-600 hover:text-purple-800 transition-colors flex items-center"
      >
        ➕ Add Item
      </Link>
    </>
  )}
  <Link
    to="/logout"
    className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-1 rounded-full flex items-center"
  >
    Logout
  </Link>
</div>
    </nav>
  );
}
