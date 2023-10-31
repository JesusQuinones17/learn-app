import { Link } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

import "../styles/Login.scss";

function Login() {
  return (
    <>
      <Header />
      <article className="login">
        <h1 className="login-title">Sign In</h1>
        <h2 className="login-text">Welcome back</h2>
        <LoginForm />
        <p className="login-text">
          Don't have an account?{" "}
          <Link to={"/registration"}>
            <strong>Sign up</strong>
          </Link>
        </p>
      </article>
    </>
  );
}

export default Login;
