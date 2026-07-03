import React, { useEffect, useRef } from 'react';
import '../components/AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHandshake, 
  faRocket, 
  faBrain, 
  faShieldHeart, 
  faHeart,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import misionImg from "../images/mision.png";
import visionImg from "../images/vision.png";
import valoresImg from "../images/valores.png";
import heroImg from "../images/hero-about.png";

function AboutUs() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animación al hacer scroll
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

  // Efecto parallax en el hero
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.about-hero') as HTMLElement;
      if (hero) {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById('valores');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-us">
      {/* ===== HERO CON PARALLAX ===== */}
      <div 
        className="about-hero"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <div className="hero-badge">✦ Sobre nosotros</div>
          <h1>
            <span className="hero-gradient">PREVIX</span>
            <br />
            <span className="hero-highlight">Seguridad que transforma</span>
          </h1>
          <p className="hero-subtitle">
            Conoce quiénes somos y cómo transformamos la seguridad laboral en una ventaja competitiva para tu empresa.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToSection}>
              Conoce más <FontAwesomeIcon icon={faArrowRight} className="btn-icon" />
            </button>
            <button className="btn-secondary">
              Ver servicios
            </button>
          </div>
        </div>
      </div>

      {/* ===== CARDS PRINCIPALES CON IMÁGENES ALTERNAS ===== */}
      <div className="about-cards-section">
        <div className="section-header">
          <span className="section-tag">✦ Nuestros pilares</span>
          <h2>CONSTRUYENDO <span>SEGURIDAD</span></h2>
          <p className="section-subtitle">
            Tres principios fundamentales que guían nuestra misión y nos impulsan a transformar la seguridad laboral.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: Quiénes somos - Imagen a la IZQUIERDA (fondo azul oscuro) */}
          <div 
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
                <span>✓ Innovación</span>
                <span>✓ Compromiso</span>
                <span>✓ Excelencia</span>
              </div>
            </div>
          </div>

          {/* Card 2: Visión - Imagen a la DERECHA (fondo azul claro) */}
          <div 
            className="about-card card-right"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="about-card-content">
              <h3>Nuestro <span>enfoque</span></h3>
              <p>
                Creemos que la prevención no debe verse como una obligación, sino como una herramienta estratégica para el crecimiento y sostenibilidad empresarial.
              </p>
              <div className="card-features">
                <span>✓ Prevención</span>
                <span>✓ Estrategia</span>
                <span>✓ Sostenibilidad</span>
              </div>
            </div>
            <div className="about-card-image image-light">
              <img src={visionImg} alt="Visión" />
              <div className="image-overlay">
                <span>02</span>
              </div>
            </div>
          </div>

          {/* Card 3: Compromiso - Imagen a la IZQUIERDA (fondo azul oscuro) */}
          <div 
            className="about-card card-left"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="about-card-image image-dark">
              <img src={valoresImg} alt="Valores" />
              <div className="image-overlay">
                <span>03</span>
              </div>
            </div>
            <div className="about-card-content">
              <h3>Nuestro <span>compromiso</span></h3>
              <p>
                Proteger vidas, fortalecer empresas y construir organizaciones más seguras.
              </p>
              <div className="card-features">
                <span>✓ Protección</span>
                <span>✓ Fortalecimiento</span>
                <span>✓ Seguridad</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SECCIÓN DE VALORES ===== */}
      <div id="valores" className="valores-section">
        <div className="valores-header">
          <span className="section-tag">✦ Nuestra esencia</span>
          <h2>NUESTROS <span>VALORES</span></h2>
          <p className="section-subtitle">
            Cinco principios que nos definen y guían cada decisión que tomamos.
          </p>
        </div>

        <div className="valores-grid">
          <div 
            className="valor-item"
            ref={(el) => (valuesRef.current[0] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faHandshake} className="valor-icon" />
            </div>
            <h4>Cercanía</h4>
            <p>Relaciones humanas, transparentes y construidas desde la confianza.</p>
          </div>

          <div 
            className="valor-item"
            ref={(el) => (valuesRef.current[1] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faRocket} className="valor-icon" />
            </div>
            <h4>Evolución</h4>
            <p>Mejores soluciones, procesos y resultados constantemente.</p>
          </div>

          <div 
            className="valor-item"
            ref={(el) => (valuesRef.current[2] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faBrain} className="valor-icon" />
            </div>
            <h4>Prevención inteligente</h4>
            <p>Nos anticipamos y transformamos desde la capacidad de prever.</p>
          </div>

          <div 
            className="valor-item"
            ref={(el) => (valuesRef.current[3] = el)}
          >
            <div className="valor-icon-wrapper">
              <FontAwesomeIcon icon={faShieldHeart} className="valor-icon" />
            </div>
            <h4>Compromiso real</h4>
            <p>Cada proyecto es parte del crecimiento de nuestros clientes.</p>
          </div>

          <div 
            className="valor-item"
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
      <div className="about-cta">
        <div className="cta-content">
          <h3>¿Listo para transformar tu organización?</h3>
          <p>Descubre cómo PREVIX puede ayudarte a construir un entorno más seguro.</p>
          <button className="cta-button">
            Contáctanos ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;