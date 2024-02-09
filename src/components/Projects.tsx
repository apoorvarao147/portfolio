import reactCart from "../assets/react-cart-picture.png";
import reactCart1024 from "../assets/react-cart-picture-1024.png";
import reactCart800 from "../assets/react-cart-picture-800.png";
import reactCart400 from "../assets/react-cart-picture-400.png";

import portfolio from "../assets/portfolio-picture.png";
import portfolio1024 from "../assets/portfolio-picture-1024.png";
import portfolio800 from "../assets/portfolio-picture-800.png";
import portfolio400 from "../assets/portfolio-picture-400.png";

import hangman from "../assets/hangman-picture.png";
import hangman1024 from "../assets/hangman-picture-1024.png";
import hangman800 from "../assets/hangman-picture-800.png";
import hangman400 from "../assets/hangman-picture-400.png";

import todo from "../assets/todo-picture.png";
import todo1024 from "../assets/todo-picture-1024.png";
import todo800 from "../assets/todo-picture-800.png";
import todo400 from "../assets/todo-picture-400.png";

import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import "../styles/projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div>
        <img src={reactCart} alt="react-cart" 
          srcSet={`${reactCart1024} 1024w, ${reactCart800} 800w, ${reactCart400} 400w,`}
        />
        <div>
          <h3>React Cart</h3>
          <div>
            <p>
              A cart system which is developed using <span>React Hooks</span>{" "}
              and <span>SCSS</span>, providing seamless and intuitive shopping
              experience. This feature rich system enables users to browse
              products, add items to their cart, place orders and conveniently
              track their orders history.
            </p>
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
      </div>
      <div>
        <img src={portfolio} alt="portfolio" 
          srcSet={`${portfolio1024} 1024w, ${portfolio800} 800w, ${portfolio400} 400w,`}
        />
        <div>
          <h3>Portfolio</h3>
          <div>
            <p>
              It is a fully interactive and responsive website which was
              developed using <span>React</span> and <span>SCSS</span>.
            </p>
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
      </div>
      <div className="mini-projects">
        <div>
          <img src={hangman} alt="hangman" 
            srcSet={`${hangman1024} 1024w, ${hangman800} 800w, ${hangman400} 400w,`}
          />
          <div>
            <h3>Hangman Game</h3>
            <div>
              <p>
                Try this word-guessing game which was developed using{" "}
                <span>Typescript</span> and <span>React</span>.
              </p>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/apoorvarao147/miscellaneous/tree/main/src/Hangman"
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

        <div>
          <img src={todo} alt="todo" 
            srcSet={`${todo1024} 1024w, ${todo800} 800w, ${todo400} 400w,`}
          />
          <div>
            <h3>To Do App</h3>
            <div>
              <p>
                Check out this app that allows users to add and delete tasks,
                they can also save different lists. The style was given using{" "}
                <span>styled-components</span> and developed using{" "}
                <span>React</span>.
              </p>
              <div>
                <a
                  target="_blank"
                  href="https://github.com/apoorvarao147/miscellaneous/tree/main/src/ToDo"
                  rel="noreferrer"
                >
                  Code <FaGithub />
                </a>
                <a
                  target="_blank"
                  href="https://main.d34pqu7igyh8rv.amplifyapp.com/todo"
                  rel="noreferrer"
                >
                  Live Demo <FaAngleDoubleRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
