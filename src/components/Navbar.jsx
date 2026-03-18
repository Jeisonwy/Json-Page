import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Inicio",       href: "/Json-Page" },
  { name: "Academico",    href: "/academico" },
  { name: "Profesional",  href: "/profesional" },
  { name: "Proyectos",    href: "/proyectos" },
  { name: "Tecnologías",  href: "/tecnologias" },
  { name: "Contacto",     href: "/contacto" },
];

/* Tiny bracket decoration reused on active/hover items */
function Bracket({ color = "#00f5d4" }) {
  return (
    <>
      <span
        className="absolute top-1 left-0 w-1.5 h-1.5 border-t border-l"
        style={{ borderColor: color, transition: "border-color 0.3s" }}
      />
      <span
        className="absolute bottom-1 right-0 w-1.5 h-1.5 border-b border-r"
        style={{ borderColor: color, transition: "border-color 0.3s" }}
      />
    </>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [glitchIdx, setGlitchIdx] = useState(null);

  /* Add depth shadow when scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Random logo glitch pulse every few seconds */
  useEffect(() => {
    const id = setInterval(() => {
      setGlitchIdx(Date.now());
      setTimeout(() => setGlitchIdx(null), 400);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

        @keyframes nav-scan {
          0%   { left: -100%; }
          100% { left: 110%;  }
        }
        @keyframes logo-glitch {
          0%,100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
          20%     { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 0); }
          40%     { clip-path: inset(50% 0 20% 0); transform: translate(3px,  0); }
          60%     { clip-path: inset(80% 0  5% 0); transform: translate(-2px, 0); }
          80%     { clip-path: inset( 5% 0 80% 0); transform: translate(2px,  0); }
        }
        @keyframes ping-dot {
          0%   { transform: scale(1);   opacity: .8; }
          100% { transform: scale(2.2); opacity: 0;  }
        }
        @keyframes underline-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes mobile-slide-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .nav-link-underline {
          position: absolute;
          bottom: 2px;
          left: 8px;
          right: 8px;
          height: 1px;
          transform-origin: left;
          transform: scaleX(0);
          background: linear-gradient(90deg, #00f5d4, #0ea5e9);
          transition: transform 0.3s cubic-bezier(.22,1,.36,1);
        }
        .nav-link:hover .nav-link-underline,
        .nav-link.active .nav-link-underline {
          transform: scaleX(1);
        }
      `}</style>

      <Disclosure
        as="nav"
        className="relative z-40"
        style={{
          background: scrolled
            ? "rgba(1,11,20,0.92)"
            : "rgba(1,11,20,0.75)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,245,212,0.12)",
          boxShadow: scrolled
            ? "0 4px 40px rgba(0,245,212,0.06), 0 1px 0 rgba(0,245,212,0.1)"
            : "none",
          transition: "background 0.4s, box-shadow 0.4s",
        }}
      >
        {/* Horizontal scan shimmer */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 w-24 overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(0,245,212,0.06),transparent)",
            animation: "nav-scan 6s linear infinite",
            zIndex: 0,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* ── LOGO ── */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Animated status dot */}
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{
                    background: "#00f5d4",
                    animation: "ping-dot 2s cubic-bezier(0,0,0.2,1) infinite",
                  }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "#00f5d4" }}
                />
              </span>

              {/* Logo image with glitch overlay */}
              <div className="relative h-8">
                <img
                  alt="Logo"
                  src="https://i.postimg.cc/SKWYcDXN/lgo.png"
                  className="h-8 w-auto"
                  style={{
                    filter: "brightness(0) invert(1)",
                    opacity: 0.9,
                  }}
                />
                {/* Glitch clone */}
                {glitchIdx && (
                  <img
                    key={glitchIdx}
                    alt=""
                    aria-hidden
                    src="https://i.postimg.cc/SKWYcDXN/lgo.png"
                    className="absolute inset-0 h-8 w-auto"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(500%) hue-rotate(130deg)",
                      animation: "logo-glitch 0.4s steps(1) forwards",
                      opacity: 0.7,
                    }}
                  />
                )}
              </div>

              {/* Name tag */}
              <div className="hidden sm:flex flex-col leading-none">
                <span
                  className="text-[9px] font-mono uppercase tracking-[0.35em]"
                  style={{ color: "#334155" }}
                >
                  SYS.INIT
                </span>
                <span
                  className="text-[11px] font-mono font-bold"
                  style={{ color: "#00f5d4" }}
                >
                  JSON_LARA
                </span>
              </div>
            </div>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden sm:flex items-center gap-1">
              {navigation.map((item, i) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link relative px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 rounded-md ${isActive ? "active" : ""}`}
                    style={{
                      color: isActive ? "#00f5d4" : "#64748b",
                      background: isActive
                        ? "rgba(0,245,212,0.06)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(0,245,212,0.18)"
                        : "1px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#cbd5e1";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    {/* Corner brackets on active */}
                    {isActive && <Bracket color="#00f5d4" />}

                    {/* Index prefix */}
                    <span
                      className="mr-1 opacity-40"
                      style={{ fontSize: "9px", color: isActive ? "#00f5d4" : "#334155" }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>

                    {item.name}

                    {/* Sliding underline */}
                    <span className="nav-link-underline" />
                  </Link>
                );
              })}
            </div>

            {/* ── RIGHT BADGE ── */}
            <div className="hidden sm:flex items-center gap-2">
              <div
                className="flex items-center gap-1.5 rounded px-2.5 py-1"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }}
                />
                <span
                  className="text-[9px] font-mono font-bold uppercase tracking-widest"
                  style={{ color: "#7c3aed" }}
                >
                  OPEN
                </span>
              </div>
            </div>

            {/* ── MOBILE HAMBURGER ── */}
            <div className="flex sm:hidden">
              <DisclosureButton
                className="inline-flex items-center justify-center rounded-md p-2 transition-all duration-200"
                style={{
                  color: "#64748b",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <Bars3Icon aria-hidden className="block size-5 group-data-open:hidden" />
                <XMarkIcon aria-hidden className="hidden size-5 group-data-open:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* ── MOBILE PANEL ── */}
        <DisclosurePanel
          className="sm:hidden"
          style={{
            background: "rgba(1,11,20,0.97)",
            borderTop: "1px solid rgba(0,245,212,0.1)",
            animation: "mobile-slide-in 0.25s ease",
          }}
        >
          <div className="px-3 py-3 space-y-1">
            {/* Header line */}
            <div className="flex items-center gap-2 px-2 pb-2 mb-1"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "#334155" }}>
                NAV.MENU
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(0,245,212,0.1)" }} />
            </div>

            {navigation.map((item, i) => {
              const isActive = location.pathname === item.href;
              return (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="flex items-center gap-3 w-full rounded-lg px-3 py-2.5 transition-all duration-200"
                  style={{
                    color: isActive ? "#00f5d4" : "#64748b",
                    background: isActive
                      ? "rgba(0,245,212,0.07)"
                      : "transparent",
                    border: `1px solid ${isActive ? "rgba(0,245,212,0.2)" : "transparent"}`,
                  }}
                >
                  <span
                    className="text-[9px] font-mono font-bold"
                    style={{ color: isActive ? "#00f5d4" : "#1e293b" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    {item.name}
                  </span>
                  {isActive && (
                    <span className="ml-auto text-[9px] font-mono" style={{ color: "#00f5d4" }}>
                      ◆
                    </span>
                  )}
                </DisclosureButton>
              );
            })}

            {/* Bottom status */}
            <div className="flex items-center gap-2 px-2 pt-3 mt-1"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
              <span className="text-[9px] font-mono" style={{ color: "#334155" }}>
                ALL SYSTEMS NOMINAL
              </span>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}