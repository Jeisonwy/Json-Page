import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Academico from "./components/Academico";
import Tecnologias from "./components/Tecnologias";
import Profesional from "./components/Profesional";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/Json-Page" element={<MainPage />} />
        <Route path="/academico" element={<Academico />} />
        <Route path="/profesional" element={<Profesional />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-950 text-white min-h-screen w-full flex flex-col">
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
