import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Arquitectura e implementación de soluciones digitales.",
    description:
      "Desde el levantamiento estratégico de requerimientos hasta el diseño e implementación de arquitecturas funcionales escalables alineadas a objetivos de negocio.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Optimización de procesos basada en datos.",
    description:
      "Transformo información operativa en insights estratégicos mediante modelado de datos y visualización orientada a KPIs, impulsando decisiones informadas y mejora continua.",
    icon: LockClosedIcon,
  },
  {
    name: "Liderazgo técnico y coordinación estratégica.",
    description:
      "Experiencia guiando iniciativas tecnológicas, alineando equipos multidisciplinarios con objetivos organizacionales para garantizar impacto, calidad y cumplimiento.",
    icon: ServerIcon,
  },
];

export default function MainPage() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_top,rgba(56,189,248,0.16),transparent_90%)]" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold uppercase tracking-[0.2em] text-indigo-300">
                Jeison Garzon Lara
              </h2>
              <h1 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                Technical Solutions Engineer enfocado en optimización de
                procesos y arquitectura de soluciones digitales
              </h1>

              <p className="mt-6 text-lg/8 text-gray-300/90">
                Diseño e implemento soluciones tecnológicas que traducen
                necesidades de negocio en sistemas funcionales y escalables.
                Combino criterio técnico, análisis de datos y visión estratégica
                para generar impacto medible en entornos organizacionales.
              </p>
              <dl className="mt-10 max-w-xl space-y-6 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="group relative rounded-xl border border-white/10 bg-white/5 px-4 py-4 pl-12 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-xl"
                  >
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-4 top-4 size-5 text-indigo-300 transition duration-300 group-hover:text-white"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-gray-300/80">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <a
              href="https://www.linkedin.com/in/jsonlara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                alt="LinkedIn Banner"
                src="https://i.ibb.co/B2gvwRz0/linkedin.png"
                className="w-full sm:w-[600px] md:w-[750px] lg:w-[900px] rounded-2xl border border-white/10 shadow-xl transition duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
