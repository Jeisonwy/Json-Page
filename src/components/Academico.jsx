import { useState, useEffect, useRef } from "react";

const people = [
  {
    name: "Ingenieria de Software",
    role: "Politecnico Grancolombiano",
    year: "2022–2026",
    imageUrl: "https://www.poli.edu.co/themes/custom/ptecnico2023/logo-politecnico-grancolombiano-white.svg",
    accent: "#00f5d4",
    tag: "PREGRADO",
    level: 100,
  },
  {
    name: "Google Cloud Computing Foundations Certificate",
    role: "Google Skills",
    year: "2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    accent: "#0ea5e9",
    tag: "CERTIFICACIÓN",
    level: 100,
  },
  {
    name: "Diplomado en Ciencias de la Computación",
    role: "Politecnico Grancolombiano",
    year: "2025",
    imageUrl: "https://www.poli.edu.co/themes/custom/ptecnico2023/logo-politecnico-grancolombiano-white.svg",
    accent: "#7c3aed",
    tag: "DIPLOMADO",
    level: 100,
  },
  {
    name: "Soporte de Tecnologías de la Información",
    role: "Google · Coursera",
    year: "2022",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    accent: "#f59e0b",
    tag: "ESPECIALIZACIÓN",
    level: 100,
  },
  {
    name: "Habilidades de Programación Misión TIC",
    role: "Universidad Nacional de Colombia",
    year: "2021",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Logotipo_de_la_Universidad_Nacional_de_Colombia.svg/3840px-Logotipo_de_la_Universidad_Nacional_de_Colombia.svg.png",
    accent: "#10b981",
    tag: "DIPLOMADO",
    level: 100,
  },
];

/* ── Animated skill bar ─────────────────────────────────────── */
function SkillBar({ level, accent, active }) {
  return (
    <div className="mt-4 w-full h-1 rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.05)" }}>
      <div
        style={{
          height: "100%",
          width: active ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${accent}, ${accent}88)`,
          boxShadow: active ? `0 0 8px ${accent}80` : "none",
          transition: "width 0.9s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease",
          borderRadius: "9999px",
        }}
      />
    </div>
  );
}

/* ── Single card ────────────────────────────────────────────── */
function AcadCard({ person, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-xl overflow-hidden cursor-default"
      style={{
        background: "rgba(2,8,23,0.75)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${hovered ? person.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 0 1px ${person.accent}30, 0 8px 40px ${person.accent}20`
          : "0 4px 20px rgba(0,0,0,0.4)",
        transform: visible
          ? hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.5s cubic-bezier(.22,1,.36,1)`,
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: hovered
            ? `linear-gradient(90deg,transparent,${person.accent},transparent)`
            : "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)",
          transition: "background 0.4s",
        }}
      />

      {/* Corner brackets */}
      {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
        <div key={i} className={`absolute w-2.5 h-2.5 ${cls}`}
          style={{ borderColor: hovered ? person.accent : "rgba(255,255,255,0.08)", transition: "border-color 0.3s" }} />
      ))}

      {/* Inner glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 20%,${person.accent}12,transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      />

      <div className="relative z-10 p-5">
        {/* Tag + year row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded"
            style={{
              color: person.accent,
              background: `${person.accent}15`,
              border: `1px solid ${person.accent}30`,
              letterSpacing: "0.12em",
            }}>
            {person.tag}
          </span>
          <span className="text-[9px] font-mono" style={{ color: "#334155" }}>
            {person.year}
          </span>
        </div>

        {/* Logo + text */}
        <div className="flex items-start gap-4">
          {/* Logo bubble */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-lg blur-md"
              style={{ background: person.accent, opacity: hovered ? 0.25 : 0.1, transition: "opacity 0.4s" }} />
            <div className="relative w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? person.accent + "50" : "rgba(255,255,255,0.08)"}`,
                transition: "border-color 0.4s",
              }}>
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-10 h-10 object-contain"
                style={{
                  filter: "brightness(0) invert(1)",
                  opacity: hovered ? 1 : 0.6,
                  transition: "opacity 0.4s",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0">
            <h3 className="text-sm font-bold leading-snug mb-1"
              style={{
                fontFamily: "'Space Mono','Courier New',monospace",
                color: hovered ? "#f1f5f9" : "#cbd5e1",
                transition: "color 0.3s",
              }}>
              {person.name}
            </h3>
            <p className="text-xs" style={{ color: "#475569" }}>
              {person.role}
            </p>
          </div>
        </div>

        {/* Skill/completion bar */}
        <SkillBar level={person.level} accent={person.accent} active={visible} />

        {/* Bottom status row */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full"
              style={{ background: person.accent, boxShadow: hovered ? `0 0 6px ${person.accent}` : "none" }} />
            <span className="text-[9px] font-mono uppercase tracking-widest"
              style={{ color: hovered ? person.accent : "#1e293b" }}>
              {hovered ? "VERIFIED" : "STANDBY"}
            </span>
          </div>
          <span className="text-[9px] font-mono" style={{ color: "#1e293b" }}>
            {String(index + 1).padStart(2, "0")}/{String(people.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </li>
  );
}

/* ── Main ───────────────────────────────────────────────────── */
export default function Academico() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative isolate min-h-screen py-24 sm:py-32 overflow-hidden"
      style={{ background: "#010b14" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Exo+2:wght@700;800;900&display=swap');
        @keyframes data-stream{0%{opacity:0;transform:translateY(-20px)}20%{opacity:0.5}80%{opacity:0.5}100%{opacity:0;transform:translateY(calc(100vh + 20px))}}
        @keyframes ping-slow{0%{transform:scale(1);opacity:0.8}100%{transform:scale(2.2);opacity:0}}
        @keyframes scan{0%{top:-2%}100%{top:102%}}
        @keyframes grid-fade{from{opacity:0}to{opacity:1}}
      `}</style>

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,212,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,212,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg,transparent,#00f5d4,transparent)",
          opacity: 0.25, zIndex: 5,
          animation: "scan 10s linear infinite",
        }}
      />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute" style={{
        top: "-5%", right: "-5%", width: "35vw", height: "35vw", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(0,245,212,0.07),transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div className="pointer-events-none absolute" style={{
        bottom: "0", left: "-5%", width: "30vw", height: "30vw", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(124,58,237,0.08),transparent 70%)",
        filter: "blur(60px)",
      }} />

      {/* Floating data chars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} className="absolute font-mono text-[10px]"
            style={{
              left: `${(i / 14) * 100}%`,
              top: "-10px",
              color: i % 2 === 0 ? "#00f5d4" : "#7c3aed",
              opacity: 0,
              animation: `data-stream ${2 + (i % 3)}s ${i * 0.4}s linear infinite`,
            }}>
            {Math.random().toString(36).substring(2, 4).toUpperCase()}
          </span>
        ))}
      </div>

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)",
          zIndex: 4,
        }}
      />

      {/* ══ CONTENT ══ */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" style={{ zIndex: 10 }}>
        <div className="grid gap-20 xl:grid-cols-3">

          {/* ── LEFT: Title block ── */}
          <div className="max-w-xl"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-8 text-xs font-mono font-bold uppercase tracking-widest"
              style={{
                color: "#00f5d4",
                background: "rgba(0,245,212,0.07)",
                border: "1px solid rgba(0,245,212,0.22)",
                boxShadow: "0 0 20px rgba(0,245,212,0.08)",
              }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "#00f5d4", animation: "ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#00f5d4" }} />
              </span>
              HITOS EDUCATIVOS
            </div>

            {/* Terminal path line */}
            <p className="text-xs font-mono mb-3" style={{ color: "#334155" }}>
              &gt;&nbsp;/jeison/formacion/academica
            </p>

            {/* Main title */}
            <h2 style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "clamp(2rem,4vw,3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f1f5f9",
              marginBottom: "1.5rem",
            }}>
              Logros{" "}
              <span style={{
                backgroundImage: "linear-gradient(135deg,#00f5d4,#0ea5e9,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Académicos
              </span>
            </h2>

            {/* Divider */}
            <div className="mb-6 h-px w-20"
              style={{ background: "linear-gradient(90deg,#00f5d4,transparent)" }} />

            <p className="text-sm leading-relaxed text-justify" style={{ color: "#64748b" }}>
              El aprendizaje continuo es la base de la ingeniería moderna. A lo largo de mi formación he
              consolidado bases técnicas sólidas y una visión analítica certificada por instituciones de
              prestigio.
            </p>

            {/* Stats block */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { label: "CERTIFICACIONES", value: "04" },
                { label: "INSTITUCIONES",   value: "04" },
                { label: "AÑOS FORMACIÓN",  value: "05+" },
                { label: "STACK CUBIERTO",  value: "∞"  },
              ].map((s) => (
                <div key={s.label} className="rounded-lg p-3"
                  style={{
                    background: "rgba(0,245,212,0.03)",
                    border: "1px solid rgba(0,245,212,0.1)",
                  }}>
                  <div className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: "#334155" }}>
                    {s.label}
                  </div>
                  <div className="text-lg font-mono font-bold" style={{ color: "#00f5d4" }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            {/* System line */}
            <div className="mt-8 flex items-center gap-2">
              <div className="h-px flex-1" style={{ background: "rgba(0,245,212,0.08)" }} />
              <span className="text-[9px] font-mono" style={{ color: "#1e293b" }}>
                RECORD.VERIFIED
              </span>
            </div>
          </div>

          {/* ── RIGHT: Cards grid ── */}
          <ul role="list" className="grid gap-4 sm:grid-cols-2 xl:col-span-2 self-start">
            {people.map((person, i) => (
              <AcadCard key={person.name} person={person} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}