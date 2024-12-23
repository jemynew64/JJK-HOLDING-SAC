import { Garantia } from "../components/Garantia";
import { Navbar } from "../components/Navbar";
import { NuestroEquipo } from "../components/NuestroEquipo";

export const PaginaNosotros = () => {
  return (
    <>
      <Navbar />
      <div>Sobre nosotros</div>
      <div>Mision Vision</div>
      <NuestroEquipo />
      <br />
      <Garantia />
      <div>footer</div>
    </>
  );
};
