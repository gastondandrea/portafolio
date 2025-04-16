import { useState } from 'react';
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
import hamburgerMenu from "../../assets/img/hamburger-menu.svg";
import closeMenu from "../../assets/img/close-menu.svg";

import {Link} from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Altenar Menú
  const toggleMenu = () => {
    if(isMenuOpen){
      setIsMenuOpen(false)
    }else{
      setIsMenuOpen(true)
    }
  };
  // Cerrar Menú
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    // NavBar
    <nav style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} className="w-full fixed top-0 z-50 bg-[#FDFFFC] ">
      <div className="flex items-center justify-between px-8 h-20 ">
        
        {/* Nombre Logo */}
        <div className="text-xl md:text-2xl lg:text-[32px]">
            <Link to='/' >
              Gastón D'Andrea
            </Link>
        </div>

        {/* Menú */}
        <ul className="hidden gap-8 text-2xl lg:flex">
          <li>
            <Link 
              to='/acerca-de-mi'onClick={handleLinkClick}>
              Acerca de mi
            </Link>
          </li>
          <li>
            <Link 
              to='/portafolio' onClick={handleLinkClick}>
              Portafolio
            </Link>
          </li>
          <li>
            <a href="https://linkedin.com/in/gastondandrea" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-10 h-10 lg:w-10 lg:h-10" />
            </a>
          </li>
          <li>
            <a href="https://github.com/gastondandrea" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-10 h-10 lg:w-10 lg:h-10" />
            </a>
          </li>
          <li>
            <Link 
              to='/contacto' onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón Menú Responive */}
        <div className="lg:hidden" onClick={toggleMenu}>
            <img
              src={isMenuOpen ? closeMenu : hamburgerMenu}
              alt={isMenuOpen ? "close menu" : "open menu"}
              className="w-12 h-12"
            />
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && <ul className="w-full flex flex-col items-center lg:hidden">
        <li className="py-2 w-full flex flex-col items-center">
          <Link 
            to='/acerca-de-mi'onClick={handleLinkClick}>
            Acerca de mi
          </Link>
        </li>
        <li className="py-2 w-full flex flex-col items-center ">
          <Link 
            to='/portafolio' onClick={handleLinkClick}>
            Portafolio
          </Link>
        </li>
        <li className="py-2 w-full flex flex-col items-center">
          <a href="https://linkedin.com/in/gastondandrea" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="w-8 h-8 lg:w-10 lg:h-10" />
          </a>
        </li>
        <li className="py-2 w-full flex flex-col items-center">
          <a href="https://github.com/gastondandrea" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="w-8 h-8 lg:w-10 lg:h-10" />
          </a>
        </li>
        <li className="py-2 w-full flex flex-col items-center">
          <Link 
            to='/contacto' onClick={handleLinkClick}>
            Contacto
          </Link>
        </li>
      </ul>}
    </nav>
  );
};

export default NavBar;