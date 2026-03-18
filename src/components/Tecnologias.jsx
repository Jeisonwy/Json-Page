import React, { useState, useEffect, useRef } from "react";

const tecnologiasData = [
  {
    id: 1, name: "React", category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: "Avanzado", description: "Desarrollo de interfaces dinámicas y Single Page Applications con Hooks y gestión de estado.",
    accent: "#0ea5e9"
  },
  {
    id: 2, name: "JavaScript", category: "Lenguaje Principal",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    level: "Avanzado", description: "Lógica de negocio, interactividad web y manipulación avanzada del DOM.",
    accent: "#facc15"
  },
  {
    id: 3, name: "Node.js", category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    level: "Intermedio", description: "Creación de APIs REST, autenticación y lógica robusta del lado del servidor.",
    accent: "#22c55e"
  },
  {
    id: 4, name: "HTML5", category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    level: "Avanzado", description: "Estructura semántica, accesibilidad y base sólida para aplicaciones web modernas.",
    accent: "#f97316"
  },
  {
    id: 5, name: "CSS3", category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    level: "Avanzado", description: "Estilos modernos, responsive web design, animaciones y transiciones avanzadas.",
    accent: "#3b82f6"
  },
  {
    id: 6, name: "Tailwind CSS", category: "Estilos",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    level: "Avanzado", description: "Creación rápida de interfaces responsivas utilizando el sistema de clases utilitarias.",
    accent: "#06b6d4"
  },
  {
    id: 7, name: "Git", category: "Herramientas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    level: "Intermedio", description: "Control de versiones, flujos de trabajo en equipo y ramas.",
    accent: "#ef4444"
  },
  {
    id: 8, name: "Python", category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    level: "Básico", description: "Scripts de automatización y desarrollo backend.",
    accent: "#eab308"
  }
];

function TechCard({ tech, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col justify-between rounded-xl overflow-hidden cursor-default"
      style={{
        background: "rgba(2,8,23,0.75)", backdropFilter: "blur(14px)",
        border: `1px solid ${hovered ? tech.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 0 1px ${tech.accent}30, 0 4px 25px ${tech.accent}20` : "0 4px 20px rgba(0,0,0,0.4)",
        transform: visible ? hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)" : "translateY(24px)",
        opacity: visible ? 1 : 0, transition: `opacity 0.6s ease ${index * 0.05}s, transform 0.5s cubic-bezier(.22,1,.36,1)`,
        padding: "1.5rem",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: hovered ? `linear-gradient(90deg,transparent,${tech.accent},transparent)` : "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)",
          transition: "background 0.4s",
        }}
      />

      {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
        <div key={i} className={`absolute w-2 h-2 ${cls}`} style={{ borderColor: hovered ? tech.accent : "rgba(255,255,255,0.08)", transition: "border-color 0.3s" }} />
      ))}

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 10%,${tech.accent}12,transparent 65%)`, opacity: hovered ? 1 : 0, transition: "opacity 0.5s" }}
      />

      <div className="relative z-10 flex flex-col h-full items-center text-center">
        
        <div className="relative shrink-0 mb-4 h-16 w-16">
          <div className="absolute inset-0 rounded-xl blur-md"
            style={{ background: tech.accent, opacity: hovered ? 0.3 : 0.05, transition: "opacity 0.4s" }} />
          <div className="relative w-full h-full rounded-xl flex items-center justify-center overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${hovered ? tech.accent + "50" : "rgba(255,255,255,0.08)"}`, transition: "border-color 0.4s" }}>
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain"
                 style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))" }} />
          </div>
        </div>

        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Space Mono', monospace", color: hovered ? "#f1f5f9" : "#cbd5e1", transition: "color 0.3s" }}>
          {tech.name}
        </h3>

        <div className="flex gap-2 mb-3 mt-1">
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider"
            style={{ color: tech.accent, background: `${tech.accent}15`, border: `1px solid ${tech.accent}30` }}>
            {tech.level}
          </span>
        </div>

        <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
          {tech.description}
        </p>
      </div>
    </div>
  );
}

export default function Tecnologias() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const categories = ["Todas", ...new Set(tecnologiasData.map(t => t.category))];
  const filteredTechs = activeCategory === "Todas" ? tecnologiasData : tecnologiasData.filter(t => t.category === activeCategory);

  return (
    <div className="relative isolate min-h-screen py-24 sm:py-32 overflow-hidden flex flex-col justify-center" style={{ background: "#010b14" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Exo+2:wght@700;800;900&display=swap');
        @keyframes data-stream {0%{opacity:0;transform:translateY(-20px)}20%{opacity:0.5}80%{opacity:0.5}100%{opacity:0;transform:translateY(calc(100vh + 20px))}}
        @keyframes ping-slow {0%{transform:scale(1);opacity:0.8}100%{transform:scale(2.2);opacity:0}}
        @keyframes scan {0%{top:-2%}100%{top:102%}}
      `}</style>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,245,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,#00f5d4,transparent)", opacity: 0.2, zIndex: 5, animation: "scan 8s linear infinite" }}
      />

      {/* Floating data chars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <span key={i} className="absolute font-mono text-[10px]"
            style={{
              left: `${(i / 15) * 100}%`, top: "-10px", color: i % 2 === 0 ? "#00f5d4" : "#7c3aed", opacity: 0,
              animation: `data-stream ${3 + (i % 3)}s ${i * 0.4}s linear infinite`,
            }}>
            {"0" + (i % 9)}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-2xl text-center"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          
          <div className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-mono font-bold uppercase tracking-widest"
            style={{ color: "#00f5d4", background: "rgba(0,245,212,0.07)", border: "1px solid rgba(0,245,212,0.22)", boxShadow: "0 0 20px rgba(0,245,212,0.08)" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "#00f5d4", animation: "ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#00f5d4" }} />
            </span>
            STACK TECNOLÓGICO
          </div>

          <p className="text-xs font-mono mb-2" style={{ color: "#334155" }}>
            &gt;&nbsp;/sys/records/skills/runtime_loaded
          </p>

          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f1f5f9" }}>
            Tecnologías{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#00f5d4,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Manejadas
            </span>
          </h2>
          <p className="mt-4 mx-auto text-[0.95rem] leading-relaxed" style={{ color: "#64748b", maxWidth: "42rem" }}>
            A lo largo de mi trayectoria he trabajado con diversas tecnologías y herramientas. Aquí detallo mi stack principal y nivel de especialización.
          </p>
        </div>

        {/* Filtros de Categoría */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-5 py-2 rounded-sm text-[11px] font-mono font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
              style={{
                color: activeCategory === cat ? "#00f5d4" : "#94a3b8",
                background: activeCategory === cat ? "rgba(0,245,212,0.1)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${activeCategory === cat ? "#00f5d4" : "rgba(255,255,255,0.1)"}`,
                boxShadow: activeCategory === cat ? "0 0 15px rgba(0,245,212,0.2), inset 0 0 10px rgba(0,245,212,0.1)" : "none",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(0,245,212,0.4)";
                  e.currentTarget.style.color = "#cbd5e1";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#94a3b8";
                }
              }}
            >
              {/* Scanline cut logic for active category button */}
              {activeCategory === cat && (
                <span className="absolute left-0 top-0 h-full w-[2px]" style={{ background: "#00f5d4" }} />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Tecnologías */}
        <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTechs.map((tech, i) => (
            <TechCard key={tech.id} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
