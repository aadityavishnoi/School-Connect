import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentication/login/login";
import Dashboard from "./pages/admin/pages/Dashboard";
import AdminLayout from "./pages/admin/layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;