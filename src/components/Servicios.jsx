export const Servicios = () => {
  const servicios = [
    {
      image: "images/servicios/Cold-Treatment.png",
      alt: "Cold Treatment",
      title: "Cold Treatment",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/colocar.png",
      alt: "Colocación de cortinas y filtros",
      title: "Colocación de cortinas y filtros",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/Controlled.png",
      alt: "Controlled atmosphere",
      title: "Controlled atmosphere",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/forradores.png",
      alt: "Forrado de contenedores",
      title: "Forrado de contenedores",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/inspeccion.png",
      alt: "Inspección de contenedores",
      title: "Inspección de contenedores",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/lavador.png",
      alt: "Lavado de contenedores",
      title: "Lavado de contenedores",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/PTIreparaciones.png",
      alt: "PTI y Reparación de Máquinas",
      title: "PTI y Reparación de Máquinas",
      link: "/servicios/cold-treatment",
    },
    {
      image: "images/servicios/reparaciones.png",
      alt: "Reparación de Contenedores",
      title: "Reparación de Contenedores",
      link: "/servicios/cold-treatment",
    },
  ];

  return (
    <>
      {/* Sección de encabezado */}
      <div
        className="bg-custom-green-4 text-white text-center relative overflow-hidden"
        style={{
          clipPath: "ellipse(100% 80% at 50% 10%)",
        }}
      >
        <div className="p-8 sm:p-12 lg:p-16 h-[375px] sm:h-[425px] lg:h-[450px] flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
            CONTAINERS
          </h2>
          <p className="text-sm sm:text-base md:text-2xl lg:text-2xl mx-8 sm:mx-16 lg:mx-60">
            Brindamos servicios especializados para la gestión integral de
            contenedores, garantizando calidad y eficiencia en cada etapa del
            proceso logístico.
          </p>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className=" text-white text-center relative overflow-hidden py-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-20 ">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className=" text-black rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center mt-6 "
            >
              <img
                src={servicio.image}
                alt={servicio.alt}
                className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md object-cover mb-4"
              />
              <h3 className="text-base sm:text-lg font-bold mb-2 text-center">
                {servicio.title}
              </h3>
              <a
                href={servicio.link}
                className="bg-custom-green-4 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-custom-green-5 transition"
              >
                Ver más
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
