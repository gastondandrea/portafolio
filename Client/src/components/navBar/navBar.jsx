import './navBar.css'
import linkedin from "../../assets/img/linkedin.svg"
import github from "../../assets/img/github.svg"

function NavBar() {
    return (
      <nav className='container-nav-nav'>
        <ul className='container-ul-nav'>
          <li className='contaner-name-nav'><a href="/"><strong>Gaston</strong> D'Andrea</a></li>
          <div className='container-hamburger-menu-nav'>
            <li><a href="/">Inicio</a></li>
            <li><a href="#acerca-de-mi">Acerca de mi</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li className='contaner-logo-nav'><img src={linkedin} alt="linkedin" /></li>
            <li className='contaner-logo-nav'><img src={github} alt="github" /></li>
            <li className='contaner-contact-nav'><a href="/contacto">Contacto</a></li>
          </div>
        </ul>
      </nav>
    );
  }

export default NavBar;