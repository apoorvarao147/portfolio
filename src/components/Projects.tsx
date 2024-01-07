import reactCart from "../assets/react-cart-picture.png"
import portfolio from "../assets/portfolio-picture.png"
import hangman from "../assets/hangman-picture.png"
import todo from "../assets/todo-picture.png"

import "../styles/projects.scss"

const Projects = () => {
  return (
    <div className="projects" id="projects" >
      <h1>Projects</h1>
      <div>
        <img src={reactCart} />
        <div>
          <h3>React Cart</h3>
          <a>Code</a>
          <a>Live Demo</a>
        </div>
      </div>
      <div>
        <img src={portfolio} />
        <div>
          <h3>Portfolio</h3>
          <a>Code</a>
          <a>Live Demo</a>
        </div>
      </div>
      <div>
        <div>
        <img src={hangman} width="500px" />
        <img src={todo} width="500px" />
        </div>
        <div>
          <h3>Hangman Game</h3>
          <a>Code</a>
          <a>Live Demo</a>
        </div>
      </div>
     
    </div>
  );
};

export default Projects;