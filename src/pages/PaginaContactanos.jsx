import HorarioAtencion from "../components/HorarioAtencion";
import { Mapa } from "../components/Mapa";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Contacto } from "../components/Contacto";
import { Controladas } from "../components/Controladas";
export const PaginaContactanos = () => {
  return (
    <>
      <Navbar />
      <Contacto />
      <Controladas />
      <Mapa />
      <HorarioAtencion />
      <Footer />
    </>
  );
};
