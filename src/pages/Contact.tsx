import React from 'react';
import '../components/Contact.css';
// Importamos la imagen desde la carpeta images
import contactoImg from '../images/Contacto.png';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        {/* Contenedor de dos columnas: imagen a la izquierda, contenido a la derecha */}
        <div className="contact-wrapper">
          {/* Columna Izquierda: Imagen */}
          <div className="contact-image">
            <img src={contactoImg} alt="Contacto PREVIX" />
          </div>

          {/* Columna Derecha: Todo el contenido */}
          <div className="contact-content">
            {/* Encabezado */}
            <div className="contact-header">
              <h2>CONTACTO</h2>
              <p>¿Listo para transformar la seguridad de tu empresa? Escríbenos y te asesoramos.</p>
            </div>

            {/* Grid interno: Información + Formulario */}
            <div className="contact-grid">
              {/* Información de contacto */}
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h4>Teléfono</h4>
                    <p>+57 300 123 4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Correo electrónico</h4>
                    <p>info@previx.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fab fa-whatsapp"></i>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+57 300 123 4567</p>
                  </div>
                </div>

                {/* Botón de WhatsApp directo */}
                <div className="contact-whatsapp">
                  <a
                    href="https://wa.me/573001234567?text=Hola%20PREVIX%2C%20necesito%20informaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <i className="fab fa-whatsapp"></i> Escríbenos por WhatsApp
                  </a>
                </div>

                {/* Redes Sociales */}
                <div className="contact-social">
                  <h4>Redes Sociales</h4>
                  <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaTiktok />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario rápido */}
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Nombre completo" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Correo electrónico" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Mensaje" rows={5} required></textarea>
                  </div>
                  <button type="submit" className="btn-submit">Enviar mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;