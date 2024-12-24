import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PaginaInicio } from "./pages/PaginaInicio";
import { PaginaNosotros } from "./pages/PaginaNosotros";
import { PaginaServicios } from "./pages/PaginaServicios";
import { PaginaClientes } from "./pages/PaginaClientes";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          {/* Ruta para / redirige a /inicio */}
          <Route path="/" element={<Navigate to="/inicio" replace />} />

          {/* Rutas de las páginas */}
          <Route path="/inicio" element={<PaginaInicio />} />
          <Route path="/nosotros" element={<PaginaNosotros />} />
          <Route path="/servicios" element={<PaginaServicios />} />
          <Route path="/contacto" element={<PaginaClientes />} />

          {/* Ruta para páginas no definidas */}
          <Route path="*" element={<Navigate to="/inicio" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
