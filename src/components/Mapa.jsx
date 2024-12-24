export const Mapa = () => {
  return (
    <div className="bg-custom-green-4 text-white text-center relative overflow-hidden flex flex-col items-center justify-center p-16">
      <div className="mb-4">
        <h2 className="text-lg md:text-2xl font-bold">
          Encuéntranos en Google Maps
        </h2>
        <p className="text-sm md:text-base mt-2">
          Encuentra fácilmente nuestra ubicación en Google Maps. Visítanos en
          nuestra oficina para cualquier consulta o reunión.
        </p>
      </div>
      <div className="w-full max-w-4xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3902.0860177885756!2d-76.927657!3d-12.037598999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDAyJzE1LjQiUyA3NsKwNTUnMzkuNiJX!5e0!3m2!1ses-419!2spe!4v1735067682607!5m2!1ses-419!2spe"
          width="100%"
          height="300"
          className="rounded-lg shadow-lg"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
