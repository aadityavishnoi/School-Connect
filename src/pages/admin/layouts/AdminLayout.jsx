// AdminLayout.jsx
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;