export const ServiciosDestacados = () => {
  const servicios = [
    {
      image: "images/inicio/atmosferico.png",
      title: "CONTROLLED ATMOSPHERE",
      description:
        "Ofrecemos servicios de inyección de gases para mantener una atmósfera controlada en contenedores, asegurando la frescura y calidad de productos sensibles durante el transporte.",
    },
    {
      image: "images/inicio/cucaracha.png",
      title: "COLD TREATMENT",
      description:
        "Para preservar productos perecibles, manteniéndolos en temperaturas controladas desde el origen hasta el destino, cumpliendo con normativas internacionales.",
    },
    {
      image: "images/inicio/carga.png",
      title: "INSPECCION DE CONTENEDORES",
      description:
        "Realizamos inspecciones detalladas de contenedores de todo tipo, con técnicos certificados, garantizando la seguridad y calidad en cada operación.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Servicios Destacados
      </h2>

      {/* Grid responsivo para las tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="flex-grow bg-white border border-gray-200 rounded-lg shadow"
          >
            <br />
            <a href="#">
              <img
                className="rounded-t-lg w-full h-48 object-contain"
                src={servicio.image}
                alt={servicio.title}
              />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {servicio.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                {servicio.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                VER MÁS
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botón al centro debajo de las tarjetas */}
      <a
        href="#"
        className="mt-8 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-base font-medium shadow-md"
      >
        Ir a los servicios
      </a>
    </div>
  );
};
