import { Link } from "react-router-dom";
import { InputUnstyled, ButtonUnstyled, useFormControlUnstyledContext, FormControlUnstyled } from "@mui/base";
// Mui useFormControlUnstyledContext - https://mui.com/base/react-form-control/
import "../../Styles/Form.css";
export default function LoginForm() {
  return (
    <form className="form">
      <InputUnstyled className="textFields" type="text" placeholder="Enter username here..." />
      <InputUnstyled className="textFields" type="password" placeholder="Enter password here..." />
      <Link to="/dashboard">
        <ButtonUnstyled className="btn">Login</ButtonUnstyled>
      </Link>
      <Link to="/form-page/sign-up">
        <p className="">Don't have an already account? Sign up here!</p>
      </Link>
    </form>
  );
}
