import { Clientes } from "../components/Clientes";
import { Navbar } from "../components/Navbar";

export const PaginaClientes = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Clientes />
        <h1>footer</h1>
      </div>
    </>
  );
};
