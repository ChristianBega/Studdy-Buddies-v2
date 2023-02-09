import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <form>
        {/* Form Inputs below */}
        <input type="text" placeholder="Enter username here..." />
        <input type="password" placeholder="Enter password here..." />
        <Link to="/dashboard">
          <button>Login</button>
        </Link>
        <Link to="/form-page/sign-up">
          <button>Don't have an already account? Sign up here!</button>
        </Link>
      </form>

      {/* Sign up */}
      {/* Login */}
    </>
  );
}
