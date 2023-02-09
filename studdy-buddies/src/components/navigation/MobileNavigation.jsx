import { Link, useLocation } from "react-router-dom";
// console.log(location.pathname);
export default function Form() {
  let location = useLocation();

  return (
    // {location=== "/" ? location.pathname : location.pathname}
    <>
      {location.pathname === "/" || location.pathname === "/form-page" ? null : (
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
