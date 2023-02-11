import { Link } from "react-router-dom";
// useFormControlUnstyledContext, FormControlUnstyled
import { InputUnstyled, ButtonUnstyled } from "@mui/base";
// Mui useFormControlUnstyledContext - https://mui.com/base/react-form-control/
import "../../Styles/Form.css";
import "../../Styles/FormPage.css";
export default function LoginForm() {
  return (
    <section>
      <form className="form">
        <h1 style={{ textAlign: "center" }}>
          Welcome back <span style={{ display: "block" }}>"User name"</span>
        </h1>
        <div className="inputContainers">
          <InputUnstyled className="textFields" type="text" placeholder="Enter username here..." />
          <InputUnstyled className="textFields" type="password" placeholder="Enter password here..." />
        </div>
        <Link to="/dashboard">
          <ButtonUnstyled className="btn">Login</ButtonUnstyled>
        </Link>
        <Link to="/form-page/sign-up">
          <p className="">Don't have an already account? Sign up here!</p>
        </Link>
      </form>
    </section>
  );
}
