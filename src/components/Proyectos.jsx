import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Flowlytics HR",
    description:
      "Registro y control de empleados, con Flask, React y MySQL, con Integración continua y despliegue automatizado. Docker y Jenkins.",
    icon: CloudArrowUpIcon,
    actions: [
      {
        label: "GitHub",
        url: "https://github.com/Jeisonwy/System-HumanConnectv2",
        type: "repo",
      },
      {
        label: "Video funcionalidad",
        url: "https://www.youtube.com/watch?v=r93HIDID9lk",
        type: "video",
      },
    ],
  },
  {
    name: "Flowlytics Solutions",
    description:
      "Herramienta de bajo código desarrollada en Google AppSheet para temas operativos, automatización de procesos y reportes.",
    icon: LockClosedIcon,
    actions: [
      {
        label: "Documentación",
        url: "https://drive.google.com/file/d/1QnW6kbf4oq3c4g6lyxGKFwT8pU6z_rXs/view?usp=sharing",
        type: "repo",
      },
      {
        label: "Ver Demo",
        url: "https://www.appsheet.com/start/d4ab49d4-47cb-46fd-9329-b64c36218cc2",
        type: "demo",
      },
    ],
  },
  {
    name: "Portal de pagos con API de MercadoPago",
    description:
      "Web App que consume la API de MercadoPago para gestionar pagos en línea de forma segura y eficiente.",
    icon: ArrowPathIcon,
    actions: [
      {
        label: "Bitbucket",
        url: "https://bitbucket.org/jeisongarzon/poli/src/main/",
        type: "repo",
      },
      {
        label: "Ver Demo",
        url: "https://polipayer.onrender.com/",
        type: "demo",
      },
    ],
  },
  {
    name: "Proyectos de Gestión Logística y Analítica",
    description:
      "Proyectos orientados a recolección de datos, analítica, control operativo y optimización logística.",
    icon: FingerPrintIcon,
    actions: [,],
  },
];

export default function proyectos() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-400">Proyectos</h2>
          <p className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
            Soluciones eficientes para problemas reales
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Desde proyectos logísticos hasta Web Apps con integración continua
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>

                <dd className="mt-2 text-base text-gray-400">
                  {feature.description}
                </dd>

                {/* Botones dinámicos por proyecto */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {feature.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.url}
                      target={action.type !== "detail" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`rounded-md px-3 py-1.5 text-sm font-medium transition
                        ${
                          action.type === "repo"
                            ? "bg-gray-800 text-white hover:bg-gray-700"
                            : action.type === "demo"
                            ? "bg-indigo-600 text-white hover:bg-indigo-500"
                            : action.type === "video"
                            ? "bg-red-600 text-white hover:bg-red-500"
                            : "border border-gray-600 text-gray-300 hover:bg-gray-800"
                        }
                      `}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
