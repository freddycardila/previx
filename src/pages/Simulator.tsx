import simulatorImg from "../images/simulator.png"; 
import seguridad from "../images/seguridad.png"; 
import vial from "../images/vial.png"; 
function Simulator() {
  return (
    <section className="simulator">
      <div className="simulator-container">
        {/* Imagen a la derecha */}
        <div className="simulator-image">
          <img src={seguridad} alt="Simulador de conducción PREVIX" />
        </div>
        {/* Texto a la izquierda */}
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
          <a href="#" className="simulator-button">CONOCE MÁS</a>
        </div>
      </div>
      <div className="simulator-container">
        
        {/* Texto a la izquierda */}
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
          <a href="#" className="simulator-button">CONOCE MÁS</a>

        </div>

        {/* Imagen a la derecha */}
        <div className="simulator-image">
          <img src={simulatorImg} alt="Simulador de conducción PREVIX" />
        </div>
      </div>
      <div className="simulator-container">
        {/* Imagen a la derecha */}
        <div className="simulator-image">
          <img src={vial} alt="Simulador de conducción PREVIX" />
        </div>
        {/* Texto a la izquierda */}
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
          <a href="#" className="simulator-button">CONOCE MÁS</a>
        </div>
      </div>
    </section>
    
  );
}
export default Simulator;