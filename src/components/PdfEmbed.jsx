import React from "react";

export default function PdfEmbed({
  title = "Documento",
  src = "https://drive.google.com/file/d/1rNb0WuR7yaHM8kxdD135G6YaL8ZcEruA/preview",
  height = 680,
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl">
        <div className="flex items-center justify-between gap-3 px-2 pb-3">
          <h3 className="text-sm font-semibold tracking-wide text-white/90">
            {title}
          </h3>

          <a
            href={src?.replace("/preview", "/view")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-300 hover:text-indigo-200 underline underline-offset-4"
          >
            Abrir en otra pestaña
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <iframe
            title={title}
            src={src}
            className="w-full"
            style={{ height }}
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </div>
    </section>
  );
}
