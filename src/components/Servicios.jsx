import { useState } from "react";

export const Servicios = () => {
  // Estado para gestionar qué opción está seleccionada (Containers o Vehículos)
  const [seleccionado, setSeleccionado] = useState("containers");

  // Datos de servicios para containers
  const serviciosContainers = [
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

  // Datos de servicios para vehículos
  const serviciosVehiculos = [
    {
      image: "images/servicios/inspecionalmace.png",
      alt: "Inspeccion de vehiculos en almacenes",
      title: "Inspeccion de vehiculos en almacenes",
      link: "/servicios/mantenimiento-auto",
    },
    {
      image: "images/servicios/inspecionauto.png",
      alt: "Inspeccion de vehiculos en terminales portuarios",
      title: "Inspeccion de vehiculos en terminales portuarios",
      link: "/servicios/reparacion-auto",
    },
    {
      image: "images/servicios/proteccionintegral.png",
      alt: "Proteccion integral de vehiculos en almacenes",
      title: "Proteccion integral de vehiculos en almacenes",
      link: "/servicios/inspeccion-auto",
    },
    {
      image: "images/servicios/PDI.png",
      alt: "PDI (Pre Delivery Inspection)",
      title: "PDI (Pre Delivery Inspection)",
      link: "/servicios/lavado-auto",
    },
    {
      image: "images/servicios/serviciodelavado.png",
      alt: "Servicio de lavado de vehiculos",
      title: "Servicio de lavado de vehiculos",
      link: "/servicios/reparacion-neumaticos",
    },
    {
      image: "images/servicios/servicioadicionales.png",
      alt: "Servicios adicionales en PDI",
      title: "Servicios adicionales en PDI",
      link: "/servicios/mantenimiento-auto",
    },
    {
      image: "images/servicios/DMA.png",
      alt: "DMA (Daños Medioambientales)",
      title: "DMA (Daños Medioambientales)",
      link: "/servicios/reparacion-auto",
    },
    {
      image: "images/servicios/serviciodepintado.png",
      alt: "Sevicio de planchado y pintura",
      title: "Sevicio de planchado y pintura",
      link: "/servicios/inspeccion-auto",
    },
    {
      image: "images/servicios/otroservicios.png",
      alt: "Otros servicios",
      title: "Otros servicios",
      link: "/servicios/lavado-auto",
    },
  ];

  return (
    <div className="mb-10">
      {/* Sección de encabezado */}
      <div
        className="bg-custom-green-4 text-white text-center relative overflow-hidden "
        style={{
          clipPath: "ellipse(100% 80% at 50% 10%)",
        }}
      >
        <div className="p-8 sm:p-12 lg:p-16 h-[375px] sm:h-[425px] lg:h-[450px] flex flex-col">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-10 mt-14 justify-center md:justify-start">
            {seleccionado === "containers" ? "CONTAINERS" : "VEHÍCULOS"}
          </h2>
          <p className="text-sm sm:text-base md:text-2xl lg:text-2xl mx-8 sm:mx-16 lg:mx-60">
            {seleccionado === "containers"
              ? "Brindamos servicios especializados para la gestión integral de contenedores, garantizando calidad y eficiencia en cada etapa del proceso logístico."
              : "Ofrecemos servicios especializados para la gestión integral de vehículos, asegurando calidad y eficiencia en cada aspecto del proceso."}
          </p>
        </div>
      </div>

      {/* Botones para cambiar entre containers y vehículos */}
      <div className="flex justify-center  space-x-6">
        <button
          onClick={() => setSeleccionado("containers")}
          className={`px-8 py-3 rounded-lg  transition-all duration-300 ease-in-out transform ${
            seleccionado === "containers"
              ? "bg-custom-green-5 text-black shadow-lg scale-105"
              : "bg-gray-200  hover:bg-custom-green-4"
          } ${
            seleccionado === "vehiculos" ? "opacity-50 " : ""
          } focus:outline-none focus:ring-2 focus:ring-custom-green-4`}
        >
          CONTAINERS
        </button>
        <button
          onClick={() => setSeleccionado("vehiculos")}
          className={`px-8 py-3 rounded-lg  transition-all duration-300 ease-in-out transform ${
            seleccionado === "vehiculos"
              ? "bg-custom-green-5 text-black shadow-lg scale-105"
              : "bg-gray-200  hover:bg-custom-green-4"
          } ${
            seleccionado === "containers" ? "opacity-50 " : ""
          } focus:outline-none focus:ring-2 focus:ring-custom-green-4`}
        >
          VEHÍCULOS
        </button>
      </div>

      {/* Sección de servicios */}
      <div className="text-white text-center relative overflow-hidden py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-20">
          {(seleccionado === "containers"
            ? serviciosContainers
            : serviciosVehiculos
          ).map((servicio, index) => (
            <div
              key={index}
              className="text-black rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center mt-6"
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
    </div>
  );
};
