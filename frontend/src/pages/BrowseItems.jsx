import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BrowseItems.css";

function BrowseItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/items");
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div className="browse-container">
      <h1 className="browse-title">Browse Items</h1>
      <div className="item-grid">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <img src={item.images?.[0]} alt={item.title} className="item-img" />
            <div className="item-details">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
              <span className="item-points">{item.points} pts</span>
              <button className="swap-btn">Swap Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseItems;
