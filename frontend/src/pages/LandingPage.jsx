import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white text-gray-800 flex flex-col justify-center items-center px-4">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-lg">
          Welcome to ReWear ♻️
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Exchange pre-loved clothes, earn points, and support sustainable fashion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/signup">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 shadow-md">
              Start Swapping
            </button>
          </Link>
          <Link to="/browse">
            <button className="px-6 py-3 bg-white border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 shadow">
              Browse Items
            </button>
          </Link>
          <Link to="/add-product">
            <button className="px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 shadow-md">
              List an Item
            </button>
          </Link>
        </div>

        {/* Login Redirect */}
        <p className="mt-8 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-medium hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LandingPage; 







// import React from "react";
// import { Link } from "react-router-dom";
// import "./LandingPage.css";

// function LandingPage() {
//   return (
//     <div className="landing-container">
//         <div className="border-label">ReWear</div>
//       <div className="card-box glow-box">
//         <p className="slogan">✨ Swap Drip, Save the Planet 🌍</p>
//         <h1 className="title">
//           Welcome to <span className="highlight">ReWear ♻️</span>
//         </h1>
//         <p className="subtitle">
//           Exchange pre-loved clothes, earn points, and support sustainable fashion.
//         </p>

//         <div className="btn-group">
//           <Link to="/signup">
//             <button className="btn purple">Start Swapping</button>
//           </Link>
//           <Link to="/browse">
//             <button className="btn outline">Browse Items</button>
//           </Link>
//           <Link to="/add-item">
//             <button className="btn pink">List an Item</button>
//           </Link>
//         </div>

//         <p className="login-text">
//           Already have an account?{" "}
//           <Link to="/login" className="login-link">
//             Log in here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
