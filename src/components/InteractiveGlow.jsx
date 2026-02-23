import React, { useEffect, useRef } from "react";

const TINTS = {
  blue: {
    // azul frío tipo cyan/indigo suave
    colorA: "rgba(56,189,248,0.10)", // cyan suave
    colorB: "rgba(99,102,241,0.10)", // indigo suave
  },
  rose: {
    colorA: "rgba(244,63,94,0.10)",
    colorB: "rgba(255,255,255,0.08)",
  },
};

export default function InteractiveGlow({
  className = "",
  intensity = 0.085, // más sutil por defecto
  size = 780, // más grande = menos chillón
  tint = "blue", // "blue" recomendado para tu theme
}) {
  const ref = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setPos = (x, y) => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    // inicia en el centro de la ventana
    setPos(window.innerWidth / 2, window.innerHeight / 2);

    const onMove = (e) => {
      if (!ref.current) return;
      if (raf.current) cancelAnimationFrame(raf.current);

      raf.current = requestAnimationFrame(() => {
        // ahora es global: coordenadas directas de la ventana
        setPos(e.clientX, e.clientY);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const { colorA, colorB } = TINTS[tint] ?? TINTS.blue;

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}
      style={{
        "--glow": intensity,
        "--size": `${size}px`,
      }}
    >
      {/* Base glow (blanco muy suave) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(var(--size) circle at var(--mx) var(--my), rgba(255,255,255,var(--glow)), transparent 62%)",
          filter: "blur(22px)",
          opacity: 0.55,
          mixBlendMode: "screen",
          transform: "translateZ(0)",
        }}
      />

      {/* Glow color A (cyan suave) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(calc(var(--size) * 0.9) circle at calc(var(--mx) + 60px) calc(var(--my) - 40px), ${colorA}, transparent 66%)`,
          filter: "blur(28px)",
          opacity: 0.7,
          mixBlendMode: "screen",
          transform: "translateZ(0)",
        }}
      />

      {/* Glow color B (indigo suave) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(calc(var(--size) * 0.75) circle at calc(var(--mx) - 70px) calc(var(--my) + 50px), ${colorB}, transparent 68%)`,
          filter: "blur(30px)",
          opacity: 0.6,
          mixBlendMode: "screen",
          transform: "translateZ(0)",
        }}
      />

      {/* Grano sutil */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
