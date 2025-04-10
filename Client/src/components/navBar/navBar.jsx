import './navBar.css';
import { useState } from 'react';
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import hamburgerMenu from "../../assets/img/hamburger-menu.svg";
import closeMenu from "../../assets/img/close-menu.svg";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className='navbar-container'>
      <ul className='navbar-content'>
        <li className='navbar-brand'>
          <a href="/" onClick={handleLinkClick}><strong>Gaston</strong> D'Andrea</a>
        </li>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closeMenu : hamburgerMenu}
            alt={isMenuOpen ? "close menu" : "open menu"}
          />
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#Acerca de mi" onClick={handleLinkClick}>Acerca de mi</a></li>
          <li><a href="#Portafolio" onClick={handleLinkClick}>Portafolio</a></li>
          <li className='navbar-icon'>
            <a href="https://linkedin.com/in/gastondandrea" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li className='navbar-icon'>
            <a href="https://github.com/gastondandrea" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <img src={github} alt="github" />
            </a>
          </li>
          <li className='navbar-contact'><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;