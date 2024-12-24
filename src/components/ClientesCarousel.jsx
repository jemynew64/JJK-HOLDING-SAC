import { useState, useEffect } from "react";

export const ClientesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

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
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

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
      <div className="w-full py-8">
        <div className="relative w-full mx-auto overflow-hidden rounded-lg ">
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
