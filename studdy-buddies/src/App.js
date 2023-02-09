import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import in pages as we go
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
