// src/components/Cookies/CookieBanner.tsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCookieBite,
  faCheck,
  faXmark,
  faCog,
  faShieldAlt,
  faChartLine,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';
import '../css/CookieBanner.css';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre activas
    analytics: false,
    marketing: false,
  });

  // Verificar si ya aceptó las cookies
  useEffect(() => {
    const consent = localStorage.getItem('previx-cookie-consent');
    if (!consent) {
      // Mostrar el banner después de 1.5 segundos
      setTimeout(() => setShowBanner(true), 1500);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  // Guardar preferencias
  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('previx-cookie-consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowConfig(false);
  };

  // Aceptar todas
  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  // Rechazar todas (excepto las necesarias)
  const rejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  // Guardar configuración personalizada
  const saveCustom = () => {
    savePreferences(preferences);
  };

  // Toggle de preferencia
  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // No se puede desactivar
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* ===== BANNER PRINCIPAL ===== */}
      {showBanner && !showConfig && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <div className="cookie-icon">
              <FontAwesomeIcon icon={faCookieBite} />
            </div>

            <div className="cookie-text">
              <h3>🍪 Valoramos tu privacidad</h3>
              <p>
                En <strong>PREVIX</strong> utilizamos cookies para mejorar tu experiencia,
                analizar el tráfico y personalizar contenido. Puedes aceptar todas,
                rechazarlas o configurar tus preferencias.
              </p>
            </div>

            <div className="cookie-buttons">
              <button className="cookie-btn configure" onClick={() => setShowConfig(true)}>
                <FontAwesomeIcon icon={faCog} />
                Configurar
              </button>
              <button className="cookie-btn reject" onClick={rejectAll}>
                Rechazar
              </button>
              <button className="cookie-btn accept" onClick={acceptAll}>
                <FontAwesomeIcon icon={faCheck} />
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL DE CONFIGURACIÓN ===== */}
      {showConfig && (
        <div className="cookie-modal-overlay" onClick={() => setShowConfig(false)}>
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <h2>
                <FontAwesomeIcon icon={faCookieBite} />
                Configuración de Cookies
              </h2>
              <button className="cookie-modal-close" onClick={() => setShowConfig(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="cookie-modal-body">
              <p className="cookie-modal-intro">
                Gestiona tus preferencias de cookies. Ten en cuenta que las cookies
                necesarias no se pueden desactivar porque son esenciales para el
                funcionamiento del sitio.
              </p>

              {/* Cookie necesarias */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-icon necessary">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                  <div className="cookie-option-info">
                    <h4>
                      Cookies Necesarias
                      <span className="cookie-tag-required">Siempre activas</span>
                    </h4>
                    <p>
                      Son esenciales para el funcionamiento básico del sitio web,
                      como la navegación y el acceso a áreas seguras.
                    </p>
                  </div>
                  <div className="cookie-toggle disabled">
                    <span className="cookie-toggle-slider active"></span>
                  </div>
                </div>
              </div>

              {/* Cookies analíticas */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-icon analytics">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <div className="cookie-option-info">
                    <h4>Cookies Analíticas</h4>
                    <p>
                      Nos ayudan a entender cómo los visitantes interactúan con el
                      sitio web, recopilando información de forma anónima.
                    </p>
                  </div>
                  <div
                    className={`cookie-toggle ${preferences.analytics ? 'active' : ''}`}
                    onClick={() => togglePreference('analytics')}
                  >
                    <span className="cookie-toggle-slider"></span>
                  </div>
                </div>
              </div>

              {/* Cookies de marketing */}
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-icon marketing">
                    <FontAwesomeIcon icon={faBullseye} />
                  </div>
                  <div className="cookie-option-info">
                    <h4>Cookies de Marketing</h4>
                    <p>
                      Se utilizan para mostrar anuncios relevantes y medir la
                      efectividad de nuestras campañas publicitarias.
                    </p>
                  </div>
                  <div
                    className={`cookie-toggle ${preferences.marketing ? 'active' : ''}`}
                    onClick={() => togglePreference('marketing')}
                  >
                    <span className="cookie-toggle-slider"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button className="cookie-btn reject" onClick={rejectAll}>
                Rechazar todas
              </button>
              <button className="cookie-btn save" onClick={saveCustom}>
                <FontAwesomeIcon icon={faCheck} />
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== BOTÓN FLOTANTE PARA REABRIR CONFIGURACIÓN ===== */}
      {!showBanner && (
        <button
          className="cookie-float-button"
          onClick={() => {
            setShowConfig(true);
            setShowBanner(true);
          }}
          title="Configuración de cookies"
          aria-label="Configuración de cookies"
        >
          <FontAwesomeIcon icon={faCookieBite} />
        </button>
      )}
    </>
  );
};

export default CookieBanner;