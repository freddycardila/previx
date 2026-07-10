  import { FaHardHat, FaGraduationCap, FaCar, FaCertificate, FaAddressCard, FaThermometerEmpty, FaWatchmanMonitoring, FaTrophy, FaCloudUploadAlt, FaVrCardboard, FaAddressBook } from 'react-icons/fa';
  import { useNavigate } from 'react-router-dom';

  function Solutions() {
    const navigate = useNavigate();

    const goToSimulator = () => {
      navigate('/servicios'); // Redirige a la página Simulator
    };
    const goToSeguridadLaboral = () => {
      navigate('/servicios#seguridad-laboral');
    };
    const goToCursos = () => {
      navigate('/cursos#cursos');
    };
    const goToDrive = () => {
      navigate('/servicios#drive');
    };
    const goToEspeciales = () => {
      navigate('/cursos#especiales');
    };
    const goToCons = () => {
      navigate('/servicios#cons');
    };
    return (
      <section className="solutions">
        <h1>NUESTRAS <span>SOLUCIONES</span></h1>
        
        <div className="solutions-grid">
          <div className="solution-card">
            <FaHardHat className="solution-icon" />
            <h2>SEGURIDAD LABORAL</h2>
            <ul>
              <li>
                <strong>Movilidad Empresarial</strong>
                <p>Desafíos e implementos PESV que salvan vidas en cada trayecto.</p>
                <a href="seguridad-laboral" onClick={(e) => {
                  e.preventDefault();
                  goToSeguridadLaboral();
                }}>Ver más →</a>
              </li>
            </ul>
          </div>

          <div className="solution-card">
            <FaGraduationCap className="solution-icon" />
            <h2>CAPACITACIÓN Y FORMACIÓN</h2>
            <ul>
              <li>
                <p>Programas de alto impacto que cambian comportamientos y fortalece culturas.</p>
                <a href="seguridad-laboral" onClick={(e) => {
                  e.preventDefault();
                  goToCursos();
                }}>Ver más →</a>
              </li>
            </ul>
          </div>

          <div className="solution-card">
            <FaCar className="solution-icon" />
            <h2>SIMULADORES DE CONDUCCIÓN</h2>
            <ul>
              <li>
                <p>Entrenamiento experiencial para conductores más competentes y seguros.</p>
                <a href="seguridad-laboral" onClick={(e) => {
                  e.preventDefault();
                  goToDrive();
                }}>Ver más →</a>
              </li>
            </ul>
          </div>

          <div className="solution-card">
            <FaTrophy className="solution-icon" />
            <h2>SERVICIOS ESPECIALES</h2>
            <ul>
              <li>
                <p>Formaciones certificadas en temas críticos para tu organización.</p>
                <a href="seguridad-laboral" onClick={(e) => {
                  e.preventDefault();
                  goToEspeciales();
                }}>Ver más →</a>
              </li>
            </ul>
          </div>

          <div className="solution-card">
            <FaAddressBook className="solution-icon" />
            <h2>CONSULTORÍA</h2>
            <ul>
              <li>
                <p>Innovación y datos para tus mejores decisiones y medios riesgos.</p>
                <a href="seguridad-laboral" onClick={(e) => {
                  e.preventDefault();
                  goToCons();
                }}>Ver más →</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="solutions-button-container">
          <button className="solutions-button" onClick={goToSimulator}>
            VER TODAS LAS SOLUCIONES
          </button>
        </div>
      </section>
    );
  }

  export default Solutions;