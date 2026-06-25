import logoAzul from "../images/Porque.png";
import aliado1 from "../images/aliado1.png";
import aliado2 from "../images/aliado2.png";
import aliado3 from "../images/aliado3.png";
import aliado4 from "../images/aliado4.png";
import { FaArrowsToDot } from 'react-icons/fa6';
import { useState } from "react";

function About() {
  const aliados = [aliado1, aliado2, aliado3, aliado4];
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % aliados.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + aliados.length) % aliados.length);
  };

  return (
    <section className="section">
      <div className="section-container">
        
        {/* LADO IZQUIERDO: IMAGEN + TEXTO ENCIMA */}
        <div className="section-left">
          <div className="section-image-wrapper">
            <img src={logoAzul} alt="Logo PREVIX" className="section-image" />
            <div className="section-image-text">
              <h1>POR QUÉ <span>PREVIX</span></h1>
              <p className="section-subtitle">
                No solo cumplimos con la norma, <br />transformamos la prevención en<br /> una ventaja competitiva.
              </p>
              <ul className="section-features">
                <li>Enfoque humano y estratégico</li>
                <li>Tecnología e innovación</li>
                <li>Experiencia y metodologías propios</li>
                <li>Resultados medibles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: PROPÓSITO ARRIBA + CLIENTES ABAJO */}
        <div className="section-right">
          <div className="section-purpose">
            <div className="purpose-header">
              <FaArrowsToDot className="purpose-icon-large" />
              <h1>NUESTRO <span>PROPÓSITO</span></h1>
            </div>
            <p>
              Salvar vidas y transformar organizaciones a través de la prevención inteligente y la movilidad responsable.
            </p>
            <a href="#">CONOCE MÁS SOBRE NOSOTROS →</a>
          </div>

          <div className="section-allies">
            <h2>CLIENTES QUE CONFIAN</h2>
            <div className="section-slider">
              <button onClick={anterior}>&lt;</button>
              <div className="section-slider-images">
                <img src={aliados[index]} alt={`Aliado ${index + 1}`} className="section-slider-image" />
                <img src={aliados[(index + 1) % aliados.length]} alt={`Aliado ${index + 2}`} className="section-slider-image" />
                <img src={aliados[(index + 2) % aliados.length]} alt={`Aliado ${index + 3}`} className="section-slider-image" />
              </div>
              <button onClick={siguiente}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;