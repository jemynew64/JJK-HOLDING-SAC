import { useState } from "react";
import { Link } from "react-router-dom";

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
      backgroundImage: "images/servicios/Cold-Treatment.png",
      description:
        "Servicio especializado para asegurar la calidad de productos perecederos mediante tratamientos de frío controlado.",
      benefits: [
        {
          title: "Eficiencia energética",
          description: "Optimización del uso de energía en el proceso.",
        },
        {
          title: "Calidad asegurada",
          description: "Mantiene la frescura y calidad de los productos.",
        },
        {
          title: "Calidad asegurada",
          description: "Mantiene la frescura y calidad de los productos.",
        },
      ],
      images: [
        {
          src: "images/servicios/Cold-Treatment.png",
          alt: "Tratamiento en frío",
        },
        {
          src: "images/servicios/Cold-Treatment.png",
          alt: "Mantención de calidad",
        },
        {
          src: "images/servicios/Cold-Treatment.png",
          alt: "Mantención de calidad",
        },
      ],
    },
    {
      image: "images/servicios/colocar.png",
      alt: "Colocación de cortinas y filtros",
      title: "Colocación de cortinas y filtros",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/colocar.png",
      description:
        "Servicio diseñado para instalar cortinas y filtros en contenedores, mejorando el control de temperatura y reduciendo contaminantes.",
      benefits: [
        {
          title: "Control de temperatura",
          description: "Mantiene condiciones ideales para la carga.",
        },
        {
          title: "Reducción de contaminantes",
          description: "Minimiza la entrada de partículas externas.",
        },
      ],
      images: [
        {
          src: "images/servicios/colocar.png",
          alt: "Cortinas instaladas",
        },
        {
          src: "images/servicios/colocar.png",
          alt: "Filtros avanzados",
        },
      ],
    },
    {
      image: "images/servicios/Controlled.png",
      alt: "Controlled atmosphere",
      title: "Controlled atmosphere",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/Controlled.png",
      description:
        "Solución avanzada para la preservación de productos en ambientes controlados, manteniendo frescura y calidad.",
      benefits: [
        {
          title: "Preservación prolongada",
          description: "Ideal para productos altamente perecederos.",
        },
        {
          title: "Reducción de desperdicios",
          description: "Minimiza las pérdidas durante el transporte.",
        },
      ],
      images: [
        {
          src: "images/servicios/Controlled.png",
          alt: "Ambiente controlado",
        },
        {
          src: "images/servicios/Controlled.png",
          alt: "Preservación efectiva",
        },
      ],
    },
    {
      image: "images/servicios/forradores.png",
      alt: "Forrado de contenedores",
      title: "Forrado de contenedores",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/forradores.png",
      description:
        "Servicio de recubrimiento interno de contenedores para proteger la carga y mejorar la eficiencia térmica.",
      benefits: [
        {
          title: "Protección total",
          description: "Protege la carga de daños externos.",
        },
        {
          title: "Eficiencia térmica",
          description: "Asegura temperaturas estables en el transporte.",
        },
      ],
      images: [
        {
          src: "images/servicios/forradores.png",
          alt: "Forrado especializado",
        },
        {
          src: "images/servicios/forradores.png",
          alt: "Protección mejorada",
        },
      ],
    },
    {
      image: "images/servicios/inspeccion.png",
      alt: "Inspección de contenedores",
      title: "Inspección de contenedores",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/inspeccion.png",
      description:
        "Inspección exhaustiva de contenedores para garantizar su estado antes del uso y transporte.",
      benefits: [
        {
          title: "Detección de fallos",
          description: "Identifica problemas antes del uso.",
        },
        {
          title: "Seguridad garantizada",
          description: "Asegura el transporte seguro de la carga.",
        },
      ],
      images: [
        {
          src: "images/servicios/inspeccion.png",
          alt: "Revisión estructural",
        },
        {
          src: "images/servicios/inspeccion.png",
          alt: "Garantía de calidad",
        },
      ],
    },
    {
      image: "images/servicios/lavador.png",
      alt: "Lavado de contenedores",
      title: "Lavado de contenedores",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/lavador.png",
      description:
        "Servicio profesional de lavado para mantener los contenedores en óptimas condiciones higiénicas.",
      benefits: [
        {
          title: "Higiene mejorada",
          description: "Elimina suciedad y residuos.",
        },
        {
          title: "Prevención de contaminantes",
          description: "Evita contaminaciones cruzadas.",
        },
      ],
      images: [
        {
          src: "images/servicios/lavador.png",
          alt: "Limpieza profunda",
        },
        {
          src: "images/servicios/lavador.png",
          alt: "Condiciones higiénicas",
        },
      ],
    },
    {
      image: "images/servicios/PTIreparaciones.png",
      alt: "PTI y Reparación de Máquinas",
      title: "PTI y Reparación de Máquinas",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/PTIreparaciones.png",
      description:
        "Pruebas de Pre-Trip Inspection y reparaciones para garantizar el óptimo funcionamiento de las máquinas.",
      benefits: [
        {
          title: "Funcionamiento eficiente",
          description: "Asegura que las máquinas operen correctamente.",
        },
        {
          title: "Reducción de fallos",
          description: "Minimiza tiempos de inactividad.",
        },
      ],
      images: [
        {
          src: "images/servicios/PTIreparaciones.png",
          alt: "Revisión técnica",
        },
        {
          src: "images/servicios/PTIreparaciones.png",
          alt: "Reparación efectiva",
        },
      ],
    },
    {
      image: "images/servicios/reparaciones.png",
      alt: "Reparación de Contenedores",
      title: "Reparación de Contenedores",
      link: "/servicios/cold-treatment",
      backgroundImage: "images/servicios/reparaciones.png",
      description:
        "Servicio completo de reparación de contenedores para restaurar su funcionalidad y extender su vida útil.",
      benefits: [
        {
          title: "Extensión de vida útil",
          description: "Repara daños estructurales y funcionales.",
        },
        {
          title: "Ahorro en costos",
          description: "Reduce la necesidad de reemplazos frecuentes.",
        },
      ],
      images: [
        {
          src: "images/servicios/reparaciones.png",
          alt: "Reparación estructural",
        },
        {
          src: "images/servicios/reparaciones.png",
          alt: "Contenedores restaurados",
        },
      ],
    },
  ];

  // Datos de servicios para vehículos
  const serviciosVehiculos = [
    {
      image: "images/servicios/inspecionalmace.png",
      alt: "Inspeccion de vehiculos en almacenes",
      title: "Inspeccion de vehiculos en almacenes",
      link: "/servicios/mantenimiento-auto",
      backgroundImage: "images/servicios/inspecionalmace.png",
      description:
        "Servicio de inspección integral para vehículos en almacenes, garantizando que cumplan con los estándares de calidad y seguridad.",
      benefits: [
        {
          title: "Detección de daños",
          description: "Identifica problemas antes de su distribución.",
        },
        {
          title: "Cumplimiento de estándares",
          description:
            "Garantiza que los vehículos estén listos para el mercado.",
        },
      ],
      images: [
        {
          src: "images/servicios/inspecionalmace.png",
          alt: "Inspección en almacén",
        },
        {
          src: "images/servicios/inspecionalmace.png",
          alt: "Control de calidad",
        },
      ],
    },
    {
      image: "images/servicios/inspecionauto.png",
      alt: "Inspeccion de vehiculos en terminales portuarios",
      title: "Inspeccion de vehiculos en terminales portuarios",
      link: "/servicios/reparacion-auto",
      backgroundImage: "images/servicios/inspecionauto.png",
      description:
        "Inspección profesional en terminales portuarios para asegurar la calidad y el estado de los vehículos antes de su transporte.",
      benefits: [
        {
          title: "Revisión exhaustiva",
          description: "Verifica todos los aspectos críticos del vehículo.",
        },
        {
          title: "Rapidez y eficiencia",
          description: "Optimiza tiempos de inspección en terminales.",
        },
      ],
      images: [
        {
          src: "images/servicios/inspecionauto.png",
          alt: "Inspección portuaria",
        },
        {
          src: "images/servicios/inspecionauto.png",
          alt: "Verificación de daños",
        },
      ],
    },
    {
      image: "images/servicios/proteccionintegral.png",
      alt: "Proteccion integral de vehiculos en almacenes",
      title: "Proteccion integral de vehiculos en almacenes",
      link: "/servicios/inspeccion-auto",
      backgroundImage: "images/servicios/proteccionintegral.png",
      description:
        "Protección completa para vehículos en almacenes, asegurando que estén resguardados contra factores externos.",
      benefits: [
        {
          title: "Cuidado contra el clima",
          description: "Protege los vehículos de daños ambientales.",
        },
        {
          title: "Prevención de contaminantes",
          description: "Evita la acumulación de suciedad y partículas.",
        },
      ],
      images: [
        {
          src: "images/servicios/proteccionintegral.png",
          alt: "Protección en almacén",
        },
        {
          src: "images/servicios/proteccionintegral.png",
          alt: "Cuidado integral",
        },
      ],
    },
    {
      image: "images/servicios/PDI.png",
      alt: "PDI (Pre Delivery Inspection)",
      title: "PDI (Pre Delivery Inspection)",
      link: "/servicios/lavado-auto",
      backgroundImage: "images/servicios/PDI.png",
      description:
        "Inspección previa a la entrega para garantizar que los vehículos cumplan con los más altos estándares de calidad.",
      benefits: [
        {
          title: "Garantía de calidad",
          description:
            "Asegura que los vehículos estén en perfectas condiciones.",
        },
        {
          title: "Preparación final",
          description: "Listos para ser entregados al cliente.",
        },
      ],
      images: [
        {
          src: "images/servicios/PDI.png",
          alt: "Inspección de entrega",
        },
        {
          src: "images/servicios/PDI.png",
          alt: "Control final",
        },
      ],
    },
    {
      image: "images/servicios/serviciodelavado.png",
      alt: "Servicio de lavado de vehiculos",
      title: "Servicio de lavado de vehiculos",
      link: "/servicios/reparacion-neumaticos",
      backgroundImage: "images/servicios/serviciodelavado.png",
      description:
        "Lavado profesional de vehículos para mantenerlos limpios y en óptimas condiciones estéticas.",
      benefits: [
        {
          title: "Limpieza profunda",
          description: "Elimina suciedad acumulada de manera efectiva.",
        },
        {
          title: "Cuidado estético",
          description: "Mantiene el vehículo como nuevo.",
        },
      ],
      images: [
        {
          src: "images/servicios/serviciodelavado.png",
          alt: "Lavado de vehículos",
        },
        {
          src: "images/servicios/serviciodelavado.png",
          alt: "Vehículo limpio",
        },
      ],
    },
    {
      image: "images/servicios/servicioadicionales.png",
      alt: "Servicios adicionales en PDI",
      title: "Servicios adicionales en PDI",
      link: "/servicios/mantenimiento-auto",
      backgroundImage: "images/servicios/servicioadicionales.png",
      description:
        "Servicios complementarios para mejorar la inspección previa a la entrega, adaptados a las necesidades específicas.",
      benefits: [
        {
          title: "Opciones personalizadas",
          description:
            "Servicios adaptados según los requerimientos del cliente.",
        },
        {
          title: "Valor agregado",
          description: "Mejora la experiencia del cliente final.",
        },
      ],
      images: [
        {
          src: "images/servicios/servicioadicionales.png",
          alt: "Servicios personalizados",
        },
        {
          src: "images/servicios/servicioadicionales.png",
          alt: "Inspección avanzada",
        },
      ],
    },
    {
      image: "images/servicios/DMA.png",
      alt: "DMA (Daños Medioambientales)",
      title: "DMA (Daños Medioambientales)",
      link: "/servicios/reparacion-auto",
      backgroundImage: "images/servicios/DMA.png",
      description:
        "Identificación y reparación de daños medioambientales en vehículos, garantizando su recuperación completa.",
      benefits: [
        {
          title: "Análisis detallado",
          description: "Detecta los efectos de factores medioambientales.",
        },
        {
          title: "Reparación especializada",
          description: "Recupera el estado original del vehículo.",
        },
      ],
      images: [
        {
          src: "images/servicios/DMA.png",
          alt: "Reparación ambiental",
        },
        {
          src: "images/servicios/DMA.png",
          alt: "Restauración total",
        },
      ],
    },
    {
      image: "images/servicios/serviciodepintado.png",
      alt: "Sevicio de planchado y pintura",
      title: "Sevicio de planchado y pintura",
      link: "/servicios/inspeccion-auto",
      backgroundImage: "images/servicios/serviciodepintado.png",
      description:
        "Servicio de reparación estética, incluyendo planchado y pintura, para devolver el aspecto original del vehículo.",
      benefits: [
        {
          title: "Reparación estética",
          description: "Corrige daños superficiales y mejora el aspecto.",
        },
        {
          title: "Acabados de calidad",
          description: "Garantiza un resultado profesional y duradero.",
        },
      ],
      images: [
        {
          src: "images/servicios/serviciodepintado.png",
          alt: "Planchado de carrocería",
        },
        {
          src: "images/servicios/serviciodepintado.png",
          alt: "Pintura impecable",
        },
      ],
    },
    {
      image: "images/servicios/otroservicios.png",
      alt: "Otros servicios",
      title: "Otros servicios",
      link: "/servicios/lavado-auto",
      backgroundImage: "images/servicios/otroservicios.png",
      description:
        "Amplia variedad de servicios adicionales para vehículos, diseñados para cubrir todas las necesidades de mantenimiento y reparación.",
      benefits: [
        {
          title: "Versatilidad",
          description: "Una solución para cada necesidad.",
        },
        {
          title: "Atención personalizada",
          description: "Servicios adaptados a las exigencias del cliente.",
        },
      ],
      images: [
        {
          src: "images/servicios/otroservicios.png",
          alt: "Servicios adicionales",
        },
        {
          src: "images/servicios/otroservicios.png",
          alt: "Mantenimiento completo",
        },
      ],
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
              <Link
                to="/serviciosextra"
                state={{
                  backgroundImage: servicio.backgroundImage,
                  title: servicio.title,
                  description: servicio.description,
                  benefits: servicio.benefits,
                  images: servicio.images,
                }}
                className="bg-custom-green-4 text-white text-xs sm:text-sm px-4 py-2 rounded hover:bg-custom-green-5 transition"
              >
                Ver más
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
