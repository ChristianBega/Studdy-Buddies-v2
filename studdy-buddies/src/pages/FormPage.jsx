import { useLocation } from "react-router-dom";
import LoginForm from "../components/Forms/Login";
import SignUpForm from "../components/Forms/SignUp";

export default function FormPage() {
  let location = useLocation();
  return (
    <>
      <h1>Form Page</h1>
      {location.pathname === "/form-page/login" ? <LoginForm /> : <SignUpForm />}
    </>
  );
}
