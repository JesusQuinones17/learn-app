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
      <label>
        User name
        <input type="text" placeholder="Enter email" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Enter password" />
      </label>
      <Button className="" buttonText="Sign in" onClick={handleSubmmitButton} />
    </form>
  );
}

export default LoginForm;
