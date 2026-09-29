// src/pages/Advance.tsx
import React, { useEffect, useRef } from "react";
import "../css/Advance.css";
import advanceBg from "../images/advance.png";
import laptopMockup from "../images/mockup-laptop.png";
import phoneMockup from "../images/mockup-phone.png";
import { useScrollToHash } from "../hooks/useScrollToHash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCogs,
  faShieldAlt,
  faBoxes,
  faChartLine,
  faUsers,
  faTruck,
  faIndustry,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

// ===== DATOS DE LAS CARACTERÍSTICAS =====
const featuresData = [
  {
    id: 1,
    title: "Gestión de Activos",
    description: "Control total de activos y maquinaria pesada.",
    icon: faClipboardList,
  },
  {
    id: 2,
    title: "Mantenimiento Inteligente",
    description: "Planes preventivos y correctivos automatizados.",
    icon: faCogs,
  },
  {
    id: 3,
    title: "Seguridad Vial y PESV",
    description: "Planes estratégicos de seguridad vial (PESV).",
    icon: faShieldAlt,
  },
  {
    id: 4,
    title: "Inventarios y Compras",
    description: "Control de stock, bodegas y procesos de compra.",
    icon: faBoxes,
  },
  {
    id: 5,
    title: "Indicadores Gerenciales",
    description: "KPIs y tableros de control en tiempo real.",
    icon: faChartLine,
  },
  {
    id: 6,
    title: "Gestión del Talento Humano",
    description: "Rutas, horarios y desempeño de conductores.",
    icon: faUsers,
  },
];

const Advance: React.FC = () => {
  useScrollToHash();

  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="advance-section">

      {/* ===== HERO PRINCIPAL ===== */}
      <div
        className="advance-hero"
        style={{
          backgroundImage: `url(${advanceBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="advance-hero-overlay"></div>

        {/* Partículas decorativas */}
        <div className="advance-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <div className="advance-hero-content">

          {/* Columna Izquierda: Texto y Características */}
          <div className="advance-text-column">
            <div className="advance-badge">
              <FontAwesomeIcon icon={faCheckCircle} />
              Plataforma Integral
            </div>

            <h1 className="advance-title">
              Admini<span>stremos</span>
            </h1>

            <p className="advance-subtitle">
              Plataforma integral de gestión de activos y seguridad vial.
            </p>
            <p className="advance-slogan">
              Más control | Menos riesgos | Mejores resultados
            </p>

            {/* Grid de características */}
            <div className="advance-features-grid">
              {featuresData.map((feature, index) => (
                <div
                  key={feature.id}
                  className="advance-feature-item"
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <div className="advance-feature-icon">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <div className="advance-feature-info">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón CTA */}
            <button className="advance-cta-button">
              Solicitar demo
              <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
            </button>
          </div>

          {/* Columna Derecha: Mockups */}
          <div className="advance-visual-column">
            <div className="advance-mockup-container">
              <div className="mockup-glow"></div>
              <img src={laptopMockup} alt="Software Administremos en Laptop" className="advance-mockup-laptop" />
              <img src={phoneMockup} alt="App Móvil Administremos" className="advance-mockup-phone" />
            </div>
          </div>

        </div>

        {/* Indicador de scroll */}
        <div className="advance-scroll-indicator">
          <span>Desplázate</span>
          <div className="scroll-line"></div>
        </div>
      </div>

      {/* ===== SECCIÓN ALIADOS TECNOLÓGICOS ===== */}
      <div className="advance-allies-section">
        <p className="advance-allies-title">
          Aliados tecnológicos oficiales de la superintendencia de transporte
        </p>

        <div className="advance-allies-logos">
          <div className="advance-allie-item">
            <span className="advance-allie-logo">
              <FontAwesomeIcon icon={faTruck} />
            </span>
            <span>SuperTransporte</span>
          </div>

          <div className="advance-allie-item">
            <span className="advance-allie-logo">
              <FontAwesomeIcon icon={faIndustry} />
            </span>
            <span>SuperMaquinaria</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Advance;