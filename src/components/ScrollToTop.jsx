import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este componente hace scroll hacia el inicio con una animación suave cada vez que cambia la ruta
export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al principio de la página con animación suave
    window.scrollTo({
      top: 0, // Desplazamiento hacia la parte superior
      left: 0, // No hay desplazamiento horizontal
      behavior: "smooth", // Esto hace que el scroll sea suave
    });
  }, [location]); // Este efecto se ejecuta cuando cambia la ruta

  return null; // Este componente no renderiza nada
};
