import { useState, useEffect, useRef } from "react";

export const ClientesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const carouselRef = useRef(null);
  const autoSlideInterval = useRef(null); // Referencia al intervalo de deslizamiento automático
  const touchStartX = useRef(0); // Para detectar el deslizamiento táctil

  const logos = [
    { image: "images/inicio/dpworld.png", alt: "DP World" },
    { image: "images/inicio/unimar.png", alt: "Unimar" },
    { image: "images/inicio/imupesa.png", alt: "Imupesa" },
    { image: "images/inicio/agrovietoria.png", alt: "Agrovietoria" },
    { image: "images/inicio/camposal.png", alt: "Camposal" },
    { image: "images/inicio/coexa.png", alt: "Coexa" },
    { image: "images/inicio/corporacion.png", alt: "Corporacion" },
    { image: "images/inicio/icofruta.png", alt: "Icofruta" },
    { image: "images/inicio/maersk2.png", alt: "Maersk" },
    { image: "images/inicio/ransa.png", alt: "Ransa" },
    { image: "images/inicio/terminalportuario.png", alt: "Terminal Portuario" },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      const newItemsPerView = window.innerWidth >= 1024 ? 3 : 1;
      setItemsPerView(newItemsPerView);

      // Reajustar el currentIndex cuando se cambia el número de items por vista
      const totalSlides = Math.ceil(logos.length / newItemsPerView);
      if (currentIndex >= totalSlides) {
        setCurrentIndex(totalSlides - 1); // Asegurarse de que currentIndex esté dentro del rango válido
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    // Inicia el deslizamiento automático al montar el componente
    autoSlideInterval.current = setInterval(handleNext, 4000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", updateItemsPerView);
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [currentIndex]);

  const totalSlides = Math.ceil(logos.length / itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // Guarda la posición inicial del toque
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX; // Posición del toque al mover
    const diff = touchStartX.current - touchEndX; // Diferencia de movimiento

    // Si el movimiento fue suficiente, cambia de slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      touchStartX.current = touchEndX; // Actualiza la posición inicial
    }
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX; // Guarda la posición inicial del mouse
  };

  const handleMouseMove = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.clientX; // Diferencia del movimiento del ratón

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      touchStartX.current = e.clientX; // Actualiza la posición inicial
    }
  };

  const handleMouseUp = () => {
    touchStartX.current = null; // Restablece la posición del ratón
  };

  return (
    <div className="w-full p-10">
      {/* Sección del título y la descripción */}
      <div className="w-full bg-white py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">PRINCIPALES CLIENTES</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Desde nuestros inicios, en JJK HOLDING S.A.C. hemos crecido y
          evolucionado, convirtiéndonos en una empresa competitiva en el mercado
          logístico. Hoy, como líderes en la prestación de servicios de calidad
          para contenedores y vehículos, nos enorgullecemos de nuestra sólida
          cartera de clientes, a quienes hemos atendido con compromiso y
          profesionalismo, consolidando relaciones de confianza año tras año.
        </p>
      </div>

      {/* Sección del carrusel */}
      <div
        ref={carouselRef}
        className="w-full py-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="relative w-full mx-auto overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${100 * totalSlides}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`flex ${
                  itemsPerView === 3 ? "gap-4" : ""
                } w-full justify-center`}
              >
                {logos
                  .slice(
                    slideIndex * itemsPerView,
                    slideIndex * itemsPerView + itemsPerView
                  )
                  .map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[calc(100%/3)] mx-2"
                    >
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="block mx-auto h-20 sm:h-24 md:h-28 lg:h-32"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/70 focus:outline-none"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/70 focus:outline-none"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};
