import misionImg from "../images/mision.png";
import visionImg from "../images/vision.png";
import valoresImg from "../images/valores.png";
import heroImg from "../images/hero-about.png"; // Imagen del hero

function AboutUs() {
  return (
    <section className="about-us">
      {/* HERO: TEXTO A LA IZQUIERDA - IMAGEN A LA DERECHA */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>SOBRE <span>NOSOTROS</span></h1>
          <p className="hero-subtitle">
            Conoce quiénes somos y cómo transformamos la seguridad laboral en una ventaja competitiva para tu empresa.
          </p>
          
        </div>
        <div className="about-hero-image">
      
        </div>
      </div>

      {/* CARDS - OCUPAN TODO EL ANCHO */}
      <div className="about-cards-section">
        <h2>NUESTROS <span>PILARES</span></h2>
        <div className="about-grid">
          
          <div className="about-card">
            <div className="about-card-image">
              <img src={misionImg} alt="Quiénes somos" />
            </div>
            <h2>Quiénes <span>somos</span></h2>
            <p>
              PREVIX SAS. es una empresa especializada en soluciones integrales de seguridad laboral, movilidad y gestión preventiva, enfocada en transformar la cultura organizacional mediante estrategias modernas y acompañamiento técnico especializado.
            </p>
          </div>

          {/* CARD 2: VISIÓN */}
          <div className="about-card">
            <div className="about-card-image">
              <img src={visionImg} alt="Visión" />
            </div>
            <h2>Nuestro <span>enfoque</span></h2>
            <p>
              Creemos que la prevención no debe verse como una obligación, sino como una herramienta estratégica para el crecimiento y sostenibilidad empresarial.
            </p>
          </div>

          {/* CARD 3: VALORES */}
          <div className="about-card">
            <div className="about-card-image">
              <img src={valoresImg} alt="Valores" />
            </div>
            <h2>Nuestro <span>compromiso</span></h2>
            <p>
              Proteger vidas, fortalecer empresas y construir organizaciones más seguras.
            </p>
          </div>
          {/* CARD 3: VALORES */}
          <div className="about-card">
            <div className="about-card-image">
              <img src={valoresImg} alt="Valores" />
            </div>
            <h2>Nuestros <span>valores</span></h2>
            <dl>
              <dt><span>Cercanía: </span></dt>
<dd>Creemos en relaciones humanas, transparentes y construidas desde la confianza.</dd>
<dt><span>Evolución: </span></dt>
<dd>Nos movemos constantemente hacia mejores soluciones, procesos y resultados.</dd>
<dt><span>Prevención inteligente: </span></dt>
<dd>No actuamos desde el miedo al riesgo, sino desde la capacidad de anticiparnos y transformar.</dd>
<dt><span>Compromiso real</span></dt>
<dd>Asumimos cada proyecto como parte del crecimiento de nuestros clientes.</dd>
<dt><span>Humanidad: </span></dt>
<dd>Detrás de cada indicador hay personas, familias y equipos que merecen regresar seguros a casa.</dd>


            </dl>
          </div>
        </div>
      </div>
        
    </section>
    
  );
}

export default AboutUs;