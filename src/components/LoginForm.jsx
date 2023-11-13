import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

import Button from "./Button";

import "../styles/LoginForm.scss";

import { LOGIN_URL } from "../constants";

function LoginForm() {
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    Axios.post(LOGIN_URL, form).then((response) => {
      console.log(response);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmmitButton = () => {
    // console.log("hellobutton");
    handleSubmmitForm;
  };

  const handleSubmmitForm = (event) => {
    event.preventDefault();
    //  console.log("helloform");
    login();
  };

  return (
    <form className="form-login" onSubmit={handleSubmmitForm}>
      <div className="form-inputs-container">
        <label htmlFor="email" className="form-login-label">
          User name
          <input
            id="email"
            className="form-login-input"
            type="text"
            placeholder="Enter email"
            autoComplete="on"
            name="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="form-login-label">
          Password
          <input
            id="password"
            className="form-login-input"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      <Button
        className="form-login-button"
        buttonText="Sign in"
        onClick={handleSubmmitButton}
      />
    </form>
  );
}

export default LoginForm;
