export const Controladas = () => {
  const servicios = [
    {
      image: "images/contactanos/fonofijo.png",
      title: "TELEFONO",
      description: "+51 958 613 705",
    },
    {
      image: "images/contactanos/fono.png",
      title: "TELÉFONO: ",
      description: "983 451 294",
    },
    {
      image: "images/contactanos/correu.png",
      title: "CORREO: ",
      description: "holdingjjk@gmail.com",
    },
    {
      image: "images/contactanos/ubi.png",
      title: "UBICACIÓN:",
      description:
        "Calle olivos mz P Lote 18 - ATE, 2do piso, LIMA, Lima 15494, PE",
    },
  ];

  return (
    <div className=" w-full bg-gray-100 flex flex-col justify-center items-center  relative p-10">
      {/* Grid responsivo para las tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full max-w-4xl">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="flex items-center bg-white border border-gray-200 rounded-lg shadow p-5"
          >
            {/* Contenedor de imagen ajustado */}
            <div className="flex-shrink-0 w-24 h-24 flex justify-center items-center border-r-2 border-[#62A965]">
              <img
                className="max-w-full max-h-full"
                src={servicio.image}
                alt={servicio.title}
              />
            </div>
            {/* Texto a la derecha */}
            <div className="ml-5">
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
    </div>
  );
};
