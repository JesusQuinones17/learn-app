import Header from "../components/Header";
import Footer from "../components/Footer";

import AboutUsImage from "../assets/AboutUsImage.jpg";
import JohnDoe from "../assets/JohnDoe.png";
import SaraRose from "../assets/SaraRose.png";
import JackBlack from "../assets/JackBlack.png";

import "../styles/About.scss";

function About() {
  return (
    <>
      <Header />
      <main className="about">
        <article className="about-container">
          <h1 className="about-title">About us</h1>
          <p className="about-message">
            Welcome to the 'About us' section of Platform, where we aim to
            provide you a deeper understanding of our philosophy, values and
            mission. Established in 2023, Learn Platform was born out of a
            passion for learning and a belif in the power of knowledge to
            transform lives.
          </p>
        </article>
        <img
          className="about-main-image"
          src={AboutUsImage}
          alt="AboutUsImage"
        />
        <div className="join-team">
          <div className="join-team-item">
            <h2 className="join-team-title">Our Team</h2>
            <p className="join-team-message">
              Aliqua ipsum tempor aliqua elisumod lorem ad labore culpa aliquip
            </p>
          </div>
          <div className="join-team-item">
            <img className="join-team-item-image" src={JohnDoe} alt="JohnDoe" />
            <h3 className="join-team-item-name">John Doe</h3>
            <p className="join-team-item-title">Professional title</p>
            <p className="join-team-item-desc">
              Parataur ea consecuateur anim qui nisi exerci
            </p>
          </div>
          <div className="join-team-item">
            <img
              className="join-team-item-image"
              src={SaraRose}
              alt="JohnDoe"
            />
            <h3 className="join-team-item-name">Sara Rose</h3>
            <p className="join-team-item-title">Professional title</p>
            <p className="join-team-item-desc">
              Parataur ea consecuateur anim qui nisi exerci
            </p>
          </div>
          <div className="join-team-item">
            <img
              className="join-team-item-image"
              src={JackBlack}
              alt="JohnDoe"
            />
            <h3 className="join-team-item-name">John Doe</h3>
            <p className="join-team-item-title">Professional title</p>
            <p className="join-team-item-desc">
              Parataur ea consecuateur anim qui nisi exerci
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
