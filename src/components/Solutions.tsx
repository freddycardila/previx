import { FaHardHat, FaGraduationCap, FaCar, FaCertificate, FaAddressCard } from 'react-icons/fa';

function Solutions() {
  return (
    <section className="solutions">
      <h1># NUESTRAS SOLUCIONES</h1>
      
      <div className="solutions-grid">
        <div className="solution-card">
          <FaHardHat className="solution-icon" />
          <h2>SEGURIDAD LABORAL</h2>
          <ul>
            <li>
              <strong>Movilidad Empresarial</strong>
              <p>Desafíos e implementos PESW que salvan vidas en cada trayecto.</p>
              <a href="#">Ver más →</a>
            </li>
          </ul>
        </div>

        <div className="solution-card">
          <FaGraduationCap className="solution-icon" />
          <h2>CAPACITACIÓN Y FORMACIÓN</h2>
          <ul>
            <li>
              <p>Programas de alto impacto que cambian comportamientos y fortalece culturas.</p>
              <a href="#">Ver más →</a>
            </li>
          </ul>
        </div>

        <div className="solution-card">
          <FaCar className="solution-icon" />
          <h2>SIMULADORES DE CONDUCCIÓN</h2>
          <ul>
            <li>
              <p>Entrenamiento experiencial para conductores más competentes y seguros.</p>
              <a href="#">Ver más →</a>
            </li>
          </ul>
        </div>

        <div className="solution-card">
          <FaCertificate className="solution-icon" />
          <h2>CURSOS ESPECIALES</h2>
          <ul>
            <li>
              <p>Formaciones certificadas en temas críticos para tu organización.</p>
              <a href="#">Ver más →</a>
            </li>
          </ul>
        </div>

        <div className="solution-card">
          <FaAddressCard className="solution-icon" /> {/* ✅ Corregido */}
          <h2>GESTIÓN TECNOLÓGICA</h2>
          <ul>
            <li>
              <p>Innovación y datos para tus mejores decisiones y medios riesgos.</p>
              <a href="#">Ver más →</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="solutions-button-container">
  <button className="solutions-button">VER TODAS LAS SOLUCIONES</button>
</div>
    </section>
  );
}

export default Solutions;