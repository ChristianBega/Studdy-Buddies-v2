import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import in pages as needed
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TopicPage from "./pages/TopicPage";
import SubtopicPage from "./pages/SubtopicPage";

// Import components as needed
import MobileNavigation from "./components/navigation/MobileNavigation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form-page" element={<FormPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/user-profile" element={<ProfilePage />}></Route>
        <Route path="/topic-page" element={<TopicPage />}></Route>
        <Route path="/subtopic-page" element={<SubtopicPage />}></Route>
      </Routes>
      {/* Trying to conditionally render navigation only when on routes that aren't : "/" or "/form-page" */}
      {/* {!Route.path === "/" || !Route.path === "/form-page" ?  <MobileNavigation />} : null */}
      <MobileNavigation />
    </Router>
  );
}
