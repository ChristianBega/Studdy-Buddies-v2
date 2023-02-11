import { Link } from "react-router-dom";
//  useFormControlUnstyledContext, FormControlUnstyled
import { InputUnstyled, ButtonUnstyled } from "@mui/base";
export default function SignUpForm() {
  return (
    <section>
      <form className="form">
        <h1 style={{ textAlign: "center" }}>
          Welcome back to <span style={{ display: "block" }}>Study Buddies</span>
        </h1>
        <div className="inputContainers">
          <InputUnstyled className="textFields" type="email" placeholder="Enter email here..." />
          <InputUnstyled className="textFields" type="text" placeholder="Enter username here..." />
          <InputUnstyled className="textFields" type="password" placeholder="Enter password here..." />
        </div>
        <Link to="/dashboard">
          <ButtonUnstyled className="btn">Sign Up</ButtonUnstyled>
        </Link>
        <Link to="/form-page/login">
          <p className="">Already have an account? Log in here!</p>
        </Link>
      </form>
    </section>
  );
}
