import {
  EnvelopeIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const contactos = [
  {
    name: "LinkedIn",
    description:
      "Perfil profesional con experiencia, proyectos y trayectoria laboral.",
    icon: BriefcaseIcon,
    action: {
      label: "Ver LinkedIn",
      url: "https://www.linkedin.com/in/jsonlara/",
    },
  },
  {
    name: "GitHub",
    description:
      "Repositorios de proyectos, codigo, prácticas de desarrollo y experimentos.",
    icon: CodeBracketIcon,
    action: {
      label: "Ver GitHub",
      url: "https://github.com/Jeisonwy",
    },
  },
  {
    name: "Correo electrónico",
    description:
      "Canal directo para contacto profesional, propuestas o colaboraciones. Email: jeisongg02@gmail.com",
    icon: EnvelopeIcon,
    action: {
      label: "Enviar correo",
      url: "mailto:jeisongg02@gmail.com",
    },
  },
];

export default function Contacto() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75rem_40rem_at_top,rgba(99,102,241,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 left-[-10%] -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-[0.2em]">
            Contacto profesional
          </h2>
          <p className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
            Conectemos de forma profesional
          </p>
          <p className="mt-6 text-lg text-gray-300/90">
            Canales publicos para contacto, colaboraciones y oportunidades
            laborales
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {contactos.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-2xl"
              >
                <dt className="flex items-center gap-4 text-lg font-semibold text-white">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/30 transition duration-300 group-hover:bg-indigo-500/30 group-hover:ring-indigo-300/60">
                    <item.icon className="size-6 text-indigo-100 transition duration-300 group-hover:scale-110 group-hover:text-white" />
                  </div>
                  {item.name}
                </dt>

                <dd className="mt-3 text-base text-gray-300/90">
                  {item.description}
                </dd>

                <a
                  href={item.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  {item.action.label}
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
