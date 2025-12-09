"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 text-lg">You have successfully logged in. Explore your account and manage your settings here.</p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Profile</h3>
              <p className="text-blue-700">View and edit your profile information</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Settings</h3>
              <p className="text-purple-700">Manage your account settings and preferences</p>
            </div>
            <div className="bg-linear-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-pink-900 mb-2">Activity</h3>
              <p className="text-pink-700">View your recent activity and logs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}