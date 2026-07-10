   import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 IMPORTANTE: Importa useNavigate
import '../css/AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faRocket, 
  faBrain, 
  faShieldHeart, 
  faHeart,
  faArrowRight,
  faStar,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

import misionImg from "../images/mision.png";
import visionImg from "../images/vision_2.png";
import valoresImg from "../images/valores.png";
import heroImg from "../images/hero-about.png";

function AboutUs() {
  const navigate = useNavigate(); // 👈 Hook de navegación de React Router
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ===== EFECTO DE MOUSE EN EL HERO =====
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ===== ANIMACIÓN AL SCROLL =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    valuesRef.current.forEach((value) => {
      if (value) observer.observe(value);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      valuesRef.current.forEach((value) => {
        if (value) observer.unobserve(value);
      });
    };
  }, []);

  // ===== PARALLAX EN HERO =====
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.about-hero') as HTMLElement;
      if (hero) {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== FUNCIONES DE NAVEGACIÓN =====
  const scrollToQuienesSomos = () => {
    const section = document.getElementById('quienes-somos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToServices = () => {
    // 👇 Navega a la página de servicios con React Router
    navigate('/servicios'); // Cambia la ruta según tu configuración
  };

  return (
    <section className="about-us">
      {/* ===== HERO SIN BURBUJAS ===== */}
      <div 
        className="about-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <div className="hero-badge">
            <FontAwesomeIcon icon={faStar} className="badge-icon" />
            Sobre nosotros
          </div>
          <h1>
            <span className="hero-gradient">PREVIX</span>
            <br />
            <span className="hero-highlight">Seguridad que transforma</span>
          </h1>
          <p className="hero-subtitle">
            Conoce quiénes somos y cómo transformamos la seguridad laboral en una ventaja competitiva para tu empresa.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToQuienesSomos}>
              Conoce más <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </button>
            <button className="btn-secondary" onClick={goToServices}>
              Ver servicios
            </button>
          </div>
        </div>
      </div>

      {/* ===== CARDS PRINCIPALES ===== */}
      <div className="about-cards-section">
        <div className="section-header">
          <span className="section-tag">
            <FontAwesomeIcon icon={faStar} className="tag-icon" />
            Nuestros pilares
          </span>
          <h2>CONSTRUYENDO <span>SEGURIDAD</span></h2>
          <p className="section-subtitle">
            Tres principios fundamentales que guían nuestra misión y nos impulsan a transformar la seguridad laboral.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: Quiénes somos - CON ID */}
          <div 
            id="quienes-somos"
            className="about-card card-left"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="about-card-image image-dark">
              <img src={misionImg} alt="Quiénes somos" />
              <div className="image-overlay">
                <span>01</span>
              </div>
            </div>
            <div className="about-card-content">
              <h3>Quiénes <span>somos</span></h3>
              <p>
                PREVIX SAS. es una empresa especializada en soluciones integrales de seguridad laboral, movilidad y gestión preventiva, enfocada en transformar la cultura organizacional mediante estrategias modernas y acompañamiento técnico especializado.
              </p>
              <div className="card-features">
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Innovación</span>
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Compromiso</span>
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Excelencia</span>
              </div>
            </div>
          </div>

          {/* Card 2: Enfoque - MÁS PEQUEÑA */}
          <div 
            className="about-card card-right compact-card"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="about-card-content compact-content">
              <h3>Nuestro <span>enfoque</span></h3>
              <p className="compact-text">
                Creemos que la prevención no debe verse como una obligación, sino como una herramienta estratégica para el crecimiento y sostenibilidad empresarial.
              </p>
              <div className="card-features">
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Prevención</span>
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Estrategia</span>
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Sostenibilidad</span>
              </div>
            </div>
            <div className="about-card-image image-light compact-image">
              <img src={visionImg} alt="Visión" />
              <div className="image-overlay">
                <span>02</span>
              </div>
            </div>
          </div>

          {/* Card 3: Compromiso - MÁS PEQUEÑA */}
          <div 
            className="about-card card-left compact-card"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="about-card-image image-dark compact-image">
              <img src={valoresImg} alt="Valores" />
              <div className="image-overlay">
                <span>03</span>
              </div>
            </div>
            <div className="about-card-content compact-content">
              <h3>Nuestro <span>compromiso</span></h3>
              <p className="compact-text">
                Proteger vidas, fortalecer empresas y construir organizaciones más seguras.
              </p>
              <div className="card-features">
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Protección</span>
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Fortalecimiento</span>
                <span><FontAwesomeIcon icon={faCheck} className="feature-icon" /> Seguridad</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECCIÓN DE VALORES ===== */}
      <div id="valores" className="valores-section">
        <div className="valores-header">
          <span className="section-tag">
            <FontAwesomeIcon icon={faStar} className="tag-icon" />
            Nuestra esencia
          </span>
          <h2>NUESTROS <span>VALORES</span></h2>
          <p className="section-subtitle">
            Cinco principios que nos definen y guían cada decisión que tomamos.
          </p>
        </div>

        <div className="valores-grid">
          <div 
            className="valor-item float-item"
            ref={(el) => (valuesRef.current[0] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faHandshake} className="valor-icon" />
            </div>
            <h4>Cercanía</h4>
            <p>Relaciones humanas, transparentes y construidas desde la confianza.</p>
          </div>

          <div 
            className="valor-item float-item"
            ref={(el) => (valuesRef.current[1] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faRocket} className="valor-icon" />
            </div>
            <h4>Evolución</h4>
            <p>Mejores soluciones, procesos y resultados constantemente.</p>
          </div>

          <div 
            className="valor-item float-item"
            ref={(el) => (valuesRef.current[2] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faBrain} className="valor-icon" />
            </div>
            <h4>Prevención inteligente</h4>
            <p>Nos anticipamos y transformamos desde la capacidad de prever.</p>
          </div>

          <div 
            className="valor-item float-item"
            ref={(el) => (valuesRef.current[3] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faShieldHeart} className="valor-icon" />
            </div>
            <h4>Compromiso real</h4>
            <p>Cada proyecto es parte del crecimiento de nuestros clientes.</p>
          </div>

          <div 
            className="valor-item float-item"
            ref={(el) => (valuesRef.current[4] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faHeart} className="valor-icon" />
            </div>
            <h4>Humanidad</h4>
            <p>Detrás de cada indicador hay personas que merecen regresar seguros a casa.</p>
          </div>
        </div>
      </div>

      {/* ===== BANNER DE CIERRE ===== */}
      <div id="contacto" className="about-cta">
        <div className="cta-content">
          <h3>¿Listo para transformar tu organización?</h3>
          <p>Descubre cómo PREVIX puede ayudarte a construir un entorno más seguro.</p>
          <button className="cta-button">
            Contáctanos ahora
            <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;