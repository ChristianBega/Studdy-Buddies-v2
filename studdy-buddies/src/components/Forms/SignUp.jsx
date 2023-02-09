import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <>
      <form>
        {/* Form Inputs below */}
        <input type="email" placeholder="Enter email here..." />
        <input type="text" placeholder="Enter username here..." />
        <input type="password" placeholder="Enter password here..." />
        <Link to="/dashboard">
          <button>Sign Up</button>
        </Link>
        <Link to="/form-page/login">
          <button>Already have an account? Log in here!</button>
        </Link>
      </form>

      {/* Sign up */}
      {/* Login */}
    </>
  );
}
