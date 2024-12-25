import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "images/inicio/carusel1.jpg",
      title: "JJK HOLDING S.A.C.",
      description:
        "Con más de 10 años de experiencia en el mercado peruano, JJK HOLDING S.A.C. ofrece soluciones logísticas integrales para contenedores y vehículos, adaptadas a las necesidades de clientes de diversos sectores, líneas navieras, BCO, y agentes de carga.",
      buttonText: "Ver más",
      buttonLink: "/servicios",
    },
    {
      image: "images/inicio/carusel2.jpg",
      title: "Innovación y Tecnología",
      description:
        "Utilizamos tecnología avanzada como GPS Tracking y aplicaciones en la nube para monitorear y gestionar nuestros servicios en tiempo real, ofreciendo a nuestros clientes información precisa y accesible desde cualquier lugar.",
      buttonText: "Ver más",
      buttonLink: "/servicios",
    },
    {
      image: "images/inicio/carusel3.jpg",
      title: "Compromiso con la Calidad",
      description:
        "Contamos con certificaciones que avalan nuestra excelencia y nos encontramos en constante mejora, trabajando para obtener reconocimientos como la certificación BASC, que refuerzan nuestro liderazgo en el sector logístico.",
      buttonText: "Ver más",
      buttonLink: "/servicios",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Cambia al siguiente slide cada 5 segundos (5000ms)
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [currentIndex]); // La dependencia es currentIndex para asegurarse de que el siguiente se active correctamente

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative w-full h-[300px] sm:h-96 lg:h-[650px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item={index === currentIndex}
          >
            <img
              src={slide.image}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white bg-gradient-to-t from-black via-transparent to-transparent">
              {/* Title and description */}
              <div className="text-center px-6 md:px-12">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 text-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base lg:text-xl line-clamp-4 mb-6 text-shadow-md">
                  {slide.description}
                </p>
              </div>
              {/* Central button */}
              <div className="flex justify-center w-full">
                <Link
                  to={slide.buttonLink} // Usamos 'to' en lugar de 'href'
                  className="px-6 py-2 bg-custom-green-2 text-white rounded-full hover:bg-blue-700 transition"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-custom-green-2"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
