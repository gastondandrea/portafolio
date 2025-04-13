// import { useState } from 'react';
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";
// import hamburgerMenu from "../../assets/img/hamburger-menu.svg";
// import closeMenu from "../../assets/img/close-menu.svg";

import {NavLink} from 'react-router-dom';

function NavBar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(prev => !prev);
  // };

  // const handleLinkClick = () => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false);
  //   }
  // };

  const activeStyle = 'underline underline-offset-4';


  return (
    <nav className="flex justify-between w-full bg-[#FDFFFC] py-4 px-16 shadow-md top-0 fixed z-10 h-24">
      <div className="flex items-center font-semibold text-3xl">
          <NavLink to='/' >
            Gastón D'Andrea
          </NavLink>
      </div>
      <ul className="flex items-center gap-8 text-2xl font-normal">
        <li>
          <NavLink 
            to='/acerca-de-mi'
            className={ ({isActive}) => isActive ? activeStyle : undefined }
            >
            Acerca de mi
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/portafolio'
            className={ ({isActive}) => isActive ? activeStyle : undefined }
            >
            Portafolio
          </NavLink>
        </li>
        <li>
          <a href="https://linkedin.com/in/gastondandrea" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="w-10 h-10 md:w-10 md:h-10" />
          </a>
        </li>
        <li>
          <a href="https://github.com/gastondandrea" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="w-10 h-10 md:w-10 md:h-10" />
          </a>
        </li>
        <li>
          <NavLink 
            to='/contacto'
            className={ ({isActive}) => isActive ? activeStyle : undefined }
            >
            Contacto
          </NavLink>
        </li>
      </ul>
      
      
      
      {/* <ul className="flex justify-between items-center px-[5vw] m-0 list-none">
        <li className="text-2xl">
          <a href="/" onClick={handleLinkClick} className="text-black no-underline hover:text-black">
            <strong>Gaston</strong> D'Andrea
          </a>
        </li>

        <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closeMenu : hamburgerMenu}
            alt={isMenuOpen ? "close menu" : "open menu"}
            className="w-10 h-10"
          />
        </div>

        <div className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-center gap-3 text-[20px] absolute md:static top-full left-0 w-full md:w-auto bg-[#FDFFFC] md:shadow-none shadow-md py-4 md:py-0 z-50`}>
          <li><a href="#Acerca de mi" onClick={handleLinkClick} className="text-black hover:text-black cursor-pointer">Acerca de mi</a></li>
          <li><a href="#Portafolio" onClick={handleLinkClick} className="text-black hover:text-black cursor-pointer">Portafolio</a></li>
          <li>
            <a href="https://linkedin.com/in/gastondandrea" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <img src={linkedin} alt="linkedin" className="w-10 h-10 md:w-10 md:h-10" />
            </a>
          </li>
          <li>
            <a href="https://github.com/gastondandrea" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
              <img src={github} alt="github" className="w-10 h-10 md:w-10 md:h-10" />
            </a>
          </li>
          <li><a href="#contacto" onClick={handleLinkClick} className="text-black hover:text-black cursor-pointer">Contacto</a></li>
        </div>
      </ul> */}
    </nav>
  );
};

export default NavBar;