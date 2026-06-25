import { FaCog, FaBuilding, FaUsers, FaShieldAlt } from 'react-icons/fa';

function Stats() {
  return (
    <section className="stats">
      <div className="stat-item">
        <div className="stat-icon">
          <FaCog />
        </div>
        <div className="stat-text">
          <p className="stat-number">+15</p>
          <p className="stat-label">AÑOS DE EXPERIENCIA</p>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon">
          <FaBuilding />
        </div>
        <div className="stat-text">
          <p className="stat-number">+500</p>
          <p className="stat-label">EMPRESAS ACOMPAÑADAS</p>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon">
          <FaUsers />
        </div>
        <div className="stat-text">
          <p className="stat-number">+1M</p>
          <p className="stat-label">PERSONAS IMPACTADAS</p>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon">
          <FaShieldAlt />
        </div>
        <div className="stat-text">
          <p className="stat-number-white">COBERTURA</p> {/* Blanco */}
          <p className="stat-label">NACIONAL</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;