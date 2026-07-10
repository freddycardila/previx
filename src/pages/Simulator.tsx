import React, { useEffect, useRef } from 'react';
import '../css/Simulator.css';
import simulatorImg from "../images/simulator.png";
import seguridad from "../images/seguridad.png";
import vial from "../images/vial.png";
import heroBackground from "../images/hero-background.jpeg";
import consultoriaImg from "../images/consultoria.png";
import { useScrollToHash } from '../hooks/useScrollToHash';

function Simulator() {
  useScrollToHash();

  const containersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );

    containersRef.current.forEach((container) => {
      if (container) observer.observe(container);
    });

    return () => {
      containersRef.current.forEach((container) => {
        if (container) observer.unobserve(container);
      });
    };
  }, []);

  return (
    <section className="simulator">
      {/* HERO */}
      <div
        className="simulator-hero"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="simulator-hero-left">
          <p className="simulator-hero-subtitle">
            Tecnología, prevención y formación para construir entornos laborales y viales más seguros.
          </p>
        </div>
        <div className="simulator-hero-right">
          <h1>SOLUCIONES EN <span>SEGURIDAD Y MOVILIDAD</span></h1>
        </div>
      </div>

      {/* ===== SECCIÓN 1: Seguridad y Salud en el Trabajo (estilo A) ===== */}
      <div id="seguridad-laboral"></div>
      <div
        className="simulator-container style-a"
        ref={(el) => (containersRef.current[0] = el)}
      >
        <div className="simulator-image">
          <img src={seguridad} alt="Seguridad laboral" />
        </div>
        <div className="simulator-content">
          <h1>SEGURIDAD Y SALUD <span>EN EL TRABAJO</span></h1>
          <p className="simulator-subtitle">
            Soluciones integrales para organizaciones más seguras.
          </p>
          <ul className="simulator-features">
            <li>Diseño e implementación SG-SST.</li>
            <li>Matrices de riesgo.</li>
            <li>Investigaciones de accidentes.</li>
            <li>Inspecciones.</li>
            <li>Auditorías.</li>
          </ul>
        </div>
      </div>

      {/* SECCIÓN 2: Simuladores de Conducción (estilo B) */}
      <div id="drive"></div>
      <div
        className="simulator-container style-b"
        ref={(el) => (containersRef.current[1] = el)}
      >
        <div className="simulator-content">
          <h1>SIMULADORES DE <span>CONDUCCIÓN</span></h1>
          <p className="simulator-subtitle">
            Entrenamos conductores en entornos seguros para prevenir incidentes antes de que ocurran.
          </p>
          <ul className="simulator-features">
            <li>Simuladores de conducción empresarial.</li>
            <li>Evaluación de hábitos de conducción.</li>
            <li>Entrenamiento preventivo.</li>
            <li>Simulación de riesgo vial.</li>
            <li>Formación experiencial.</li>
          </ul>
          <p className="simulator-subtitle">
            La simulación permite generar conciencia real y fortalecer la toma de decisiones en escenarios de riesgo.
          </p>
        </div>
        <div className="simulator-image">
          <img src={simulatorImg} alt="Simulador de conducción" />
        </div>
      </div>

      {/* SECCIÓN 3: Seguridad Vial y Movilidad (estilo A) */}
      <div
        className="simulator-container style-a"
        ref={(el) => (containersRef.current[2] = el)}
      >
        <div className="simulator-image">
          <img src={vial} alt="Seguridad vial" />
        </div>
        <div className="simulator-content">
          <h1>SEGURIDAD VIAL<span> Y MOVILIDAD</span></h1>
          <p className="simulator-subtitle">
            Cultura vial inteligente para empresas modernas.
          </p>
          <ul className="simulator-features">
            <li>PESV.</li>
            <li>Diagnóstico vial.</li>
            <li>Evaluación de conductores.</li>
            <li>Gestión de comportamiento vial.</li>
            <li>Campañas preventivas.</li>
            <li>Formación especializada.</li>
            <li>Gestión de flotas.</li>
            <li>Evaluación de conductores.</li>
            <li>Gestión de comportamiento vial.</li>
            <li>Campañas preventivas.</li>
          </ul>
          <p className="simulator-subtitle">
            Ayudamos a reducir riesgos, fortalecer la cultura vial y optimizar la movilidad empresarial.
          </p>
        </div>
      </div>

      {/* SECCIÓN 4: CONSULTORÍA Y AUDITORÍA (estilo B) */}
      <div id="cons"></div>
      <div
        className="simulator-container style-b"
        ref={(el) => (containersRef.current[3] = el)}
      >
        <div className="simulator-content">
          <h1>CONSULTORÍA Y <span>AUDITORÍA</span></h1>
          <p className="simulator-subtitle">
            Acompañamiento estratégico especializado.
          </p>
          <ul className="simulator-features">
            <li>Auditorías internas.</li>
            <li>Diagnóstico organizacional.</li>
            <li>Consultoría técnica.</li>
            <li>Mejora continua.</li>
            <li>Acompañamiento empresarial.</li>
          </ul>
          <p className="simulator-subtitle" style={{ fontStyle: 'italic', marginTop: '1rem' }}>
            "Más que cumplir una norma, ayudamos a construir organizaciones más fuertes y sostenibles."
          </p>
        </div>
        <div className="simulator-image">
          <img src={consultoriaImg} alt="Consultoría y Auditoría" />
        </div>
      </div>
    </section>
  );
}

export default Simulator;