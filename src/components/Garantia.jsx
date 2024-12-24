export const Garantia = () => {
  return (
    <div className="bg-fondogarantia bg-cover bg-center flex flex-col md:flex-row p-20 gap-6">
      {/* Contenido textual */}
      <div className="bg-white/80 p-6 rounded-md flex-1 md:ml-20 lg:ml-32">
        <h2 className="text-xl font-bold mb-4">GARANTÍA DE BUEN SERVICIO</h2>
        <p className="mb-4">
          En JJK HOLDING S.A.C., nos enfocamos en proporcionar herramientas y
          servicios integrales para la gestión de contenedores y vehículos,
          utilizando procedimientos modernos y tecnología de última generación.
          Contamos con un equipo altamente capacitado y con amplia experiencia,
          alineado con los estándares internacionales de calidad y seguridad, y
          realizamos inspecciones conforme a normas internacionales.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">
          CERTIFICADO DE CORPORACIÓN HODELPE
        </h3>
        <p>
          En todos nuestros procesos, nos comprometemos a ofrecer un servicio
          excepcional que construya alianzas estratégicas y duraderas con
          nuestros clientes, permitiéndoles centrarse en sus objetivos
          principales mientras optimizamos su cadena logística.
        </p>
      </div>
      {/* Contenedor de imagen */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="images/nosotros/cetrificadocorpo.png"
          alt="Certificado de Corporación Hodelpe"
          className="max-w-full max-h-96 object-contain rounded-md"
        />
      </div>
    </div>
  );
};
