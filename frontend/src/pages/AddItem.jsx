import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    type: "swap",
    size: "",
    condition: "",
    tags: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) navigate("/login");
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      !form.title ||
      !form.description ||
      !form.image ||
      !form.category ||
      !form.size ||
      !form.condition
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const newItem = {
      id: Date.now(),
      ...form,
      uploader: user.name,
      status: "pending"
    };

    const existing = JSON.parse(localStorage.getItem("items")) || [];
    localStorage.setItem("items", JSON.stringify([...existing, newItem]));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-purple-50 flex justify-center px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          List a New Item
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            value={form.title}
            onChange={handleChange}
            className="col-span-2 px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="col-span-2 px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <textarea
            name="description"
            placeholder="Item Description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="col-span-2 px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <input
            type="text"
            name="category"
            placeholder="Category (e.g. Topwear)"
            value={form.category}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          >
            <option value="swap">Swap</option>
            <option value="redeem">Redeem via Points</option>
          </select>

          <input
            type="text"
            name="size"
            placeholder="Size (e.g. M, L)"
            value={form.size}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <input
            type="text"
            name="condition"
            placeholder="Condition (e.g. Like New)"
            value={form.condition}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated)"
            value={form.tags}
            onChange={handleChange}
            className="col-span-2 px-4 py-2 border rounded focus:ring-2 focus:ring-purple-300"
          />

          <button
            type="submit"
            className="col-span-2 bg-purple-600 text-white py-2 rounded hover:bg-purple-700 font-semibold mt-2"
          >
            Submit Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
