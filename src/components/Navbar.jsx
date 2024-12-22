import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-gray-200 relative">
      <div className="flex flex-wrap items-center justify-center p-4 gap-8">
        {/* Logo */}
        <a href="#" className="flex flex-row items-center md:flex-row">
          <img src="images/inicio/Logo.png" className="h-12 mr-12" alt="Logo" />
          <span className="text-xl font-semibold text-black text-center md:text-left">
            JJK HOLDING SAC
          </span>
        </a>

        {/* Navbar Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-200 transition-all duration-300 ease-in-out transform hover:bg-green-300"
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:block md:w-auto md:relative md:top-0 md:bg-white md:border-none transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 rounded-lg">
            {["INICIO", "NOSOTROS", "SERVICIOS", "CLIENTES"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`block py-2 px-3 text-black transition-all duration-300 ease-in-out ${
                    item === "INICIO"
                      ? "font-bold underline"
                      : "hover:bg-green-400 hover:text-white transition-colors"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-green-500 rounded hover:bg-green-600 transition-all duration-300 ease-in-out"
              >
                CONTACTANOS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
