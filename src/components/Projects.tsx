import moonEstate from "../assets/moon-estate.png";
import moonEstate1024 from "../assets/moon-estate-picture-1024.png";
import moonEstate800 from "../assets/moon-estate-picture-800.png";
import moonEstate400 from "../assets/moon-estate-picture-400.png";

import reactCart from "../assets/react-cart.png";
import reactCart1024 from "../assets/react-cart-picture-1024.png";
import reactCart800 from "../assets/react-cart-picture-800.png";
import reactCart400 from "../assets/react-cart-picture-400.png";

import portfolio from "../assets/portfolio.png";

import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import "../styles/projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div>
        <img
          src={moonEstate}
          alt="moon-estate"
          srcSet={`${moonEstate1024} 1024w, ${moonEstate800} 800w, ${moonEstate400} 400w,`}
        />
        <div>
          <h3>Moon Estate</h3>
          <div>
            <p>
              A real estate website that specializes in helping clients buy,
              sell, and rent properties. It was built using <span>React</span>{" "}
              and <span>Tailwind CSS</span>. The backend was built using{" "}
              <span>Express</span> and uses <span>MongoDB</span> database. It
              also uses <span>JWT</span> for authentication and{" "}
              <span>Redux</span> for state-management. Users can sign-up, create
              their listings and contact landlord if interested in any property.
            </p>
            <div>
              <a
                target="_blank"
                href="https://github.com/apoorvarao147/mern-estate"
                rel="noreferrer"
              >
                Code <FaGithub />
              </a>
              <a
                target="_blank"
                href="https://mernapi.apoorvarao.com/"
                rel="noreferrer"
              >
                Live Demo <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={reactCart}
          alt="react-cart"
          srcSet={`${reactCart1024} 1024w, ${reactCart800} 800w, ${reactCart400} 400w,`}
        />
        <div>
          <h3>React Cart</h3>
          <div>
            <p>
              A cart system which was developed using <span>React Hooks</span>{" "}
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
        <img
          src={portfolio}
          alt="portfolio"
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
        <h2>Mini Projects</h2>
        <div className="mini">
          <div>
            <h3>Hangman game</h3>
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
          <div>
            <h3>To do List</h3>
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
  );
};

export default Projects;
