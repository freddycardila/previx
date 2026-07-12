import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logoAzul from "../images/Logo Azul.png"; 

function Navbar() {
  const navigate = useNavigate();

  // ===== FUNCIONES DE NAVEGACIÓN =====
  const goToHome = () => {
    navigate('/'); // Redirige al inicio
  };

  const goToContact = () => {
    navigate('/contacto'); // Redirige a contacto
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <img src={logoAzul} alt="Logo PREVIX" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><a href="#cursos">Cursos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="nav-buttons">
        <button onClick={goToContact}>COTIZA AHORA</button>
      </div>
    </nav>
  );
}

export default Navbar;