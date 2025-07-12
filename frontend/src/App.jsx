import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;



