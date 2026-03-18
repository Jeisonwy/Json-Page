import { useEffect, useRef, useState } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ShareIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Arquitectura Híbrida",
    description:
      "Diseño arquitecturas escalables on-premise y cloud, con enfoque transaccional y analítico.",
    icon: CloudArrowUpIcon,
    accent: "#00f5ff",
    tag: "INFRA",
  },
  {
    name: "Business Intelligence",
    description:
      "Transformación de datos en dashboards interactivos para la visualización orientada a KPIs.",
    icon: LockClosedIcon,
    accent: "#39ff14",
    tag: "DATA",
  },
  {
    name: "Liderazgo y Estrategia",
    description:
      "Guío equipos bajo metodologías ágiles como Scrum, asegurando calidad, escalabilidad y metas.",
    icon: ServerIcon,
    accent: "#7c3aed",
    tag: "MGMT",
  },
  {
    name: "Sistemas Distribuidos",
    description:
      "Creación proactiva de sistemas altamente robustos y automatización de flujos de trabajo.",
    icon: ShareIcon,
    accent: "#f97316",
    tag: "SYS",
  },
  {
    name: "Low Code & APIs",
    description:
      "Implementación ágil mediante AppSheet y conexiones robustas usando REST APIs.",
    icon: CodeBracketSquareIcon,
    accent: "#ec4899",
    tag: "API",
  },
];

/* ─── Circuit SVG Background ─────────────────────────────────────── */
function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.18 }}
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00f5ff" strokeWidth="0.4" />
        </pattern>

        {/* Animated dash for circuit traces */}
        <style>{`
          @keyframes trace-h {
            0%   { stroke-dashoffset: 200; opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { stroke-dashoffset: 0;   opacity: 0; }
          }
          @keyframes trace-v {
            0%   { stroke-dashoffset: 300; opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { stroke-dashoffset: 0;   opacity: 0; }
          }
          @keyframes node-pulse {
            0%, 100% { r: 3; opacity: 0.6; }
            50%       { r: 5; opacity: 1;   }
          }
          .th { stroke-dasharray: 200; animation: trace-h 4s linear infinite; }
          .tv { stroke-dasharray: 300; animation: trace-v 5s linear infinite; }
          .th2 { stroke-dasharray: 200; animation: trace-h 4s linear infinite 1.5s; }
          .tv2 { stroke-dasharray: 300; animation: trace-v 5s linear infinite 2.5s; }
          .th3 { stroke-dasharray: 200; animation: trace-h 4s linear infinite 0.8s; }
          .tv3 { stroke-dasharray: 300; animation: trace-v 5s linear infinite 3.2s; }
          .nd  { animation: node-pulse 2.5s ease-in-out infinite; }
          .nd2 { animation: node-pulse 2.5s ease-in-out infinite 1.2s; }
          .nd3 { animation: node-pulse 2.5s ease-in-out infinite 2.1s; }
        `}</style>
      </defs>

      {/* Base grid */}
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* ── Horizontal traces ── */}
      <line className="th"  x1="0"   y1="120" x2="200" y2="120" stroke="#00f5ff" strokeWidth="1.2" />
      <line className="th2" x1="0"   y1="300" x2="180" y2="300" stroke="#39ff14" strokeWidth="1.2" />
      <line className="th3" x1="80%"  y1="80"  x2="100%" y2="80" stroke="#7c3aed" strokeWidth="1.2" />
      <line className="th"  x1="60%" y1="450" x2="100%" y2="450" stroke="#00f5ff" strokeWidth="1.2" />
      <line className="th2" x1="0"   y1="550" x2="250" y2="550" stroke="#ec4899" strokeWidth="1.2" />
      <line className="th3" x1="40%" y1="650" x2="90%" y2="650" stroke="#39ff14" strokeWidth="1.2" />

      {/* ── Vertical traces ── */}
      <line className="tv"  x1="120" y1="0"   x2="120" y2="300" stroke="#00f5ff" strokeWidth="1.2" />
      <line className="tv2" x1="300" y1="100" x2="300" y2="500" stroke="#7c3aed" strokeWidth="1.2" />
      <line className="tv3" x1="80%" y1="0"   x2="80%" y2="200" stroke="#39ff14" strokeWidth="1.2" />
      <line className="tv"  x1="60%" y1="300" x2="60%" y2="700" stroke="#ec4899" strokeWidth="1.2" />
      <line className="tv2" x1="45%" y1="0"   x2="45%" y2="150" stroke="#f97316" strokeWidth="1.2" />

      {/* ── L-shaped corners ── */}
      <path d="M 180 300 L 300 300 L 300 180" className="th" fill="none" stroke="#00f5ff" strokeWidth="1.2" />
      <path d="M 60% 80 L 60% 180 L 80% 180" className="tv2" fill="none" stroke="#7c3aed" strokeWidth="1.2" />

      {/* ── Nodes (junction dots) ── */}
      <circle className="nd"  cx="120" cy="120" r="3" fill="#00f5ff" />
      <circle className="nd2" cx="300" cy="300" r="3" fill="#7c3aed" />
      <circle className="nd3" cx="180" cy="300" r="3" fill="#00f5ff" />
      <circle className="nd"  cx="300" cy="180" r="3" fill="#39ff14" />
      <circle className="nd2" cx="120" cy="300" r="3" fill="#ec4899" />
      <circle className="nd3" cx="120" cy="550" r="3" fill="#f97316" />
    </svg>
  );
}

/* ─── Floating Particles ─────────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 5,
    color: ["#00f5ff", "#39ff14", "#7c3aed", "#ec4899", "#f97316"][i % 5],
  }));

  return (
    <>
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          33%       { transform: translateY(-18px) scale(1.2); opacity: 1; }
          66%       { transform: translateY(10px) scale(0.85); opacity: 0.5; }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: p.color,
            boxShadow: `0 0 6px 2px ${p.color}88`,
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

/* ─── Scan Line ──────────────────────────────────────────────────── */
function ScanLine() {
  return (
    <>
      <style>{`
        @keyframes scan {
          0%   { top: -2%; opacity: 0; }
          5%   { opacity: 0.6; }
          95%  { opacity: 0.6; }
          100% { top: 102%; opacity: 0; }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(to right, transparent, #00f5ff66, #00f5ffcc, #00f5ff66, transparent)",
          animation: "scan 8s linear infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </>
  );
}

/* ─── Feature Card ───────────────────────────────────────────────── */
function FeatureCard({ feature, index, isLast }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes border-flow {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }
        @keyframes glitch-text {
          0%,100% { clip-path: inset(0 0 100% 0); }
          20%     { clip-path: inset(10% 0 60% 0); transform: translate(-2px,0); }
          40%     { clip-path: inset(50% 0 30% 0); transform: translate(2px,0); }
          60%     { clip-path: inset(30% 0 50% 0); transform: translate(-1px,0); }
          80%     { clip-path: inset(80% 0 5%  0); transform: translate(1px,0); }
        }
        .card-glitch:hover .glitch-overlay {
          animation: glitch-text 0.4s steps(1) 1;
        }
      `}</style>

      <div
        className={`card-glitch ${isLast ? "col-span-2 lg:col-span-1" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          borderRadius: "14px",
          padding: "1.5px",
          background: hovered
            ? `linear-gradient(135deg, ${feature.accent}, #0f172a, ${feature.accent}88, #0f172a)`
            : "linear-gradient(135deg, #ffffff18, #ffffff05)",
          backgroundSize: "300% 300%",
          animation: hovered ? "border-flow 2s linear infinite" : "none",
          transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2)",
          transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
          cursor: "default",
        }}
      >
        {/* Inner card */}
        <div
          style={{
            borderRadius: "13px",
            background: hovered
              ? `linear-gradient(135deg, #0f172a, ${feature.accent}14)`
              : "#0b1121cc",
            backdropFilter: "blur(20px)",
            padding: "1.25rem",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Corner accent lines */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              width: 20,
              height: 20,
              borderTop: `2px solid ${hovered ? feature.accent : "#ffffff22"}`,
              borderLeft: `2px solid ${hovered ? feature.accent : "#ffffff22"}`,
              transition: "border-color 0.3s",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              width: 20,
              height: 20,
              borderBottom: `2px solid ${hovered ? feature.accent : "#ffffff22"}`,
              borderRight: `2px solid ${hovered ? feature.accent : "#ffffff22"}`,
              transition: "border-color 0.3s",
            }}
          />

          {/* Tag */}
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "9px",
              fontFamily: "'Courier New', monospace",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: feature.accent,
              opacity: hovered ? 1 : 0.4,
              transition: "opacity 0.3s",
            }}
          >
            [{feature.tag}]
          </div>

          {/* Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hovered ? `${feature.accent}22` : "#ffffff0a",
                border: `1px solid ${hovered ? feature.accent : "#ffffff18"}`,
                boxShadow: hovered ? `0 0 16px ${feature.accent}55` : "none",
                transition: "all 0.35s",
                flexShrink: 0,
              }}
            >
              <feature.icon
                style={{
                  width: 20,
                  height: 20,
                  color: hovered ? feature.accent : "#94a3b8",
                  transition: "color 0.3s",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: hovered ? "#fff" : "#e2e8f0",
                letterSpacing: "0.03em",
                transition: "color 0.3s",
              }}
            >
              {feature.name}
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "0.72rem",
              lineHeight: 1.6,
              color: hovered ? "#cbd5e1" : "#64748b",
              transition: "color 0.3s",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {feature.description}
          </p>

          {/* Bottom data-bar */}
          <div
            style={{
              marginTop: "0.875rem",
              height: 2,
              borderRadius: 2,
              background: `linear-gradient(to right, ${feature.accent}, transparent)`,
              opacity: hovered ? 0.9 : 0.25,
              transition: "opacity 0.4s",
            }}
          />
        </div>
      </div>
    </>
  );
}

/* ─── Typewriter Hook ────────────────────────────────────────────── */
function useTypewriter(text, speed = 55, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, speed, startDelay]);
  return displayed;
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function MainPage() {
  const subtitle = useTypewriter("Technical Solutions Engineer", 60, 600);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Exo+2:wght@300;400;700;900&display=swap');

        @keyframes hue-rotate {
          0%   { filter: hue-rotate(0deg);   }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes flicker {
          0%,19%,21%,23%,25%,54%,56%,100% { opacity: 1; }
          20%,22%,24%,55% { opacity: 0.4; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes glow-pulse {
          0%,100% { box-shadow: 0 0 12px #00f5ff55, 0 0 30px #00f5ff22; }
          50%     { box-shadow: 0 0 24px #00f5ffaa, 0 0 60px #00f5ff44; }
        }
        @keyframes terminal-blink {
          0%,49% { opacity: 1; }
          50%,100% { opacity: 0; }
        }
        @keyframes badge-scan {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .fade-up-1 { animation: fade-up 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation: fade-up 0.7s ease forwards; animation-delay: 0.35s; opacity: 0; }
        .fade-up-3 { animation: fade-up 0.7s ease forwards; animation-delay: 0.6s; opacity: 0; }
        .fade-up-4 { animation: fade-up 0.7s ease forwards; animation-delay: 0.85s; opacity: 0; }
        .fade-up-5 { animation: fade-up 0.7s ease forwards; animation-delay: 1.1s; opacity: 0; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 0.08em;
          font-size: 0.8rem;
          padding: 0.75rem 1.6rem;
          border-radius: 6px;
          color: #020617;
          background: #00f5ff;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
          animation: glow-pulse 2.5s ease-in-out infinite;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent, #ffffff44, transparent);
          transition: left 0.4s;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover { background: #22d3ee; transform: translateY(-2px); }

        .btn-secondary {
          font-family: 'Share Tech Mono', monospace;
          letter-spacing: 0.08em;
          font-size: 0.8rem;
          padding: 0.75rem 1.6rem;
          border-radius: 6px;
          color: #00f5ff;
          background: transparent;
          border: 1px solid #00f5ff55;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-secondary:hover {
          background: #00f5ff12;
          border-color: #00f5ffaa;
          transform: translateY(-2px);
          box-shadow: 0 0 20px #00f5ff33;
        }
      `}</style>

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "5rem 0",
          overflow: "hidden",
          background: "radial-gradient(ellipse 80% 60% at 20% 30%, #001a2e 0%, #020617 60%, #05030f 100%)",
          fontFamily: "'Exo 2', sans-serif",
        }}
      >
        {/* Circuit background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <CircuitBackground />
        </div>

        {/* Deep radial glow overlays */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, #00f5ff18 0%, transparent 70%)",
            animation: "hue-rotate 20s linear infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "-10%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7c3aed18 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Particles */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
          <Particles />
        </div>

        {/* Scan line */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
          <ScanLine />
        </div>

        {/* ── CONTENT ── */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* ── Left: Text ── */}
            <div>
              {/* Status badge */}
              <div className="fade-up-1">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.3rem 0.9rem",
                    borderRadius: "100px",
                    border: "1px solid #00f5ff33",
                    background:
                      "linear-gradient(90deg, #00f5ff08, #00f5ff18, #00f5ff08)",
                    backgroundSize: "200% auto",
                    animation: "badge-scan 3s linear infinite",
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "#00f5ff",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#39ff14",
                      boxShadow: "0 0 8px #39ff14",
                      animation: "terminal-blink 1.2s step-end infinite",
                    }}
                  />
                  SYS_STATUS: DISPONIBILIDAD_ABIERTA
                </span>
              </div>

              {/* Name */}
              <div className="fade-up-2">
                <p
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.35em",
                    color: "#7c3aed",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  &gt; INIT // Jeison Garzon Lara
                </p>
              </div>

              {/* Title with typewriter */}
              <div className="fade-up-3">
                <h1
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "#fff",
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {subtitle}
                  <span
                    style={{
                      display: "inline-block",
                      width: "2px",
                      height: "0.9em",
                      background: "#00f5ff",
                      marginLeft: "3px",
                      verticalAlign: "text-bottom",
                      animation: "terminal-blink 0.8s step-end infinite",
                    }}
                  />
                </h1>
              </div>

              {/* Subtitle */}
              <div className="fade-up-4">
                <div
                  style={{
                    borderLeft: "3px solid #00f5ff",
                    paddingLeft: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7 }}>
                    Optimización de procesos y{" "}
                    <span
                      style={{
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Arquitectura de soluciones digitales.
                    </span>
                  </p>
                </div>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.88rem",
                    lineHeight: 1.8,
                    maxWidth: "520px",
                  }}
                >
                  Diseño e implemento soluciones tecnológicas que traducen necesidades de negocio en sistemas funcionales y escalables. Combino criterio técnico, análisis de datos y visión estratégica para generar impacto medible en entornos organizacionales.
                </p>
              </div>

              {/* CTAs */}
              <div
                className="fade-up-5"
                style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}
              >
                <a href="#experiencia" className="btn-primary">
                  &gt; VER_EXPERIENCIA
                </a>
                <a
                  href="https://www.linkedin.com/in/jsonlara/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  // LINKEDIN
                </a>
              </div>

              {/* Console log decoration */}
              <div
                className="fade-up-5"
                style={{ marginTop: "2rem" }}
              >
                <div
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#1e3a5f",
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ color: "#39ff1455" }}>// stack loaded: </span>
                  <span style={{ color: "#00f5ff33" }}>cloud · bi · scrum · distributed · apis</span>
                </div>
              </div>
            </div>

            {/* ── Right: Feature Cards ── */}
            <div style={{ position: "relative" }}>
              {/* Center glow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #00f5ff14, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Section label */}
              <div
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "#00f5ff55",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                }}
              >
                &gt; CORE_CAPABILITIES [{features.length}]
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.875rem",
                }}
              >
                {features.map((feature, index) => (
                  <FeatureCard
                    key={feature.name}
                    feature={feature}
                    index={index}
                    isLast={index === features.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}