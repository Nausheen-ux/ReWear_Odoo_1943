import React, { useState } from "react";
import { ProfileHeader } from "../components/ProfileHeader";
import { ListingsGrid } from "../components/ListingsGrid";
import { Button } from "../components/ui/Button";
import { Navbar } from "../components/Navbar";

function UserDashboardPage() {
  const [user, setUser] = useState({
    name: "Kritika Singh",
    email: "kritika@example.com",
    avatar: "https://via.placeholder.com/100x100.png?text=User",
  });

  const [listings, setListings] = useState([
    { id: 1, title: "Denim Jacket", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Floral Skirt", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Tote Bag", image: "https://via.placeholder.com/150" },
    { id: 4, title: "White Shirt", image: "https://via.placeholder.com/150" },
  ]);

  const handleRemoveListing = (id) => {
    setListings(listings.filter((item) => item.id !== id));
  };

  const [history] = useState([
    { id: 1, title: "Blue Jeans", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Checked Shirt", image: "https://via.placeholder.com/150" },
  ]);

  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, item: "Blue Jeans", requester: "Aarav" },
    { id: 2, item: "Vintage Tee", requester: "Meera" },
  ]);

  const handleAccept = (id) => {
    setPendingRequests(pendingRequests.filter((req) => req.id !== id));
  };

  const handleReject = (id) => {
    setPendingRequests(pendingRequests.filter((req) => req.id !== id));
  };

  const [purchases] = useState([
    { id: 1, title: "Woolen Scarf", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Green Kurti", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Running Shoes", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Grey Hoodie", image: "https://via.placeholder.com/150" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white text-gray-800">
      <Navbar role="user" />
      <div className="max-w-5xl mx-auto px-4 py-6">
        <ProfileHeader user={user} onUpdate={setUser} />

        <div className="flex justify-end mb-6">
          <Button label="+ Add Product" href="/add-product" />
        </div>

        <ListingsGrid
          title="My Listings"
          items={listings}
          removable={true}
          onRemove={handleRemoveListing}
        />

        <ListingsGrid title="My Purchases" items={purchases} />
        <ListingsGrid title="My History" items={history} />

        <ListingsGrid
          title="Pending Requests"
          items={pendingRequests}
          pending={true}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>
    </div>
  );
}

export default UserDashboardPage;
