import {AiOutlineMenu} from 'react-icons/ai';

function Header() {
  return (
    <nav className="nav">
      <NavContent />

      <button>
        <AiOutlineMenu />
      </button>
    </nav>
  )
}

const NavContent = () => {
  return (
    <>
    <h2><a href="#home">Apoorva.dev</a></h2>
    <div>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:apoorvarao147@gmail.com">
      <button>Email</button>
    </a>
    </>
  )
}


export default Header