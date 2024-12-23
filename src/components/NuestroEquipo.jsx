export const NuestroEquipo = () => {
  return (
    <div className=" md:mx-10 md:border-x-4 border-custom-blanco-1">
      <div className=" flex flex-col items-center m-4 p-4">
        <h1 className="text-black text-2xl sm:text-4xl">Nuestro equipo</h1>
        <p className="mt-6 text-lg sm:text-2xl text-center sm:mx-10 lg:mx-48 xl:mx-64 ">
          Contamos con un equipo multidisciplinario de profesionales altamente
          capacitados, comprometidos con la calidad, la innovación y la
          proactividad. Cada miembro de nuestro equipo aporta su experiencia y
          conocimientos para garantizar que nuestros clientes reciban soluciones
          logísticas de primera clase.
        </p>
      </div>
      <div className=" flex flex-col sm:flex-row justify-center p-4 gap-4">
        {/* Imágenes del equipo */}
        <div className="flex justify-center">
          <img
            className="rounded-lg h-auto w-full max-w-xs sm:max-w-md md:max-w-lg object-cover"
            src="images/nosotros/nuestroequipo1.png"
            alt="Equipo 1"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="rounded-lg h-auto w-full max-w-xs sm:max-w-md md:max-w-lg object-cover"
            src="images/nosotros/nuestroequipo2.png"
            alt="Equipo 2"
          />
        </div>
      </div>
    </div>
  );
};
