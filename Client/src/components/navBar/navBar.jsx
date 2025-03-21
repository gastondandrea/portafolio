function NavBar() {
    return (
      <nav style={{ background: '#FDFFFC', padding: '10px', color: 'white' }}>
        <ul style={{ display: 'flex', gap: '15px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="/" style={{ color: '#011627', textDecoration: 'none' }}>Gaston D'Andrea</a></li>
          <li><a href="/" style={{ color: '#011627', textDecoration: 'none' }}>Inicio</a></li>
          <li><a href="#acerca-de-mi" style={{ color: '#011627', textDecoration: 'none' }}>Acerca de mi</a></li>
          <li><a href="#portafolio" style={{ color: '#011627', textDecoration: 'none' }}>Portafolio</a></li>
          <li><a href="/contacto" style={{ color: '#011627', textDecoration: 'none' }}>Contacto</a></li>
        </ul>
      </nav>
    );
  }
  

export default NavBar;