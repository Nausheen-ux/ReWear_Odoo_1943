export function ListingsGrid({ title, items }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-2 text-sm font-medium text-gray-700">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}