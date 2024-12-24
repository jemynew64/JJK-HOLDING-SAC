import { Clientes } from "../components/Clientes";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const PaginaClientes = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Clientes />
        <Footer />
      </div>
    </>
  );
};
