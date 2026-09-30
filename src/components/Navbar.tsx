import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logoAzul from "../images/Logo Azul.png"; 

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ===== FUNCIONES DE NAVEGACIÓN =====
  const goToHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const goToContact = () => {
    navigate('/contacto');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={logoAzul} alt="Logo PREVIX" />
      </div>

      {/* 👇 CONTENEDOR DE ACCIONES MÓVILES: BOTÓN COTIZA + HAMBURGUESA */}
      <div className="nav-mobile-actions">
        {/* Botón COTIZA AHORA visible solo en móvil, al lado del hamburguesa */}
        <button className="mobile-cotiza-btn" onClick={goToContact}>
          COTIZA AHORA
        </button>

        {/* Botón Hamburguesa */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* MENÚ DE NAVEGACIÓN */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
        <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
        <li><Link to="/advance" onClick={closeMenu}>Avancemos</Link></li>
        <li><a href="#cursos" onClick={closeMenu}>Cursos</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>

        {/* Botón COTIZA AHORA dentro del menú móvil (opcional) */}
        <li className="nav-mobile-button">
          <button onClick={goToContact}>COTIZA AHORA</button>
        </li>
      </ul>

      {/* BOTÓN DE ESCRITORIO */}
      <div className="nav-buttons">
        <button onClick={goToContact}>COTIZA AHORA</button>
      </div>
    </nav>
  );
}

export default Navbar;