import { Link } from "react-router-dom";

export function Button({ label, href }) {
  return (
    <Link
      to={href}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full font-semibold shadow"
    >
      {label}
    </Link>
  );
}
