import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import me from "../assets/my_image.png";

function Home() {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section className="intro">
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Apoorva Rao
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Front-End React Developer", "Typescript Developer", "Javascript Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterPara",
            }}
          />
          <div>
            <a
              href="https://www.linkedin.com/in/apoorva-rao-8b5032169/"
              target="_blank"
            >
              <FaLinkedin className="links" />
            </a>
            <a href="https://github.com/apoorvarao147" target="_blank">
              <FaGithub className="links" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <img src={me} alt="Apoorva" />
      </section>
    </div>
  );
}

export default Home;
