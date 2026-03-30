import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-60 h-screen bg-blue-600 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-3">
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/students">Students</Link></li>
        <li><Link to="/admin/teachers">Teachers</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;