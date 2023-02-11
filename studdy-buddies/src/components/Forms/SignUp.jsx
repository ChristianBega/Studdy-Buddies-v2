import { Link } from "react-router-dom";
//  useFormControlUnstyledContext, FormControlUnstyled
import ParticlesBackground from "../../components/Particles/ParticlesBackground";

import { InputUnstyled, ButtonUnstyled } from "@mui/base";
export default function SignUpForm() {
  return (
    <section>
      <ParticlesBackground />;
      <form className="form">
        <h1 style={{ textAlign: "center" }}>
          Welcome to <span style={{ display: "block", fontSize: "85%" }}>Study Buddies</span>
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
          <p className="">
            Already have an account? <span style={{ display: "block", textAlign: "center" }}>Log in here!</span>
          </p>
        </Link>
      </form>
    </section>
  );
}
