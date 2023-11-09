import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import "../styles/Join.scss";

import TrainerImage from "../assets/JoinTrainerImage.png";
import StudentImage from "../assets/JoinStudentImage.jpeg";

function Join() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className="join">
        <h1 className="join-title">Join Us</h1>
        <article className="join-container">
          <div className="join-register-information">
            <h2 className="join-register-title">Register as Trainer</h2>
            <p className="join-register-message">
              Do consectetur proident proident id eiusmod deserunt conseauqnt
              pariatur ad ex velit do Lorem reprehenderit
            </p>
            <Button
              className={"join-register-button"}
              buttonText={"Join us"}
              onClick={() => navigate("/register")}
            />
          </div>
          <img className="join-image" src={TrainerImage} alt="TrainerImage" />
        </article>
        <article className="join-container">
          <div className="join-register-information">
            <h2 className="join-register-title">Register as Student</h2>
            <p className="join-register-message">
              Do consectetur proident proident id eiusmod deserunt conseauqnt
              pariatur ad ex velit do Lorem reprehenderit
            </p>
            <Button
              className={"join-register-button"}
              buttonText={"Join us"}
              onClick={() => navigate("/register")}
            />
          </div>
          <img className="join-image" src={StudentImage} alt="StudentImage" />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Join;
