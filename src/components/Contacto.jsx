export const Contacto = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-center py-40 px-8 sm:px-8 md:px-12"
      style={{
        backgroundImage: "url('images/contactanos/contaitanos.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-80 w-full max-w-4xl p-6 text-center rounded-lg shadow-lg">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-6"
          style={{ fontFamily: "Do Hyeon, sans-serif" }}
        >
          ¡CONTACTANOS!
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
          Estamos aquí para ayudarte con cualquier consulta o necesidad que
          tengas. No dudes en ponerte en contacto con nosotros, estaremos
          encantados de atenderte.
        </p>
      </div>
    </div>
  );
};
