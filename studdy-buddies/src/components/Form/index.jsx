import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <form>
        {/* Form Inputs below */}
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
