import { useLocation, Link } from "react-router-dom";

export const ExtraServicios = () => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    return <div>Error: No se proporcionó información del servicio.</div>;
  }

  const { backgroundImage, title, description, benefits, images } = state;

  return (
    <>
      {/* Contenedor principal con fondo dinámico y flexbox */}
      <div
        className="w-full flex flex-col justify-center items-center py-40 px-8 sm:px-8 md:px-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Botón para volver */}
        <div className="w-full flex justify-center md:justify-start mb-8">
          <Link to="/servicios">
            <button className="p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition sm:w-auto">
              Volver
            </button>
          </Link>
        </div>

        {/* Contenedor de texto con fondo semitransparente */}
        <div className="bg-white bg-opacity-80 w-full max-w-4xl p-6 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-6">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>

      {/* Sección de beneficios clave */}
      <div className="w-full flex flex-col justify-center items-center py-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8">
          Beneficios Clave
        </h3>

        {/* Lista de beneficios dinámica */}
        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs text-center"
            >
              <p className="text-lg font-medium text-gray-700">
                {benefit.title}
              </p>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de imágenes dinámica */}
      <div className="flex justify-center gap-8 py-12">
        {/* Contenedor envolvente para hacer las imágenes responsivas */}
        <div className="flex gap-8 w-full max-w-4xl justify-center flex-col sm:flex-row px-4 sm:px-0">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/3">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
