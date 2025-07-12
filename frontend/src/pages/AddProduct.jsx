import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Navbar } from "../components/Navbar";

 function AddProductPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    material: "",
    size: "",
    quality: "",
    points: "",
    available: true,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  if (files.length > 5) {
    alert("You can upload a maximum of 5 images.");
    return;
  }
  if (files.length < 1) {
    alert("Please upload at least 1 image.");
    return;
  }

  const imagePreviews = files.map((file) => URL.createObjectURL(file));
  setForm({ ...form, images: imagePreviews });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", form);
    // TODO: POST to backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white ">
    <Navbar/>
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow px-4 py-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">
          List a New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="material"
              placeholder="Material"
              value={form.material}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="size"
              placeholder="Size"
              value={form.size}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="quality"
              placeholder="Quality"
              value={form.quality}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <input
            type="number"
            name="points"
            placeholder="Rewards Points Required for Exchange"
            value={form.points}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
              className="accent-purple-600"
            />
            <label className="text-sm text-gray-700">Available for Exchange</label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="w-full text-sm border border-purple-300 rounded px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex gap-2 mt-2 overflow-x-auto">
              {form.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Preview ${i + 1}`}
                  className="h-24 w-auto rounded border"
                />
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button label="Submit Product" href="#" />
          </div>
        </form>
      </div>
    </div>
    
  );
  
}

export default AddProductPage;
