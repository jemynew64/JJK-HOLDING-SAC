export const AcercaDe = () => {
  return (
    <div className="my-10 w-full bg-white flex flex-col justify-center items-center py-10">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Contenido a la izquierda (Título y Texto) */}
        <div className="text-center md:text-left md:w-1/2">
          <br />
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Acerca de
            <br />
            <span className="font-bold"> JJK HOLDING SAC</span>
          </h2>
          <br />
          <p className="text-lg text-gray-700">
            Desde nuestra fundación en 2012, en JJK HOLDING S.A.C. nos hemos
            dedicado a proporcionar servicios integrales en contenedores y
            vehículos. Con el compromiso de satisfacer las demandas logísticas
            tanto a nivel nacional como internacional, hemos crecido y
            evolucionado para convertirnos en un socio confiable y líder en la
            industria.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <br />
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            src="images/inicio/acercade.png"
            alt="Acerca de JJK HOLDING SAC"
          />
        </div>
      </div>
    </div>
  );
};
