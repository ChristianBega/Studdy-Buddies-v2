import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ParticlesBackground from "./components/Particles/ParticlesBackground.jsx";
// {/* <ParticlesBackground /> */}

// Import in pages as needed
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TopicPage from "./pages/TopicPage";
import SubtopicPage from "./pages/SubtopicPage";

// Import components as needed
import MobileNavigation from "./components/navigation/MobileNavigation";
import SignUpForm from "./components/Forms/SignUp";
import LoginForm from "./components/Forms/Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/form-page/sign-up" element={<SignUpForm />}></Route>
          <Route path="/form-page/login" element={<LoginForm />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/user-profile" element={<ProfilePage />}></Route>
          <Route path="/topic-page" element={<TopicPage />}></Route>
          <Route path="/subtopic-page" element={<SubtopicPage />}></Route>
        </Routes>
        {/* Trying to conditionally render navigation only when on routes that aren't : "/" or "/form-page" */}
        {/* {!Route.path === "/" || !Route.path === "/form-page" ?  <MobileNavigation />} : null */}
        <MobileNavigation />
      </Router>
    </>
  );
}
