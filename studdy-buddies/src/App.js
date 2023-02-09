import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import in pages as we go
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form-page" element={<FormPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
