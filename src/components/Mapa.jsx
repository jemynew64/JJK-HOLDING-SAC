export const Mapa = () => {
  return (
    <div className="bg-custom-green-4 text-white text-center relative overflow-hidden flex flex-col items-center justify-center p-4">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.010985826894!2d-99.13320938458765!3d19.432607986878894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92fd344d8f7%3A0x20d1f8f3f2de5b5e!2sCDMX!5e0!3m2!1ses-419!2smx!4v1672537386377!5m2!1ses-419!2smx"
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
