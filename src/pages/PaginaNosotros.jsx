import { Garantia } from "../components/Garantia";
import { Misionvision } from "../components/Misionvision";
import { Navbar } from "../components/Navbar";
import { NuestroEquipo } from "../components/NuestroEquipo";
import { SobreNosotros } from "../components/Sobrenosotros";
import { Footer } from "../components/Footer";

export const PaginaNosotros = () => {
  return (
    <>
      <Navbar />
      <SobreNosotros />
      <Misionvision />
      <NuestroEquipo />
      <br />
      <Garantia />
      <Footer />
    </>
  );
};
