import { Link } from "react-router-dom";

export default function Form() {
  return (
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
  );
}
