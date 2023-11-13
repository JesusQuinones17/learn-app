import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import "../styles/Registration.scss";

import RegStudentImage from "../assets/RegStudentImage.jpeg";

import { REGISTER_URL } from "../constants.js";
import { useState } from "react";

function Registration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    dateBirth: "",
    address: "",
    email: "",
    password: "",
  });

  const [isRegister, setIsRegister] = useState(true);

  const register = () => {
    console.log(form);
    Axios.post(REGISTER_URL, form).then((response) => {
      console.log(response);
      setIsRegister(!isRegister);
      console.log(isRegister);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    // console.log("send");
    event.preventDefault();
    register();
  };

  return (
    <>
      <Header />
      {!isRegister ? (
        <main className="registration">
          <div className="registration-container">
            <div className="registration-left">
              <h1 className="registration-title">Registration</h1>
              <span className="registration-message">Student</span>
              <img
                className="registration-image"
                src={RegStudentImage}
                alt="RegistrationStudent"
              />
            </div>
            <div className="registration-right">
              <form
                className="registration-form"
                autoComplete="on"
                onSubmit={handleSubmit}
              >
                <label htmlFor="firstname">
                  First name
                  <input
                    id="firstname"
                    type="text"
                    autoComplete="on"
                    placeholder="input text"
                    name="name"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="lastname">
                  Last name
                  <input
                    id="lastname"
                    type="text"
                    autoComplete="on"
                    placeholder="input text"
                    name="lastName"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="text"
                    autoComplete="on"
                    placeholder="input text"
                    name="email"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Password
                  <input
                    id="password"
                    type="password"
                    autoComplete="on"
                    placeholder="input text"
                    name="password"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="dateofbirth">
                  Date of birth (optional)
                  <input
                    id="dateofbirth"
                    type="text"
                    autoComplete="on"
                    placeholder="input text"
                    name="dateBirth"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="address">
                  Address (optional)
                  <input
                    id="address"
                    type="text"
                    autoComplete="on"
                    placeholder="input text"
                    name="address"
                    onChange={handleChange}
                  />
                </label>
                <Button
                  className={"registration-button"}
                  buttonText={"Submit"}
                  onClick={() => handleSubmit}
                />
              </form>
            </div>
          </div>
        </main>
      ) : (
        <>
          <main className="registration">
            <div className="registration-container-finished">
              <h1 className="registration-title">Registraition finished</h1>
              <p className="registration-finished-message">
                Congratulations, you have succesfylly registered with Learn
                Platform! Here is your credentials that you can change in your
                account
              </p>
              <p>
                <strong>User name</strong>
              </p>
              <p className="registration-finished-message">{form.name}</p>
              <p>
                <strong>Password</strong>
              </p>
              <p className="registration-finished-message">{form.password}</p>
            </div>
          </main>
          <Button
            className="registration-finished-button"
            buttonText="Login"
            onClick={() => navigate("/login")}
          />
        </>
      )}
      <Footer />
    </>
  );
}

export default Registration;
