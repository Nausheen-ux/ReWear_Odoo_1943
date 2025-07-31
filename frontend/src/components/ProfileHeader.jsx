

// import React, { useState } from "react";

// export const ProfileHeader = ({ user, onUpdate }) => {
//   const [editMode, setEditMode] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     onUpdate(formData);
//     setEditMode(false);
//   };

//   return (
//     <div className="flex items-center mb-6 gap-6">
//       <div className="relative">
//         <img
//           src={formData.avatar}
//           alt="User Avatar"
//           className="w-28 h-28 rounded-full border-4 border-purple-300 shadow-md object-cover"
//         />
//       </div>

//       <div className="flex-1">
//         {editMode ? (
//           <>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="block w-full text-xl font-semibold mb-2 border rounded px-2 py-1"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="block w-full text-sm text-gray-600 mb-2 border rounded px-2 py-1"
//             />
//             <button
//               onClick={handleSave}
//               className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setEditMode(false)}
//               className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <>
//             <h1 className="text-xl font-semibold">{user.name}</h1>
//             <p className="text-sm text-gray-600">{user.email}</p>
//             <button
//               onClick={() => setEditMode(true)}
//               className="mt-2 font-bold text-purple-600 hover:underline"
//             >
//               Edit Info
//             </button>
//           </>
//         )}
//       </div>
//     </div>

    
//   );
// };


import React, { useState } from "react";

export const ProfileHeader = ({ user, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(formData);
    setEditMode(false);
  };

  return (
    <div className="flex items-center justify-between mb-6 gap-6 flex-wrap">
      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            src={formData.avatar}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-purple-300 shadow-md object-cover"
          />
        </div>

        <div>
          {editMode ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full text-xl font-semibold mb-2 border rounded px-2 py-1"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full text-sm text-gray-600 mb-2 border rounded px-2 py-1"
              />
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h1 className="text-xl font-semibold">{user.name}</h1>
              <p className="text-sm text-gray-600">{user.email}</p>
              <button
                onClick={() => setEditMode(true)}
                className="mt-2 font-bold text-purple-600 hover:underline"
              >
                Edit Info
              </button>
            </>
          )}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="bg-purple-100 border border-purple-300 rounded-lg px-6 py-4 text-center shadow-sm">
        <p className="text-sm text-gray-600">Reward Points</p>
        <p className="text-2xl font-bold text-purple-700">{user.rewardPoints ?? 0}</p>
      </div>
    </div>
  );
};



