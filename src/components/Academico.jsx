const people = [
  {
    name: "Ingenieria de Software",
    role: "Politecnico Grancolombiano - 2022-2026",
    imageUrl:
      "https://www.poli.edu.co/themes/custom/ptecnico2023/logo-politecnico-grancolombiano-white.svg",
  },
  {
    name: "Google Cloud Computing Foundations Certificate",
    role: "Google Skills - 2025",
    imageUrl: "https://clickaplicaciones.com/images/google-cloud.webp",
  },
  {
    name: "Diplomado en ciencias de la computación",
    role: "Politecnico Grancolombiano - 2025",
    imageUrl:
      "https://www.poli.edu.co/themes/custom/ptecnico2023/logo-politecnico-grancolombiano-white.svg",
  },
  {
    name: "Programa Especializado - Soporte de Tecnologías de la Información de Google",
    role: "Coursera - 2022",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/960px-Coursera-Logo_600x600.svg.png",
  },
  {
    name: "Diplomado general en habilidades de programación mision TIC 2022",
    role: "Universidad Nacional de Colombia - 2021",
    imageUrl:
      "https://desparchado.co/media/organizers/Logo-Universidad-Nacional-de-Colombia.jpg",
  },
];

export default function Academico() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70rem_40rem_at_top,rgba(59,130,246,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute -top-16 right-[-10%] -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            Detalle de logros academicos
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300/90">
            Como ingeniero, he estado constantemente comprometido con el
            aprendizaje y la mejora continua. A lo largo de mi carrera
            académica, he alcanzado varios hitos que reflejan mi dedicación y
            pasión por la ingeniería. A continuación, se detallan algunos de mis
            logros más destacados.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-2xl"
            >
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full bg-white/5 outline-1 -outline-offset-1 outline-white/10 transition duration-300 group-hover:scale-105"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-cyan-300">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
