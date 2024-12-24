const HorarioAtencion = () => {
  return (
    <div className="bg-gray-100 text-gray-800 shadow-lg rounded-lg p-6 max-w-md mx-auto transform transition-transform hover:scale-105 hover:shadow-xl m-16">
      <h2 className="text-2xl font-bold text-center text-custom-green-4 mb-4">
        Horario de Atención
      </h2>
      <ul className="space-y-2 text-center">
        <li className="text-lg transition-colors duration-300 hover:text-custom-green-4">
          <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM - 6:00
          PM
        </li>
        <li className="text-lg transition-colors duration-300 hover:text-custom-green-4">
          <span className="font-semibold">Sábados:</span> 9:00 AM - 1:00 PM
        </li>
        <li className="text-lg text-red-500 transition-colors duration-300 hover:text-red-700">
          <span className="font-semibold">Domingos y Feriados:</span> Cerrado
        </li>
      </ul>
    </div>
  );
};

export default HorarioAtencion;
