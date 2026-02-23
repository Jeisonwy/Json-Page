import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "TeSoluciona3D",
    description:
      "Pagina Web de compañia de impresión 3D, Con react y tienda virtual Sencilla",
    icon: CloudArrowUpIcon,
    actions: [
      {
        label: "Ver Demo",
        url: "https://jeisonwy.github.io/TeSoluciona3D/",
        type: "demo",
      },
    ],
  },

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
    name: "POS App Bussiness Solution PRO",
    description:
      "Sistema de punto de venta para restaurantes implementado con Google Appscript + Google sheets + Tailwind CSS. (requieres cuenta Google y aceptar permisos NO SE RECOPILA NINGUNA INFORMACION DEL VISITANTE).",
    icon: LockClosedIcon,
    actions: [
      {
        label: "Documentación",
        url: "https://docs.google.com/document/d/1cSu6sSPB3hZSynDBwhGIQj-AOedaQh5AAiY51dP90q8/edit?usp=sharing",
        type: "repo",
      },
      {
        label: "Ver Demo",
        url: "https://script.google.com/macros/s/AKfycbw0JtD5XVg3A-oXG3VoWy-kfv8D34O0cdJqNHkjsaPk0JDEFy-GRLc9MqBGJQrrYY6H3A/exec",
        type: "demo",
      },
    ],
  },

  {
    name: "Flowlytics Solutions",
    description:
      "Herramienta de bajo codigo desarrollada en Google AppSheet para temas operativos, automatización de procesos y reportes.",
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
    actions: [],
  },
];

export default function Proyectos() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_top,rgba(99,102,241,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-[0.2em]">
            Proyectos
          </h2>
          <p className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
            Soluciones eficientes para problemas reales
          </p>
          <p className="mt-6 text-lg text-gray-300/90">
            Desde proyectos logísticos hasta Web Apps con integración continua
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-2xl"
              >
                <dt className="flex items-center gap-4 text-base font-semibold text-white">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-indigo-500/20 ring-1 ring-indigo-400/30 transition duration-300 group-hover:bg-indigo-500/30 group-hover:ring-indigo-300/60">
                    <feature.icon className="size-6 text-indigo-100 transition duration-300 group-hover:scale-110 group-hover:text-white" />
                  </div>
                  <span className="tracking-wide">{feature.name}</span>
                </dt>

                <dd className="mt-4 text-base text-gray-300/90">
                  {feature.description}
                </dd>

                {feature.actions?.length ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {feature.actions.map((action) => (
                      <a
                        key={action.label}
                        href={action.url}
                        target={action.type !== "detail" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400
                          ${
                            action.type === "repo"
                              ? "bg-white/10 text-white hover:bg-white/20"
                              : action.type === "demo"
                                ? "bg-indigo-500 text-white hover:bg-indigo-400"
                                : action.type === "video"
                                  ? "bg-rose-500 text-white hover:bg-rose-400"
                                  : "border border-white/20 text-gray-200 hover:bg-white/10"
                          }
                        `}
                      >
                        {action.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
