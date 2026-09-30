import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // 👈 SOLO marcas
import { 
  faXmark, 
  faCommentDots, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons'; // 👈 Sólidos aquí
import '../css/WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  botName?: string;
  botMessage?: string;
  showAfter?: number; // milisegundos
  position?: 'bottom-right' | 'bottom-left';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '573027521827',
  message = 'Hola, me gustaría recibir más información sobre los servicios de PREVIX.',
  botName = 'Equipo PREVIX',
  botMessage = '¡Hola! 👋 ¿En qué podemos ayudarte hoy?',
  showAfter = 3000,
  position = 'bottom-right',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Mostrar el botón después de X segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar notificación después de 2 segundos más
      setTimeout(() => {
        setShowNotification(true);
        // Ocultar notificación después de 8 segundos
        setTimeout(() => setShowNotification(false), 8000);
      }, 2000);
    }, showAfter);

    return () => clearTimeout(timer);
  }, [showAfter]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  const handleOpenChat = () => {
    setShowChat(true);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1500);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const positionClass = position === 'bottom-left' ? 'wa-position-left' : 'wa-position-right';

  return (
    <>
      {/* ===== BOTÓN PRINCIPAL FLOTANTE ===== */}
      <div className={`wa-container ${positionClass} ${isVisible ? 'wa-visible' : ''}`}>

        {/* Tooltip de notificación */}
        {showNotification && !showChat && (
          <div className="wa-notification">
            <div className="wa-notification-header">
              <div className="wa-bot-avatar">
                <FontAwesomeIcon icon={faCommentDots} />
              </div>
              <div className="wa-notification-info">
                <span className="wa-bot-name">{botName}</span>
                <span className="wa-online-status">
                  <span className="wa-online-dot"></span> En línea
                </span>
              </div>
              <button
                className="wa-notification-close"
                onClick={() => setShowNotification(false)}
                aria-label="Cerrar notificación"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <p className="wa-notification-message">{botMessage}</p>
          </div>
        )}

        {/* Botón flotante */}
        <button
          className="wa-button"
          onClick={handleOpenChat}
          aria-label="Contactar por WhatsApp"
        >
          {/* Anillos de pulso */}
          <span className="wa-pulse-ring wa-pulse-1"></span>
          <span className="wa-pulse-ring wa-pulse-2"></span>
          <span className="wa-pulse-ring wa-pulse-3"></span>

          {/* Ícono */}
          <FontAwesomeIcon icon={faWhatsapp} className="wa-icon" />

          {/* Badge de notificación */}
          <span className="wa-badge">1</span>

          {/* Tooltip al hover */}
          <span className="wa-tooltip">¿Necesitas ayuda? 💬</span>
        </button>
      </div>

      {/* ===== CHAT POPUP ===== */}
      {showChat && (
        <div className={`wa-chat-popup ${positionClass}`}>
          <div className="wa-chat-header">
            <div className="wa-chat-header-info">
              <div className="wa-chat-avatar">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="wa-chat-online"></span>
              </div>
              <div>
                <h4>{botName}</h4>
                <p>En línea</p>
              </div>
            </div>
            <button
              className="wa-chat-close"
              onClick={handleCloseChat}
              aria-label="Cerrar chat"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="wa-chat-body">
            <div className="wa-chat-message wa-chat-message-bot">
              <p>{botMessage}</p>
              <span className="wa-chat-time">
                {new Date().toLocaleTimeString('es-CO', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>

            {isTyping && (
              <div className="wa-chat-message wa-chat-message-bot wa-typing">
                <span className="wa-typing-dot"></span>
                <span className="wa-typing-dot"></span>
                <span className="wa-typing-dot"></span>
              </div>
            )}
          </div>

          <div className="wa-chat-footer">
            <button className="wa-chat-send" onClick={handleWhatsAppClick}>
              <FontAwesomeIcon icon={faPaperPlane} />
              Iniciar conversación
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;