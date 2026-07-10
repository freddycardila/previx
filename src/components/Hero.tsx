import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Hero() {
  const navigate = useNavigate();

  // ===== FUNCIONES DE NAVEGACIÓN =====
  const goToCourses = () => {
    navigate('/cursos'); // Cambia la ruta según tu configuración
  };

  const goToContact = () => {
    navigate('/contacto'); // Cambia la ruta según tu configuración
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <span>Transformamos la</span>
        <h1> prevención</h1>
        <span>en resultados reales</span>
        <p>
          Soluciones integrales en <b>Seguridad Laboral, Movilidad y Gestión Empresarial</b> 
          que protegen a las personas y impulsan el crecimiento de tu organización.
        </p>
        <div className="hero-buttons">
          <button onClick={goToCourses}>CONOCE MÁS</button>
          <button onClick={goToContact}>COTIZA AHORA</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;