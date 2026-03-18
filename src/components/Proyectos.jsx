import { useState, useEffect, useRef } from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "TeSoluciona3D",
    description: "Página Web de compañía de impresión 3D, Con React y tienda virtual sencilla.",
    icon: CloudArrowUpIcon,
    accent: "#ec4899",
    tag: "E-COMMERCE",
    actions: [
      { label: "Ir a la página", url: "https://www.tesoluciona3d.com/", type: "demo" },
    ],
  },
  {
    name: "Flowlytics HR",
    description: "Registro y control de empleados, con Flask, React y MySQL. Integración continua y despliegue automatizado con Docker y Jenkins.",
    icon: CloudArrowUpIcon,
    accent: "#0ea5e9",
    tag: "WEB-APP",
    actions: [
      { label: "GitHub", url: "https://github.com/Jeisonwy/System-HumanConnectv2", type: "repo" },
      { label: "Video", url: "https://www.youtube.com/watch?v=r93HIDID9lk", type: "video" },
    ],
  },
  {
    name: "POS App Business Solution PRO",
    description: "Sistema de punto de venta para restaurantes implementado con Google AppScript + Google Sheets + Tailwind CSS.",
    icon: LockClosedIcon,
    accent: "#39ff14",
    tag: "POS-SYS",
    actions: [
      { label: "Docs", url: "https://docs.google.com/document/d/1cSu6sSPB3hZSynDBwhGIQj-AOedaQh5AAiY51dP90q8/edit?usp=sharing", type: "repo" },
      { label: "Ver Demo", url: "https://script.google.com/macros/s/AKfycbw0JtD5XVg3A-oXG3VoWy-kfv8D34O0cdJqNHkjsaPk0JDEFy-GRLc9MqBGJQrrYY6H3A/exec", type: "demo" },
    ],
  },
  {
    name: "Flowlytics Solutions",
    description: "Herramienta integral desarrollada en Google AppSheet para control operativo, automatización de procesos y reportes.",
    icon: LockClosedIcon,
    accent: "#f59e0b",
    tag: "LOW-CODE",
    actions: [
      { label: "Docs", url: "https://drive.google.com/file/d/1QnW6kbf4oq3c4g6lyxGKFwT8pU6z_rXs/view?usp=sharing", type: "repo" },
      { label: "Ver Demo", url: "https://www.appsheet.com/start/d4ab49d4-47cb-46fd-9329-b64c36218cc2", type: "demo" },
    ],
  },
  {
    name: "API de MercadoPago",
    description: "Web App que consume la API de MercadoPago para gestionar cobros y transacciones en línea de forma segura.",
    icon: ArrowPathIcon,
    accent: "#7c3aed",
    tag: "FINTECH",
    actions: [
      { label: "Bitbucket", url: "https://bitbucket.org/jeisongarzon/poli/src/main/", type: "repo" },
      { label: "Demo", url: "https://polipayer.onrender.com/", type: "demo" },
    ],
  },
  {
    name: "Gestión Logística",
    description: "Proyectos corporativos orientados a recolección masiva de datos, analítica avanzada y control operativo logístico.",
    icon: FingerPrintIcon,
    accent: "#00f5d4",
    tag: "DATA",
    actions: [],
  },
];

/* ── Proy Card ──────────────────────────────────────────────── */
function ProyCard({ feature, index }) {
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
        background: "rgba(2,8,23,0.75)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${hovered ? feature.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 0 1px ${feature.accent}30, 0 8px 40px ${feature.accent}20`
          : "0 4px 20px rgba(0,0,0,0.4)",
        transform: visible
          ? hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.5s cubic-bezier(.22,1,.36,1)`,
        padding: "1.5rem",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: hovered
            ? `linear-gradient(90deg,transparent,${feature.accent},transparent)`
            : "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)",
          transition: "background 0.4s",
        }}
      />

      {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
        <div key={i} className={`absolute w-2.5 h-2.5 ${cls}`}
          style={{ borderColor: hovered ? feature.accent : "rgba(255,255,255,0.08)", transition: "border-color 0.3s" }} />
      ))}

      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 10%,${feature.accent}12,transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header content */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded"
            style={{
              color: feature.accent, background: `${feature.accent}15`,
              border: `1px solid ${feature.accent}30`, letterSpacing: "0.12em",
            }}>
            {feature.tag}
          </span>
          <span className="text-[9px] font-mono" style={{ color: "#334155" }}>
            [ID:{String(index + 1).padStart(2, "0")}]
          </span>
        </div>

        <div className="flex items-start gap-4 flex-1">
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-lg blur-md"
              style={{ background: feature.accent, opacity: hovered ? 0.35 : 0.05, transition: "opacity 0.4s" }} />
            <div className="relative w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? feature.accent + "50" : "rgba(255,255,255,0.08)"}`,
                transition: "border-color 0.4s",
              }}>
              <feature.icon className="w-6 h-6" style={{ color: hovered ? feature.accent : "#94a3b8", transition: "color 0.3s" }} />
            </div>
          </div>
          
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-snug mb-2"
              style={{
                fontFamily: "'Space Mono','Courier New',monospace", color: hovered ? "#f1f5f9" : "#cbd5e1", transition: "color 0.3s",
              }}>
              {feature.name}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
              {feature.description}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        {feature.actions?.length ? (
          <div className="mt-5 flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {feature.actions.map((action) => (
              <a
                key={action.label} href={action.url} target="_blank" rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 rounded"
                style={{
                  color: action.type === "repo" ? "#cbd5e1" : action.type === "demo" ? feature.accent : "#f43f5e",
                  background: action.type === "repo" ? "rgba(255,255,255,0.05)" : action.type === "demo" ? `${feature.accent}15` : "rgba(244,63,94,0.1)",
                  border: `1px solid ${action.type === "repo" ? "rgba(255,255,255,0.1)" : action.type === "demo" ? `${feature.accent}40` : "rgba(244,63,94,0.3)"}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 4px 12px ${action.type === "repo" ? "rgba(255,255,255,0.1)" : action.type === "demo" ? `${feature.accent}40` : "rgba(244,63,94,0.3)"}`;
                  e.currentTarget.style.background = action.type === "repo" ? "rgba(255,255,255,0.1)" : action.type === "demo" ? `${feature.accent}25` : "rgba(244,63,94,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = action.type === "repo" ? "rgba(255,255,255,0.05)" : action.type === "demo" ? `${feature.accent}15` : "rgba(244,63,94,0.1)";
                }}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-5 flex border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">RESTRICTED_ACCESS</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Proyectos() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative isolate min-h-screen py-24 sm:py-32 overflow-hidden" style={{ background: "#010b14" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Exo+2:wght@700;800;900&display=swap');
        @keyframes data-stream {0%{opacity:0;transform:translateY(-20px)}20%{opacity:0.5}80%{opacity:0.5}100%{opacity:0;transform:translateY(calc(100vh + 20px))}}
        @keyframes ping-slow {0%{transform:scale(1);opacity:0.8}100%{transform:scale(2.2);opacity:0}}
        @keyframes scan {0%{top:-2%}100%{top:102%}}
      `}</style>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,#0ea5e9,transparent)", opacity: 0.25, zIndex: 5, animation: "scan 12s linear infinite", animationDelay: "1s" }}
      />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute" style={{
        top: "-10%", left: "-10%", width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(236,72,153,0.06),transparent 70%)", filter: "blur(70px)",
      }} />
      <div className="pointer-events-none absolute" style={{
        bottom: "-10%", right: "-10%", width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(14,165,233,0.06),transparent 70%)", filter: "blur(70px)",
      }} />

      {/* Scanlines overlay */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)", zIndex: 4 }}
      />

      {/* Floating data chars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i} className="absolute font-mono text-[10px]"
            style={{
              left: `${(i / 12) * 100}%`, top: "-10px", color: i % 2 === 0 ? "#0ea5e9" : "#ec4899", opacity: 0,
              animation: `data-stream ${2.5 + (i % 3)}s ${i * 0.5}s linear infinite`,
            }}>
            {Math.random().toString(16).substring(2, 6).toUpperCase()}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center"
          style={{
            opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-mono font-bold uppercase tracking-widest"
            style={{
              color: "#0ea5e9", background: "rgba(14,165,233,0.07)", border: "1px solid rgba(14,165,233,0.22)", boxShadow: "0 0 20px rgba(14,165,233,0.08)",
            }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "#0ea5e9", animation: "ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#0ea5e9" }} />
            </span>
            PROYECTOS DESTACADOS
          </div>

          <p className="text-xs font-mono mb-2" style={{ color: "#334155" }}>
            &gt;&nbsp;/sys/records/portfolio_items
          </p>

          <h2 style={{
            fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#f1f5f9",
          }}>
            Soluciones{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg,#0ea5e9,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Eficientes
            </span>
          </h2>
          <p className="mt-4 mx-auto text-[0.95rem] leading-relaxed" style={{ color: "#64748b", maxWidth: "42rem" }}>
            Soluciones de software construidas para resolver problemas del mundo real. Desde arquitecturas integrales hasta sistemas de bajo código.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {features.map((feature, index) => (
              <ProyCard key={feature.name} feature={feature} index={index} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
