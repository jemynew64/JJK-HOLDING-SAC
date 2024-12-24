import HorarioAtencion from "../components/HorarioAtencion";
import { Mapa } from "../components/Mapa";
import { Navbar } from "../components/Navbar";
import { Servicios } from "../components/Servicios";

export const PaginaServicios = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Servicios />
        <h1>footer</h1>
        <Mapa />
        <HorarioAtencion />
      </div>
    </>
  );
};
