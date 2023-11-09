import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import HomeVideoImage from "../assets/MainImage.png";

import "../styles/Home.scss";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="home">
        <article className="home-container">
          <h1>Let's start learning</h1>
          <p className="home-message">
            Welcome to Learn Platform - where every day is a day to learn. Dive
            into the vast ocean of knowledge and empower yourself with the tools
            for a successful tomorrow. Happy learning!
          </p>
        </article>
        <img
          className="home-video-image"
          src={HomeVideoImage}
          alt="VideoImage"
        />
        <article className="home-join-us-container">
          <h2 className="home-join-us-title">Join us</h2>
          <p className="home-join-us-message">
            Qui ut exercitation officia proident enim non tempor tempor ipsum ex
            nulla ea adipiscing sit consequat enim elit cupidatat o
          </p>
          <Button
            buttonText={"Join us"}
            className={"home-join-us-button"}
            onClick={() => navigate("/join")}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
