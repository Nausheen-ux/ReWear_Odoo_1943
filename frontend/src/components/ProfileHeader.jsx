export function ProfileHeader({ user }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 flex items-center gap-6">
      <img
        src={user.avatar}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover border-4 border-purple-200"
      />
      <div>
        <h2 className="text-xl font-bold text-purple-700">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        <div className="mt-2 text-sm text-purple-700 font-medium bg-purple-50 inline-block px-3 py-1 rounded-full border border-purple-200">
          🎁 Reward Points: <span className="font-semibold">{user.points}</span>
        </div>
      </div>
    </div>
  );
}
