export const Misionvision = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center py-10"
      style={{
        backgroundImage: "url('images/nosotros/fondiu.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Tarjeta Misión */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-8 shadow-lg w-full max-w-md">
            <br />
            <div className="flex justify-center mb-4">
              <img
                src="images/nosotros/mision.png"
                alt="Misión"
                className="w-24 h-24 object-contain" // Aumenté el tamaño aquí
              />
            </div>{" "}
            <br />
            <h3
              className="text-2xl font-semibold text-center mb-4"
              style={{ color: "#575A66" }}
            >
              Misión
            </h3>
            <p className="text-lg text-center" style={{ color: "#A6A7AC" }}>
              Brindar servicio y soluciones corporativas, superando las
              expectativas de nuestros clientes de manera eficiente y
              responsable con la seguridad, salud y el medio ambiente.
            </p>
            {/* Botón Ver Más */}
            <button
              className="w-full mt-4 py-2"
              style={{
                backgroundColor: "#06FF79",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#05e56a")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#06FF79")}
            >
              Ver más
            </button>
            <br />
          </div>
        </div>

        {/* Tarjeta Visión */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-8 shadow-lg w-full max-w-md">
            {/* Imagen Visión */}
            <div className="flex justify-center mb-4">
              <img
                src="images/nosotros/vision.png"
                alt="Visión"
                className="w-24 h-24 object-contain" // Aumenté el tamaño aquí también
              />
            </div>{" "}
            <br />
            <h3
              className="text-2xl font-semibold text-center mb-4"
              style={{ color: "#575A66" }}
            >
              Visión
            </h3>
            <p className="text-lg text-center" style={{ color: "#A6A7AC" }}>
              Ser una empresa líder en crecimiento y rentabilidad sustentable,
              implementando la mejora continua en todos nuestros procesos, con
              un equipo de personas orgullosas de pertenecer a JJK HOLDING
              S.A.C..
            </p>
            {/* Botón Ver Más */}
            <button
              className="w-full mt-4 py-2"
              style={{
                backgroundColor: "#06FF79",
                color: "#fff",
                borderRadius: "0.5rem",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#05e56a")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#06FF79")}
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
