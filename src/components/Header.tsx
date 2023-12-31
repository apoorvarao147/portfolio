import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

function Header() {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="nav">
      <h2><a href="/#">Apoorva.dev</a></h2>

      <div className={`nav-content ${isMenuOpen ? "display" : "hide"}`}>
        <ul>
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)} >About</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} >Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} >Contact</a>
          </li>
        </ul>     
      </div>

      {/* <NavContent isMenuOpen={isMenuOpen} /> */}
 
      <button className="side-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AiOutlineMenu />
      </button>
    </nav>
    </>
  )
}

export default Header
