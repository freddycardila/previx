import React, { useState, useEffect, useRef } from "react";
import "../components/Courses.css";
import heroBg from "../images/courses-hero.png";

// ===== DATOS ESTRUCTURADOS CON DESCRIPCIONES REALES =====
const coursesData = [
  {
    id: 1,
    title: "Cursos de manejo defensivo (liviano, pesado, moto, articulado)",
    description: "Técnicas avanzadas de conducción segura para todo tipo de vehículos, enfocadas en la prevención de accidentes.",
  },
  {
    id: 2,
    title: "Seguridad vial (Curso para líderes del PESV)",
    description: "Formación especializada para líderes en la implementación y gestión del Plan Estratégico de Seguridad Vial.",
  },
  {
    id: 3,
    title: "Investigación de siniestros",
    description: "Metodologías y técnicas para analizar accidentes de tránsito y determinar sus causas raíz.",
  },
  {
    id: 4,
    title: "Curso de brigadistas viales",
    description: "Capacitación para equipos de respuesta en emergencias viales, primeros auxilios y control de escenas.",
  },
  {
    id: 5,
    title: "Operación segura de montacargas",
    description: "Manejo seguro de montacargas en entornos industriales, con enfoque en prevención de volcamientos.",
  },
  {
    id: 6,
    title: "Operación segura de maquinaria pesada",
    description: "Formación para operadores de maquinaria pesada en construcción, minería y obras civiles.",
  },
  {
    id: 7,
    title: "Capacitaciones a medida",
    description: "Diseñamos formaciones personalizadas según las necesidades específicas de tu organización.",
  },
  {
    id: 8,
    title: "Normatividad legal",
    description: "Actualización y cumplimiento de normativas de seguridad vial y laboral aplicables a tu sector.",
  },
  {
    id: 9,
    title: "Actores viales",
    description: "Conciencia y responsabilidad de todos los actores en la vía: conductores, peatones y ciclistas.",
  },
  {
    id: 10,
    title: "Manejo de extintores",
    description: "Uso correcto de extintores, tipos de fuego y prevención de incendios en entornos laborales.",
  },
  {
    id: 11,
    title: "Mecánica básica",
    description: "Conocimientos esenciales para mantenimiento preventivo de vehículos y detección de fallas.",
  },
  {
    id: 12,
    title: "Capacitaciones al comité del PESV",
    description: "Formación continua para los miembros del comité de seguridad vial en gestión y seguimiento.",
  },
];

const servicesData = [
  {
    id: 1,
    title: "Simulacros de emergencia vial",
    description: "Entrenamiento práctico en respuesta a emergencias viales, con escenarios realistas y evaluación.",
  },
  {
    id: 2,
    title: "Acompañamiento a comités viales",
    description: "Asesoría y apoyo continuo a los comités de seguridad vial para fortalecer su gestión.",
  },
  {
    id: 3,
    title: "Personal In House",
    description: "Especialistas en seguridad vial disponibles para tu empresa con dedicación exclusiva.",
  },
  {
    id: 4,
    title: "Interventorías",
    description: "Supervisión y control de proyectos de seguridad vial con informes técnicos detallados.",
  },
  {
    id: 5,
    title: "Administración del Plan Estratégico de Seguridad Vial",
    description: "Gestión integral del PESV, incluyendo seguimiento, evaluación y mejora continua.",
  },
];

const SpecialCourses: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<{ title: string; description: string } | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // ===== ANIMACIÓN AL SCROLL =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // ===== MANEJAR APERTURA DE MODAL =====
  const handleOpenModal = (item: { title: string; description: string }) => {
    setIsClosing(false);
    setSelectedItem(item);
    document.body.style.overflow = "hidden"; // Bloquear scroll
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setIsClosing(false);
      document.body.style.overflow = "auto"; // Restaurar scroll
    }, 300); // Tiempo de la animación de salida
  };

  // ===== CERRAR MODAL CON ESC =====
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [selectedItem]);

  return (
    <section className="special-courses">
      {/* ===== HERO ===== */}
      <div
        className="special-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="special-hero-overlay"></div>
        <div className="special-hero-content">
          <h1>
            CURSOS Y <span>CAPACITACIONES ESPECIALES</span>
          </h1>
          <p>Formación que transforma comportamientos.</p>
        </div>
      </div>

      {/* ===== CURSOS ===== */}
      <div className="special-section">
        <h2>Cursos</h2>
        <div className="special-grid">
          {coursesData.map((course, index) => (
            <div
              key={course.id}
              className="special-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button
                className="special-button"
                onClick={() => handleOpenModal(course)}
              >
                Ver más +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICIOS ESPECIALES ===== */}
      <div className="special-section">
        <h2>Servicios especiales</h2>
        <div className="special-grid">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="special-card servicio"
              ref={(el) => (cardsRef.current[coursesData.length + index] = el)}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="special-button"
                onClick={() => handleOpenModal(service)}
              >
                Ver más +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL CON SLIDE DESDE ABAJO ===== */}
      {selectedItem && (
        <div 
          className={`modal-overlay ${isClosing ? 'closing' : ''}`} 
          onClick={handleCloseModal}
        >
          <div 
            className={`modal-content ${isClosing ? 'closing' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.description}</p>
            <div className="modal-details">
              <p><strong>Duración:</strong> A consultar según necesidad</p>
              <p><strong>Modalidad:</strong> Presencial o virtual</p>
              <p><strong>Certificación:</strong> Incluye certificado de participación</p>
            </div>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SpecialCourses;