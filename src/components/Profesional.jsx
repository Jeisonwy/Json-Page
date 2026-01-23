const posts = [
  {
    id: 1,
    title: "Desarrollador y lider de proyectos de innovación y tecnología",
    href: "#",
    description:
      "Planificación, desarrollo e implementación de soluciones tecnológicas de bajo codigo para optimizar procesos internos y mejorar la eficiencia operativa",
    date: "Junio, 2023",
    datetime: "2020-03-16",
    category: { title: "Ingenieria", href: "#" },
    author: {
      name: "Google Appsheet, Appscript, Saltcorn",
      role: "Herramientas de bajo código",
      href: "#",
      imageUrl:
        "https://play-lh.googleusercontent.com/rW4cFCs9COZhpTYlW9x9OL2lKAy9kkPCTEfEUliybKOiXLsfi2BlOWyvZolbCiszcj4",
    },
  },
  {
    id: 2,
    title: "Analisis de datos y automatización de informes",
    href: "#",
    description:
      "Desarrollo de dashboards interactivos y automatización de informes utilizando herramientas como Google Data Studio y Domo Bi para facilitar la toma de decisiones basada en datos.",
    date: "Junio, 2023",
    datetime: "2020-03-10",
    category: { title: "Data Analyst", href: "#" },
    author: {
      name: "Looker Studio, Domo BI",
      role: "Herramientas de visualización de datos",
      href: "#",
      imageUrl: "https://www.svgrepo.com/show/354012/looker-icon.svg",
    },
  },
  {
    id: 3,
    title: "Soporte tecnico, Capacitaciones y gestion de proyectos scrum",
    href: "#",
    description:
      "Proporcionar soporte técnico de primer nivel a usuarios finales, resolver incidencias y gestionar proyectos utilizando metodologías ágiles como Scrum para asegurar la entrega oportuna de soluciones tecnológicas.",
    date: "Junio, 2023",
    datetime: "2020-02-12",
    category: { title: "Service Desk", href: "#" },
    author: {
      name: "",
      role: "Herramientas de gestión de proyectos",
      href: "#",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-jira-logo-icon-svg-download-png-3030001.png",
    },
  },
];

export default function Profesional() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_top,rgba(34,197,94,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-24 right-[-10%] -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            4 Años
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300/90">
            de experiencia profesional como:
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col items-start justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10 hover:shadow-2xl"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-400">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-white/10 px-3 py-1.5 font-medium text-gray-200 transition hover:bg-white/20"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-4 text-lg/6 font-semibold text-white transition group-hover:text-emerald-100">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-300/80">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-800/80 transition duration-300 group-hover:scale-105"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
