import React from "react";
import Button from "./Button";

import "../styles/LoginForm.scss";

function LoginForm() {
  const handleSubmmitButton = () => {
    handleSubmmitForm;
  };

  const handleSubmmitForm = (event) => {
    event.preventDefault();
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
          />
        </label>
        <label htmlFor="password" className="form-login-label">
          Password
          <input
            id="password"
            className="form-login-input"
            type="password"
            placeholder="Enter password"
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
