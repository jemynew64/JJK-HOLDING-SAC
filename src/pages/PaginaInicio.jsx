import { Carousel } from "../components/Carousel";
import { ClientesCarousel } from "../components/ClientesCarousel";
import { Navbar } from "../components/Navbar";
export const PaginaInicio = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <h1>acerca de </h1>
      <h1>servicios destacados</h1>
      <ClientesCarousel />
      <h1>contacto</h1>
      <h1>footer</h1>
    </div>
  );
};
