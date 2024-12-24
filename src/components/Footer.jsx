export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-white-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Contenedor con diseño de 3 columnas responsivas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Columna: Logo */}
          <div className="flex flex-col justify-center items-center lg:justify-start">
            <img
              src="images/inicio/Logo.png"
              className="h-24 w-auto" // Aumentando el tamaño del logo
              alt="JJK Holding Logo"
            />
            {/* Redes sociales debajo del logo */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/inicio/facebook.png"
                  alt="Facebook"
                  className="h-8 w-8"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/inicio/linkedin.png"
                  alt="LinkedIn"
                  className="h-8 w-8"
                />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  src="images/inicio/twitter.png"
                  alt="Twitter"
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>

          {/* Columna: Contáctanos */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase dark:text-dark ">
              CONTACTANOS
            </h2>
            <ul className="text-dark-800 dark:text-gray-800 font-medium">
              <li className="mb-4">
                <a
                  href="mailto:holdingjjk@gmail.com"
                  className="hover:underline"
                >
                  holdingjjk@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Calle Olivos Mz P Lote 18 - ATE, 2do piso, LIMA,
                  <br /> Lima 15494, PE
                </a>
              </li>
            </ul>
          </div>

          {/* Columna: Lima, Lima */}
          <div className="text-center lg:text-left">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-dark">
              LIMA, Lima
            </h2>
            <ul className="text-dark-80 dark:text-gray-800 font-medium">
              <li className="mb-4">
                <p>
                  <a href="#" className="hover:underline">
                    Optimizando la cadena logistica para satisfacer demandas
                    <br />
                    nacionales e internacionales.
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-dark-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
        <span className="block text-sm text-dark-500 sm:text-center dark:text-gray-700">
          © 2024 JJK HOLDING SAC. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
