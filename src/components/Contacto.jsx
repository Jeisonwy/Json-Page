import {
  EnvelopeIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentTextIcon,
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
      "Repositorios de proyectos, código, prácticas de desarrollo y experimentos.",
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
  ,
];

export default function contacto() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-400">
            Contacto profesional
          </h2>
          <p className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
            Conectemos de forma profesional
          </p>
          <p className="mt-6 text-lg text-gray-300">
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
                className="relative rounded-xl bg-gray-800/50 p-6 shadow-lg"
              >
                <dt className="flex items-center gap-4 text-lg font-semibold text-white">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-indigo-500">
                    <item.icon className="size-6 text-white" />
                  </div>
                  {item.name}
                </dt>

                <dd className="mt-3 text-base text-gray-400">
                  {item.description}
                </dd>

                <a
                  href={item.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition"
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
