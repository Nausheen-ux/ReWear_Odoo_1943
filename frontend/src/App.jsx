import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";

import BrowseItems from "./pages/BrowseItems";
import AdminDashboard from "./pages/AdminDashboard";

import AddProductPage from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>

         {/*  keep adding */}
         <Route path="/" element={<LandingPage />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
         <Route path="/admin" element={<AdminDashboard />} />
         <Route path="/user" element={<UserDashboard />} />
         <Route path="/add-product" element={<AddProductPage/>}/>
         <Route path="/browse" element={<BrowseItems/>}/>
         <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



