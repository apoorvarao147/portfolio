import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import git from "../assets/git.png";
import coding from "../assets/coding.jpg";
import cartoon from "../assets/cartoon.jpg";

import "../styles/about.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <p>Tech Stack</p>
        <div className="logos">
          <ul>
            <li>
              <img src={html} alt="HTML" />
            </li>
            <li>
              <img src={css} alt="CSS" />
            </li>
            <li>
              <img src={javascript} alt="Javascript" />
            </li>
            <li>
              <img src={typescript} alt="Typescript" />
            </li>
            <li>
              <img src={react} alt="React" />
            </li>
            <li>
              <img src={sass} alt="SASS" />
            </li>
            <li>
              <img src={git} alt="Git" />
            </li>
          </ul>
        </div>  
      </div>

      <div className="all-about">
        <div>
          <img src={coding} width="500px" />
          {/* <img src={cartoon} width="100px" /> */}
        </div>
        <div className="about-me">
          <h2>About me</h2>
          <h3>A dedicated Front-End REACT-JS Developer based in Ontario, Canada 📍</h3>
          <p>
            I am an enthusiastic Front-End React Developer with a strong foundation
            in creating visually appealing and user-friendly interfaces. My goal is
            to create smooth and engaging user experiences by turning design
            concepts into interactive and responsive websites. My expertise lies in
            crafting dynamic, engaging interfaces through writing clean and
            optimized code and utilizing cutting-edge development tools and
            techniques.My continuous learning drives me toconsistently improve and
            stay up-to-date with the latest trends.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
