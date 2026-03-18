import React, { useState } from "react";

// Datos de las tecnologías manejadas (JSON de configuración inicial)
const tecnologiasData = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: "Avanzado",
    description: "Desarrollo de interfaces dinámicas y Single Page Applications con Hooks y gestión de estado."
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Lenguaje Principal",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: "Avanzado",
    description: "Lógica de negocio, interactividad web y manipulación avanzada del DOM."
  },
  {
    id: 3,
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    level: "Intermedio",
    description: "Creación de APIs REST, autenticación y lógica robusta del lado del servidor."
  },
  {
    id: 4,
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    level: "Avanzado",
    description: "Estructura semántica, accesibilidad y base sólida para aplicaciones web modernas."
  },
  {
    id: 5,
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    level: "Avanzado",
    description: "Estilos modernos, responsive web design, animaciones y transiciones avanzadas."
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "Estilos",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    level: "Avanzado",
    description: "Creación rápida de interfaces responsivas utilizando el sistema de clases utilitarias."
  },
  {
    id: 7,
    name: "Git",
    category: "Herramientas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    level: "Intermedio",
    description: "Control de versiones, flujos de trabajo en equipo y ramas."
  },
  {
    id: 8,
    name: "Python",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    level: "Básico",
    description: "Scripts de automatización y desarrollo backend."
  }
];

export default function Tecnologias() {
  const [activeCategory, setActiveCategory] = useState("Todas");

  // Obtener las categorías únicas
  const categories = ["Todas", ...new Set(tecnologiasData.map(tech => tech.category))];

  // Filtrar tecnologías según la categoría seleccionada
  const filteredTechs = activeCategory === "Todas" 
    ? tecnologiasData 
    : tecnologiasData.filter(tech => tech.category === activeCategory);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-cyan-400">Habilidades Técnicas</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Tecnologías que manejo
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            A lo largo de mi trayectoria he trabajado con diversas tecnologías y herramientas. 
            Aquí detallo mi stack principal y mi nivel de conocimiento en cada una de ellas.
          </p>
        </div>

        {/* Filtros de Categoría */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Tecnologías */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {filteredTechs.map((tech) => (
            <div 
              key={tech.id}
              className="group relative flex flex-col items-center justify-center p-8 m-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:border-cyan-500/30 overflow-hidden"
            >
              {/* Efecto de resplandor sutil de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative mb-6 h-20 w-20 p-4 rounded-xl bg-gray-900/50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-md" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
              
              <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset mb-4 ${
                tech.level === 'Avanzado' ? 'bg-green-500/10 text-green-400 ring-green-500/20' :
                tech.level === 'Intermedio' ? 'bg-yellow-500/10 text-yellow-400 ring-yellow-500/20' :
                'bg-blue-500/10 text-blue-400 ring-blue-500/20'
              }`}>
                {tech.level}
              </span>

              <p className="text-sm text-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform-gpu blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#06b6d4] to-[#3b82f6] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/2 transform-gpu blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3b82f6] to-[#06b6d4] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
    </div>
  );
}
