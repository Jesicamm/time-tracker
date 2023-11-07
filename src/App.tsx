import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./views/Dashboard"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
