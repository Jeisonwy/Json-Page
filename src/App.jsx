import { BrowserRouter, Routes, Route } from "react-router-dom";

import navbar from "./components/navbar";
import mainPage from "./components/mainPage";
import academico from "./components/academico";
import tecnologías from "./components/tecnologias";
import profesional from "./components/profesional";
import proyectos from "./components/proyectos";
import contacto from "./components/contacto";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-950 text-white min-h-screen w-full flex flex-col">
        <navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<mainPage />} />
            <Route path="/academico" element={<academico />} />
            <Route path="/profesional" element={<profesional />} />
            <Route path="/proyectos" element={<proyectos />} />
            <Route path="/contacto" element={<contacto />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
