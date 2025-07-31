

// import React from "react";

// export const ListingsGrid = ({
//   title,
//   items,
//   removable,
//   onRemove,
//   pending,
//   onAccept,
//   onReject,
// }) => {
//   return (
//     <div className="mb-10">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       {items.length === 0 ? (
//         <p className="text-gray-500">No items available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center"
//             >
//               <img
//                 src={item.image || "https://via.placeholder.com/150"}
//                 alt={item.title || item.item}
//                 className="mb-3 w-full h-40 object-cover rounded"
//               />
//               <h3 className="font-semibold">{item.title || item.item}</h3>

//               {item.requester && (
//                 <p className="text-sm text-gray-600">
//                   Requested by {item.requester}
//                 </p>
//               )}

//               {removable && (
//                 <button
//                   onClick={() => onRemove(item.id)}
//                   className="mt-2 text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               )}

//               {pending && (
//                 <div className="mt-3 flex gap-2">
//                   <button
//                     onClick={() => onAccept(item.id)}
//                     className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => onReject(item.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Reject
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };



import React from "react";

export const ListingsGrid = ({
  title,
  items,
  removable,
  onRemove,
  pending,
  onAccept,
  onReject,
}) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center"
            >
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.title || item.item}
                className="mb-3 w-full h-40 object-cover rounded"
              />
              <h3 className="font-semibold text-lg">
                {item.title || item.item}
              </h3>

              {item.requester && (
                <p className="text-sm text-gray-600">
                  Requested by <span className="font-medium">{item.requester}</span>
                </p>
              )}

              {pending && (
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => onAccept(item.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => onReject(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Reject
                  </button>
                </div>
              )}

              {removable && !pending && (
                <button
                  onClick={() => onRemove(item.id)}
                  className="mt-2 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


