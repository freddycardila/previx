import logoAzul from "../images/Logo Azul.png"; 
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-logo">
          <img src={logoAzul} alt="Logo PREVIX" />
          <p>Transformamos la prevención en resultados reales</p>
        </div>

<div className="footer-bottom">
          <p>© 2026 PREVIX - Todos los derechos reservados</p>
        </div>

        <div className="footer-social">
  <div className="social-row">
    <h4>Síguenos</h4>
    <div className="social-icons">
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaLinkedin /></a>
      <a href="#"><FaInstagram /></a>
    </div>
  </div>
</div>

        
      </div>
    </footer>
  );
}

export default Footer;
