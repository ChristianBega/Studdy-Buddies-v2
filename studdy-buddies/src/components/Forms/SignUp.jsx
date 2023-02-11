import { Link } from "react-router-dom";
import { InputUnstyled, ButtonUnstyled, useFormControlUnstyledContext, FormControlUnstyled } from "@mui/base";
export default function SignUpForm() {
  return (
    <>
      <form className="form">
        {/* Form Inputs below */}
        <InputUnstyled className="textFields" type="email" placeholder="Enter email here..." />
        <InputUnstyled className="textFields" type="text" placeholder="Enter username here..." />
        <InputUnstyled className="textFields" type="password" placeholder="Enter password here..." />
        <Link to="/dashboard">
          <ButtonUnstyled className="btn">Sign Up</ButtonUnstyled>
        </Link>
        <Link to="/form-page/login">
          <p className="">Already have an account? Log in here!</p>
        </Link>
      </form>
    </>
  );
}
