import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import Button from "../components/Button";

import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-col">
          <Logo />
        </div>
        <div className="footer-container-col">
          <h4>Product</h4>
          <ul>
            <li>
              <Link to={"/features"}>Features</Link>
            </li>
            <li>
              <Link to={"/pricing"}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="footer-container-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/webinars"}>Webinars</Link>
            </li>
          </ul>
        </div>
        <div className="footer-container-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-container-col">
          <h4>Subscribe to our newsletter</h4>
          <div className="footer-form-container">
            <form>
              <label htmlFor="newsletter">
                For product announcements and exclusive insights
                <input id="newsletter" type="text" />
              </label>
              <Button
                className={"footer-form-container-button"}
                buttonText={"Subscribe"}
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
