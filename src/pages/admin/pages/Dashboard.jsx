import React from "react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-outfit">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.name} 👋
        </h1>
        <p className="text-gray-500">
          School Management Dashboard
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Students */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Students</h2>
          <p className="text-2xl font-bold text-blue-600 mt-2">1200</p>
        </div>

        {/* Teachers */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Teachers</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">75</p>
        </div>

        {/* Classes */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Classes</h2>
          <p className="text-2xl font-bold text-purple-600 mt-2">30</p>
        </div>

        {/* Fees */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Pending Fees</h2>
          <p className="text-2xl font-bold text-red-600 mt-2">₹45,000</p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Activities
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>📌 New student added</li>
          <li>📌 Teacher assigned</li>
          <li>📌 Fees collected</li>
          <li>📌 Attendance updated</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;