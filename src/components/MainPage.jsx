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
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                Jeison Garzon
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Ingeniero de Software Desarrollador Full Stack
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Ingeniero de software con experiencia profesional en desarrollo
                e implementacion de proyectos de alto impacto. Apasionado por la
                tecnologia y el aprendizaje continuo, siempre en busca de nuevos
                retos para crecer y contribuir al exito de los proyectos.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
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
                className="w-full sm:w-[600px] md:w-[750px] lg:w-[900px] rounded-xl shadow-xl cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
