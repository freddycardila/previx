import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const id = hash.replace('#', '');
    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Esperamos un frame para asegurarnos de que el DOM ya está pintado
    const timeout = setTimeout(scrollToElement, 100);

    return () => clearTimeout(timeout);
  }, [hash]);
}