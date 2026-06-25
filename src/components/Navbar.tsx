import { Link } from "react-router-dom";
import logoAzul from "../images/Logo Azul.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoAzul} alt="Logo PREVIX" /> {/* ✅ usa la variable */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><a href="#soluciones">Soluciones</a></li>
        <li><a href="#plataforma">Plataforma</a></li>
        <li><a href="#recursos">Recursos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="nav-buttons">
        <button>COTIZA AHORA</button>
      </div>
    </nav>
  );
}

export default Navbar;
