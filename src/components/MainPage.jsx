import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Implementador de soluciones tecnológicas.",
    description:
      "Desde la concepción y planteamiento de requerimientos hasta la implementación y despliegue de soluciones tecnológicas efectivas.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Optimización de procesos y análisis de datos.",
    description:
      "Desde el levantamiento de información siempre en busca de obtener datos relevantes para la optimización de procesos y toma de decisiones.",
    icon: LockClosedIcon,
  },
  {
    name: "Gestión y lideazgo de proyectos.",
    description:
      "Experiencia en la coordinación y gestión de equipos de trabajo para asegurar la entrega exitosa de proyectos tecnológicos.",
    icon: ServerIcon,
  },
];

export default function MainPage() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_top,rgba(56,189,248,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold uppercase tracking-[0.2em] text-indigo-300">
                Jeison Garzon
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Ingeniero de Software Desarrollador Full Stack
              </p>
              <p className="mt-6 text-lg/8 text-gray-300/90">
                Ingeniero de software con experiencia profesional en desarrollo
                e implementacion de proyectos de alto impacto. Apasionado por la
                tecnologia y el aprendizaje continuo, siempre en busca de nuevos
                retos para crecer y contribuir al exito de los proyectos.
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
