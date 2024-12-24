export const SobreNosotros = () => {
  return (
    <div
      className=" p-24 w-full flex flex-col justify-center items-center "
      style={{ backgroundColor: "#50AF92" }}
    >
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Imagenes a la izquierda */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md md:max-w-full">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="images/nosotros/nstrs.png"
              alt="Reparación"
            />
          </div>
        </div>

        {/* Contenido a la derecha (Título y Texto) */}
        <div className="text-center md:text-left md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: "#254838" }}>Sobre</span>{" "}
            <span className="text-white">Nosotros</span>
          </h2>
          {/* Línea blanca más larga y más delgada */}
          <div className="w-96 h-0.5 bg-white mx-auto md:mx-0 mb-4"></div>
          <p className="text-lg mb-4">
            JJK HOLDING S.A.C. es una empresa peruana dedicada al servicio
            integral de contenedores y vehículos, fundada en 2012, con el
            objetivo de satisfacer las demandas de la cadena logística del
            comercio nacional e internacional. Ofrecen servicios logísticos en
            puertos, almacenes y concesionarios de vehículos, con un enfoque en
            la eficiencia, responsabilidad y sostenibilidad. La empresa se
            enorgullece de su equipo multidisciplinario y su compromiso con la
            calidad, seguridad y el medio ambiente.
          </p>
        </div>
      </div>
    </div>
  );
};
