import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faRocket, 
  faBrain, 
  faShieldHeart, 
  faHeart,
  faBullseye,
  faEye,
  faFlag
} from '@fortawesome/free-solid-svg-icons';

import misionImg from "../images/mision.png";
import visionImg from "../images/vision.png";
import valoresImg from "../images/valores.png";
import heroImg from "../images/hero-about.png";

function AboutUs() {
  return (
    <section className="about-us">
      {/* HERO: TEXTO A LA IZQUIERDA - IMAGEN A LA DERECHA */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>SOBRE <span>NOSOTROS</span></h1>
          <p className="hero-subtitle">
            Conoce quiénes somos y cómo transformamos la seguridad laboral en una ventaja competitiva para tu empresa.
          </p>
        </div>
      </div>

      {/* CARDS - OCUPAN TODO EL ANCHO */}
      <div className="about-cards-section">
        <h2>NUESTROS <span>PILARES</span></h2>
        <div className="about-grid">
          
          <div className="about-card">
            <div className="about-card-image">
              <img src={misionImg} alt="Quiénes somos" />
            </div>
            <h2>Quiénes <span>somos</span></h2>
            <p>
              PREVIX SAS. es una empresa especializada en soluciones integrales de seguridad laboral, movilidad y gestión preventiva, enfocada en transformar la cultura organizacional mediante estrategias modernas y acompañamiento técnico especializado.
            </p>
          </div>

          {/* CARD 2: VISIÓN */}
          <div className="about-card">
            <div className="about-card-image">
              <img src={visionImg} alt="Visión" />
            </div>
            <h2>Nuestro <span>enfoque</span></h2>
            <p>
              Creemos que la prevención no debe verse como una obligación, sino como una herramienta estratégica para el crecimiento y sostenibilidad empresarial.
            </p>
          </div>

          {/* CARD 3: COMPROMISO */}
          <div className="about-card">
            <div className="about-card-image">
              <img src={valoresImg} alt="Valores" />
            </div>
            <h2>Nuestro <span>compromiso</span></h2>
            <p>
              Proteger vidas, fortalecer empresas y construir organizaciones más seguras.
            </p>
          </div>
        </div>

        {/* SECCIÓN DE VALORES - TÍTULO APARTE Y TARJETAS DEBAJO */}
        <div className="valores-section">
          <div className="valores-header">
            <h3 className="valores-title">Nuestros <span>valores</span></h3>
          </div>
          <div className="valores-grid">
            <div className="valor-item">
              <div className="valor-icon-wrapper">
                <FontAwesomeIcon icon={faHandshake} className="valor-icon" />
              </div>
              <h4>Cercanía</h4>
              <p style={{ color: '#f0f0f0' }}>Relaciones humanas, transparentes y construidas desde la confianza.</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon-wrapper">
                <FontAwesomeIcon icon={faRocket} className="valor-icon" />
              </div>
              <h4>Evolución</h4>
              <p>Mejores soluciones, procesos y resultados constantemente.</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon-wrapper">
                <FontAwesomeIcon icon={faBrain} className="valor-icon" />
              </div>
              <h4>Prevención inteligente</h4>
              <p>Nos anticipamos y transformamos desde la capacidad de prever.</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon-wrapper">
                <FontAwesomeIcon icon={faShieldHeart} className="valor-icon" />
              </div>
              <h4>Compromiso real</h4>
              <p>Cada proyecto es parte del crecimiento de nuestros clientes.</p>
            </div>
            <div className="valor-item">
              <div className="valor-icon-wrapper">
                <FontAwesomeIcon icon={faHeart} className="valor-icon" />
              </div>
              <h4>Humanidad</h4>
              <p>Detrás de cada indicador hay personas que merecen regresar seguros a casa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;