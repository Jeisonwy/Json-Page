import { useState, useEffect, useRef } from "react";
import {
  EnvelopeIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const contactos = [
  {
    name: "LinkedIn",
    description: "Perfil principal con trayectoria detallada, certificaciones y recomendaciones profesionales.",
    icon: BriefcaseIcon,
    action: { label: "Conectar", url: "https://www.linkedin.com/in/jsonlara/" },
    accent: "#0077b5", // Branding color
    sysName: "SYS_NET_LNK",
  },
  {
    name: "GitHub",
    description: "Explora mis repositorios, código fuente de proyectos Open Source y contribuciones al ecosistema.",
    icon: CodeBracketIcon,
    action: { label: "Ver Repositorios", url: "https://github.com/Jeisonwy" },
    accent: "#f5f5f5", // Branding color
    sysName: "SYS_NET_GHB",
  },
  {
    name: "Correo Electrónico",
    description: "Bandeja directa para colaboraciones, consultas o propuestas de arquitectura tecnológica.",
    icon: EnvelopeIcon,
    action: { label: "Enviar Mensaje", url: "mailto:jeisongg02@gmail.com" },
    accent: "#00f5d4", // Custom neon
    sysName: "SYS_NET_MAIL",
  },
];

function ContCard({ item, index }) {
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
      className="group relative flex flex-col items-center text-center rounded-xl overflow-hidden cursor-default"
      style={{
        background: "rgba(2,8,23,0.75)", backdropFilter: "blur(14px)",
        border: `1px solid ${hovered ? item.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? `0 0 0 1px ${item.accent}30, 0 4px 25px ${item.accent}20` : "0 4px 20px rgba(0,0,0,0.4)",
        transform: visible ? hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)" : "translateY(24px)",
        opacity: visible ? 1 : 0, transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.5s cubic-bezier(.22,1,.36,1)`,
        padding: "2rem",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: hovered ? `linear-gradient(90deg,transparent,${item.accent},transparent)` : "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)",
          transition: "background 0.4s",
        }}
      />

      {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
        <div key={i} className={`absolute w-3 h-3 ${cls}`} style={{ borderColor: hovered ? item.accent : "rgba(255,255,255,0.1)", transition: "border-color 0.3s" }} />
      ))}

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 10%,${item.accent}12,transparent 65%)`, opacity: hovered ? 1 : 0, transition: "opacity 0.5s" }}
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        <span className="self-start text-[9px] font-mono mb-4 px-2 py-0.5" style={{ color: "#64748b", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
           [{item.sysName}]
        </span>

        <div className="relative shrink-0 mb-6 h-16 w-16">
          <div className="absolute inset-0 rounded-2xl blur-md"
            style={{ background: item.accent, opacity: hovered ? 0.35 : 0.05, transition: "opacity 0.4s" }} />
          <div className="relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${hovered ? item.accent + "50" : "rgba(255,255,255,0.08)"}`, transition: "border-color 0.4s" }}>
            <item.icon className="w-8 h-8" style={{ color: hovered ? item.accent : "#94a3b8", transition: "color 0.3s" }} />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Mono', monospace", color: hovered ? "#f1f5f9" : "#cbd5e1", transition: "color 0.3s" }}>
          {item.name}
        </h3>

        <p className="text-xs leading-relaxed mb-8 flex-1" style={{ color: "#64748b" }}>
          {item.description}
        </p>

        <a
          href={item.action.url} target="_blank" rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center w-full py-3 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 rounded"
          style={{
            color: hovered ? "#010b14" : item.accent,
            background: hovered ? item.accent : "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? item.accent : "rgba(255,255,255,0.1)"}`,
            boxShadow: hovered ? `0 0 20px ${item.accent}60` : "none",
          }}
        >
          {item.action.label}
        </a>
      </div>
    </div>
  );
}

export default function Contacto() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

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
          backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,#7c3aed,transparent)", opacity: 0.2, zIndex: 5, animation: "scan 10s linear infinite" }}
      />

      {/* Floating data chars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <span key={i} className="absolute font-mono text-[10px]"
            style={{
              left: `${(i / 15) * 100}%`, top: "-10px", color: i % 2 === 0 ? "#7c3aed" : "#0ea5e9", opacity: 0,
              animation: `data-stream ${3 + (i % 3)}s ${i * 0.4}s linear infinite`,
            }}>
            {"x" + Math.random().toString(16).substring(2, 4)}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-2xl text-center"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          
          <div className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-mono font-bold uppercase tracking-widest"
            style={{ color: "#7c3aed", background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.22)", boxShadow: "0 0 20px rgba(124,58,237,0.08)" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "#7c3aed", animation: "ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#7c3aed" }} />
            </span>
            HABLEMOS
          </div>

          <p className="text-xs font-mono mb-2" style={{ color: "#334155" }}>
            &gt;&nbsp;/sys/records/connection_nodes
          </p>

          <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f1f5f9" }}>
            Conectemos de forma{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#7c3aed,#0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Profesional
            </span>
          </h2>
          <p className="mt-4 mx-auto text-[0.95rem] leading-relaxed" style={{ color: "#64748b", maxWidth: "42rem" }}>
            Canales directos para ponernos en contacto, revisar colaboraciones o proyectos conjuntos. Selecciona un nodo para iniciar la transmisión.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {contactos.map((item, index) => (
              <ContCard key={item.name} item={item} index={index} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
