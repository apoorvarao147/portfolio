import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import git from "../assets/git.png";
import coding from "../assets/coding.jpg";
import coding800 from "../assets/coding-800.jpg";
import express from "../assets/express.png";
import node from "../assets/node.png";
import tailwind from "../assets/TailwindCSS.png";
import mongoDB from "../assets/mongoDB.png";
import next from "../assets/next.png";

import "../styles/about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-top">
        <p>Tech Stack</p>
        <div className="logos">
          <ul>
            <li>
              <img src={html} alt="HTML" height="70" />
            </li>
            <li>
              <img src={css} alt="CSS" height="70" />
            </li>
            <li>
              <img src={javascript} alt="Javascript" height="70" />
            </li>
            <li>
              <img src={typescript} alt="Typescript" height="70" />
            </li>
            <li>
              <img src={react} alt="React" height="70" />
            </li>
            <li>
              <img src={sass} alt="SASS" height="70" />
            </li>
            <li>
              <img src={git} alt="Git" height="70" />
            </li>
            <li>
              <img src={node} alt="Node" height="70" />
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img src={mongoDB} alt="MongoDB" height="40" />
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img src={express} alt="Express" height="23" />
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img src={tailwind} alt="TailwindCSS" height="25" />
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <img src={next} alt="Next" height="22" />
            </li>
          </ul>
        </div>
      </div>

      <div className="all-about">
        <div>
          <img
            src={coding}
            width="500px"
            srcSet={`${coding800} 800w`}
            alt="coding"
          />
        </div>
        <div className="about-me">
          <h2>About me</h2>
          <h3>A dedicated Full Stack Developer based in Canada 📍</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            I am an enthusiastic Full Stack Developer. I specialize in
            developing interactive user interfaces using React.js, designing and
            managing MongoDB databases, and building scalable backend services
            using Node.js and Express.js. From proficiency in various
            programming languages such as TypeScript, Node.js, and React to
            possessing a wide array of technical expertise, I can create logical
            and robust solutions for building interactive software.
          </p>
          <p>
            I am passionate about leveraging the latest technologies and best
            practices to create innovative and user-friendly applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
