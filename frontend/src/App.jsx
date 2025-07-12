import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AddItem from "./pages/AddItem";
import BrowseItems from "./pages/BrowseItems";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

         {/*  keep adding */}
         <Route path="/" element={<LandingPage />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<UserDashboard />} />
         <Route path="/add-item" element={<AddItem />} />
         <Route path="/browse" element={<BrowseItems />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



