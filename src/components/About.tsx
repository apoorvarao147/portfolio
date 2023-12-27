import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import git from "../assets/git.png";

import "../styles/about.scss";


const About = () => {
  return (
    <div className="tech-stack">
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
  )
}

export default About;