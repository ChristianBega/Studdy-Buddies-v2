import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import in pages as we go
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form-page" element={<FormPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
