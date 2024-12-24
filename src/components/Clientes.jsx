export const Clientes = () => {
  const logos = [
    { image: "images/inicio/dpworld.png", alt: "DP World" },
    { image: "images/inicio/unimar.png", alt: "Unimar" },
    { image: "images/inicio/imupesa.png", alt: "Imupesa" },
    { image: "images/inicio/agrovietoria.png", alt: "Agrovietoria" },
    { image: "images/inicio/camposal.png", alt: "Camposal" },
    { image: "images/inicio/coexa.png", alt: "Coexa" },
    { image: "images/inicio/corporacion.png", alt: "Corporacion" },
    { image: "images/inicio/icofruta.png", alt: "Icofruta" },
    { image: "images/inicio/maersk2.png", alt: "Maersk" },
    { image: "images/inicio/ransa.png", alt: "Ransa" },
    { image: "images/inicio/terminalportuario.png", alt: "Terminal Portuario" },
  ];

  return (
    <div className="mb-12 bg-gray-50">
      <div
        className="bg-custom-green-4 text-white text-center relative overflow-hidden"
        style={{
          clipPath: "ellipse(100% 80% at 50% 10%)",
        }}
      >
        <div className="p-8 sm:p-12 lg:p-16 h-[375px] sm:h-[425px] lg:h-[450px] flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
            CLIENTES
          </h2>
          <p className="text-sm sm:text-base md:text-2xl lg:text-2xl mx-8 sm:mx-16 lg:mx-60">
            Nuestros clientes son el centro de todo lo que hacemos. Nos
            enorgullece colaborar con empresas líderes, ofreciendo soluciones
            personalizadas que optimizan sus operaciones y fortalecen sus
            cadenas logísticas.
          </p>
        </div>
      </div>

      <div className=" ">
        <p className="text-center text-white text-lg mb-6">Imágenes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 sm:px-16 lg:px-32">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo.image}
                alt={logo.alt}
                className="w-44 h-44 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
