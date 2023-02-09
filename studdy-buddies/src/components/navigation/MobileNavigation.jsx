import { Link, useLocation } from "react-router-dom";
export default function Form() {
  let location = useLocation();

  return (
    <>
      {location.pathname === "/" || location.pathname === "/form-page/sign-up" || location.pathname === "/form-page/login" ? null : (
        <nav>
          {/* Path needs to pass the "user name" of the current user to fetch user data. */}
          {/* "/:username/profile" */}
          <Link to="/user-profile">
            <button>User Icon</button>
          </Link>
          <Link to="/dashboard">
            <button>Dashboard Icon</button>
          </Link>
          <input type="text" placeholder="Search here..." />
        </nav>
      )}
    </>
  );
}
