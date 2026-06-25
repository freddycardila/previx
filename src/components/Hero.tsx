import logoAzul from "../images/Fondo_Hero.png"; // ✅ importa la imagen
function Hero() {
  return (
    <section className="hero">
      <img src={logoAzul} alt="Logo PREVIX" /> {/* ✅ usa la variable */}
      <div className="hero-text">
        <span>Transformamos la</span>
        <h1> prevención</h1>
        <span>en resultados reales</span>
        <p>
          Soluciones integrales en <b>Seguridad Laboral, Movilidad y Gestión Empresarial</b> 
           que protegen a las personas y impulsan el crecimiento de tu organización.
        </p>
        <div className="hero-buttons">
          <button>CONOCE MÁS</button>
          <button>COTIZA AHORA</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

