import { Link, useNavigate } from "react-router-dom";

import Logo from "../components/Logo";
import Button from "../components/Button";

import "../styles/Header.scss";
import React from "react";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <Logo />
      <nav className="header-menu">
        <Link to="/blog" className="header-menu-item">
          Blog
        </Link>
        <Link to="/pricing" className="header-menu-item">
          Pricing
        </Link>
        <Link to="/about" className="header-menu-item">
          About us
        </Link>
      </nav>
      <div className="header-buttons-container">
        <Button
          className="header-sign-in-button"
          buttonText="Sign in"
          onClick={() => navigate("/registration")}
        />
        <Button
          className="header-join-us-button"
          buttonText="Join us"
          onClick={() => navigate("/join")}
        />
      </div>
    </header>
  );
}

export default Header;
