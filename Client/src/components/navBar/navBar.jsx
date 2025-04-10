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

    return (
      <nav className='container-nav-nav'>
        <ul className='container-ul-nav'>
          <li className='contaner-name-nav'>
            <a href="/"><strong>Gaston</strong> D'Andrea</a>
          </li>
          {/* Botón hamburguesa */}
          <div className="container-img-hamburgerMenu" onClick={toggleMenu}>
            <img
              src={isMenuOpen ? closeMenu : hamburgerMenu}
              alt={isMenuOpen ? "closeMenu" : "hamburgerMenu"}
            />
          </div>
          {/* Menú navegable */}
          <div className={`container-hamburger-menu-nav ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Acerca de mi</a></li>
            <li><a href="/">Portafolio</a></li>
            <li className='contaner-logo-nav'><a href="https://linkedin.com/in/gastondandrea"><img src={linkedin} alt="linkedin" /></a></li>
            <li className='contaner-logo-nav'><a href="https://github.com/gastondandrea"><img src={github} alt="github" /></a></li>
            <li className='contaner-contact-nav'><a href="/contacto">Contacto</a></li>
          </div>
        </ul>
         
      </nav>
    );
  };

export default NavBar;