import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from "./pages/authentication/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App