import { AcercaDe } from "../components/Acercade";
import { Carousel } from "../components/Carousel";
import { ClientesCarousel } from "../components/ClientesCarousel";
import { Contactanos } from "../components/Contactanos";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ServiciosDestacados } from "../components/Serviciosdestacados";
export const PaginaInicio = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <AcercaDe />
      <ServiciosDestacados />
      <ClientesCarousel />
      <Contactanos />
      <Footer />
    </div>
  );
};
