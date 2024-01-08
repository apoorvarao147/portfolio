import reactCart from "../assets/react-cart-picture.png";
import portfolio from "../assets/portfolio-picture.png";
import hangman from "../assets/hangman-picture.png";
import todo from "../assets/todo-picture.png";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import "../styles/projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div>
        <img src={reactCart} />
        <div>
          <h3>React Cart</h3>
          <div>
            <a
              target="_blank"
              href="https://github.com/apoorvarao147/react-cart"
              rel="noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://develop.d24uct2adzl71u.amplifyapp.com/"
              rel="noreferrer"
            >
              Live Demo <FaAngleDoubleRight />
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src={portfolio} />
        <div>
          <h3>Portfolio</h3>
          <div>
            <a
              target="_blank"
              href="https://github.com/apoorvarao147/portfolio"
              rel="noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.apoorvarao.com/"
              rel="noreferrer"
            >
              Live Demo <FaAngleDoubleRight />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={hangman} width="600px" />
          <img src={todo} width="600px" />
        </div>
        <div>
          <h3>Hangman Game</h3>
          <div>
            <a
              target="_blank"
              href="https://github.com/apoorvarao147/miscellaneous"
              rel="noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://main.d34pqu7igyh8rv.amplifyapp.com/"
              rel="noreferrer"
            >
              Live Demo <FaAngleDoubleRight />
            </a>
          </div>
          <h3>To Do App</h3>
          <div>
            <a
              target="_blank"
              href="https://github.com/apoorvarao147/miscellaneous"
              rel="noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://main.d34pqu7igyh8rv.amplifyapp.com/"
              rel="noreferrer"
            >
              Live Demo <FaAngleDoubleRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
