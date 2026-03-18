import { useState, useEffect, useRef } from "react";
import PdfEmbed from "./PdfEmbed";

const posts = [
  {
    id: 1,
    title: "Desarrollador y líder de proyectos IT",
    description:
      "Planificación, desarrollo e implementación de soluciones tecnológicas de bajo código para optimizar procesos internos y mejorar la eficiencia operativa.",
    date: "Junio, 2023",
    datetime: "2023-06-01",
    category: { title: "Ingeniería", tag: "LOW-CODE" },
    author: {
      name: "AppSheet, Apps Script",
      role: "Low-code Dev",
      imageUrl:
        "https://play-lh.googleusercontent.com/rW4cFCs9COZhpTYlW9x9OL2lKAy9kkPCTEfEUliybKOiXLsfi2BlOWyvZolbCiszcj4",
    },
    accent: "#00f5d4",
  },
  {
    id: 2,
    title: "Análisis de datos e Inteligencia de Negocios",
    description:
      "Desarrollo de dashboards interactivos y automatización de informes utilizando Looker Studio y Domo BI para facilitar la toma de decisiones basada en datos.",
    date: "Junio, 2023",
    datetime: "2023-06-01",
    category: { title: "Data Analyst", tag: "DATA" },
    author: {
      name: "Looker Studio, Domo BI",
      role: "Data Visualization",
      imageUrl: "https://www.svgrepo.com/show/354012/looker-icon.svg",
    },
    accent: "#7c3aed",
  },
  {
    id: 3,
    title: "Soporte técnico y gestión Scrum",
    description:
      "Soporte técnico de primer nivel, resolución de incidencias y gestión de proyectos con metodologías ágiles (Scrum) para asegurar entregas oportunas.",
    date: "Junio, 2023",
    datetime: "2023-06-01",
    category: { title: "Service Desk", tag: "SCRUM" },
    author: {
      name: "Jira, Confluence",
      role: "Project Management",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-jira-logo-icon-svg-download-png-3030001.png",
    },
    accent: "#f59e0b",
  },
];

/* ── Single Pro Card ────────────────────────────────────────── */
function ProCard({ post, index }) {
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
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-between rounded-xl overflow-hidden cursor-default"
      style={{
        background: "rgba(2,8,23,0.75)",
        backdropFilter: "blur(14px)",
        border: `1px solid ${hovered ? post.accent + "50" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 0 1px ${post.accent}30, 0 8px 40px ${post.accent}20`
          : "0 4px 20px rgba(0,0,0,0.4)",
        transform: visible
          ? hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.5s cubic-bezier(.22,1,.36,1)`,
        padding: "1.5rem",
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: hovered
            ? `linear-gradient(90deg,transparent,${post.accent},transparent)`
            : "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)",
          transition: "background 0.4s",
        }}
      />

      {/* Corner brackets */}
      {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
        <div key={i} className={`absolute w-2.5 h-2.5 ${cls}`}
          style={{ borderColor: hovered ? post.accent : "rgba(255,255,255,0.08)", transition: "border-color 0.3s" }} />
      ))}

      {/* Inner glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%,${post.accent}12,transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded"
            style={{
              color: post.accent,
              background: `${post.accent}15`,
              border: `1px solid ${post.accent}30`,
              letterSpacing: "0.12em",
            }}>
            {post.category.tag}
          </span>
          <time dateTime={post.datetime} className="text-[9px] font-mono" style={{ color: "#334155" }}>
            {post.date}
          </time>
        </div>

        {/* Title & Desc */}
        <div className="mt-2 flex-1">
          <h3 className="text-lg font-bold leading-snug mb-3"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: hovered ? "#f1f5f9" : "#cbd5e1",
              transition: "color 0.3s",
            }}>
            {post.title}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
            {post.description}
          </p>
        </div>

        {/* Footer info (Author/Tech) */}
        <div className="mt-6 flex items-center gap-x-4 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-lg blur-md"
              style={{ background: post.accent, opacity: hovered ? 0.25 : 0.05, transition: "opacity 0.4s" }} />
            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? post.accent + "50" : "rgba(255,255,255,0.08)"}`,
                transition: "border-color 0.4s",
              }}>
              <img
                src={post.author.imageUrl}
                alt={post.author.role}
                className="w-full h-full object-contain p-1.5"
                style={{
                  filter: "brightness(0) invert(1)",
                  opacity: hovered ? 1 : 0.6,
                  transition: "opacity 0.4s",
                }}
              />
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold leading-none truncate mb-1" style={{ color: "#f1f5f9", fontFamily: "'Space Mono', monospace" }}>
              {post.author.name}
            </p>
            <p className="text-[9px] font-mono uppercase tracking-widest" style={{ color: post.accent }}>
              {post.author.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Profesional() {
  const reconocimientoPdf =
    "https://drive.google.com/file/d/1i7nzf8lPuQGWABo7BTNllZHBJ8dTzMBc/preview?usp=sharing";

  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative isolate min-h-screen py-24 sm:py-32 overflow-hidden" style={{ background: "#010b14" }}>
      
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
            linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg,transparent,#7c3aed,transparent)",
          opacity: 0.25, zIndex: 5,
          animation: "scan 10s linear infinite",
          animationDelay: "3s"
        }}
      />

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute" style={{
        top: "-10%", right: "-10%", width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(124,58,237,0.06),transparent 70%)",
        filter: "blur(70px)",
      }} />
      <div className="pointer-events-none absolute" style={{
        bottom: "-10%", left: "-10%", width: "40vw", height: "40vw", borderRadius: "50%",
        background: "radial-gradient(circle,rgba(0,245,212,0.06),transparent 70%)",
        filter: "blur(70px)",
      }} />

      {/* Scanlines overlay */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.06) 2px,rgba(0,0,0,0.06) 4px)",
          zIndex: 4,
        }}
      />

      {/* Floating data chars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="absolute font-mono text-[10px]"
            style={{
              left: `${(i / 10) * 100}%`,
              top: "-10px",
              color: i % 2 === 0 ? "#7c3aed" : "#00f5d4",
              opacity: 0,
              animation: `data-stream ${3 + (i % 3)}s ${i * 0.7}s linear infinite`,
            }}>
            {(Math.random()*100).toFixed(0).padStart(2,'0')}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="mx-auto max-w-2xl lg:mx-0"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 text-xs font-mono font-bold uppercase tracking-widest"
            style={{
              color: "#7c3aed",
              background: "rgba(124,58,237,0.07)",
              border: "1px solid rgba(124,58,237,0.22)",
              boxShadow: "0 0 20px rgba(124,58,237,0.08)",
            }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full"
                style={{ background: "#7c3aed", animation: "ping-slow 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#7c3aed" }} />
            </span>
            EXPERIENCIA PROFESIONAL
          </div>

          <p className="text-xs font-mono mb-2" style={{ color: "#334155" }}>
            &gt;&nbsp;/sys/records/trajectory
          </p>

          <h2 style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: "clamp(2rem,4vw,3.2rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
          }}>
            <span style={{
              backgroundImage: "linear-gradient(135deg,#7c3aed,#00f5d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              4 Años
            </span> de recorrido
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-justify" style={{ color: "#64748b", maxWidth: "42rem" }}>
            Durante mi carrera profesional he tenido la oportunidad de crear herramientas corporativas, optimizar bases de datos y liderar proyectos bajo marcos de trabajo exigentes. Mis fortalezas residen en la transformación de datos en decisiones medibles.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
             <ProCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* PDF embed (reconocimiento) */}
        <div className="mt-20 relative overflow-hidden rounded-xl p-8 sm:p-12 cursor-default group"
          style={{
            background: "rgba(2,8,23,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}>
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,#0ea5e9,transparent)", opacity: 0.5 }} />

          {/* Corner brackets */}
          {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
            <div key={i} className={`absolute w-3 h-3 ${cls}`}
              style={{ borderColor: "rgba(0,245,212,0.3)" }} />
          ))}
          
          <div className="mb-6 max-w-2xl relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-3"
                style={{ fontFamily: "'Exo 2', sans-serif", color: "#e2e8f0" }}>
                 Reconocimientos Oficiales
                 <span className="flex h-1.5 w-1.5 rounded-full" style={{ background: "#10b981", boxShadow: "0 0 8px #10b981", animation: "ping-slow 2s infinite" }}></span>
              </h3>
              <p className="mt-2 text-xs" style={{ color: "#64748b" }}>
                Evidencia de impacto generado y cumplimiento de objetivos KPI organizacionales.
              </p>
            </div>
            
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded"
              style={{
                color: "#0ea5e9",
                background: "rgba(14,165,233,0.15)",
                border: "1px solid rgba(14,165,233,0.3)",
              }}>
              DOCUMENT.PDF
            </span>
          </div>

          <div className="relative z-10 rounded-lg overflow-hidden"
            style={{
              background: "#010b14",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(14,165,233,0.05)",
            }}>
            <PdfEmbed
              title="Reconocimiento por desempeño"
              src={reconocimientoPdf}
              height={620}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
