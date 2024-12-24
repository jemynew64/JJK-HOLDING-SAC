export const Contactanos = () => {
  const servicios = [
    {
      image: "images/inicio/telefono.png",
      title: "TELEFONO",
      description: (
        <>
          983 451 294
          <br />
          958 613 705
        </>
      ),
    },
    {
      image: "images/inicio/correo.png",
      title: "CORREO ELECTRONICO",
      description: "holdingjjk@gmail.com",
    },
    {
      image: "images/inicio/atencion.png",
      title: "HORARIO DE ATENCION",
      description: "9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="p-24 w-full bg-gray-100 flex flex-col justify-center items-center   relative">
      {/* Título alineado a la izquierda */}
      <div className="w-full max-w-7xl mb-8 text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contáctanos</h2>
        <hr className="w-32 border-t-5 border-green-600" />{" "}
        {/* Ajuste de longitud */}
        <br />
      </div>

      {/* Grid responsivo para las tarjetas con mayor separación */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="flex-grow bg-white border border-gray-200 rounded-lg shadow"
          >
            <br />
            <br />
            <img
              className="rounded-t-lg w-full h-24 object-contain" // Ajuste de tamaño de imagen
              src={servicio.image}
              alt={servicio.title}
            />
            <br />
            <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {servicio.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {servicio.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden sm:block  absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 lg:w-96 h-12 bg-green-400 shadow-lg"></div>
    </div>
  );
};
