import PdfEmbed from "./PdfEmbed";

const posts = [
  {
    id: 1,
    title: "Desarrollador y líder de proyectos de innovación y tecnología",
    href: "#",
    description:
      "Planificación, desarrollo e implementación de soluciones tecnológicas de bajo código para optimizar procesos internos y mejorar la eficiencia operativa.",
    date: "Junio, 2023",
    datetime: "2023-06-01",
    category: { title: "Ingeniería", href: "#" },
    author: {
      name: "Google AppSheet, Apps Script, Saltcorn",
      role: "Herramientas low-code",
      href: "#",
      imageUrl:
        "https://play-lh.googleusercontent.com/rW4cFCs9COZhpTYlW9x9OL2lKAy9kkPCTEfEUliybKOiXLsfi2BlOWyvZolbCiszcj4",
    },
  },
  {
    id: 2,
    title: "Análisis de datos y automatización de informes",
    href: "#",
    description:
      "Desarrollo de dashboards interactivos y automatización de informes utilizando herramientas como Looker Studio y Domo BI para facilitar la toma de decisiones basada en datos.",
    date: "Junio, 2023",
    datetime: "2023-06-01",
    category: { title: "Data Analyst", href: "#" },
    author: {
      name: "Looker Studio, Domo BI",
      role: "Visualización de datos",
      href: "#",
      imageUrl: "https://www.svgrepo.com/show/354012/looker-icon.svg",
    },
  },
  {
    id: 3,
    title: "Soporte técnico, capacitaciones y gestión de proyectos Scrum",
    href: "#",
    description:
      "Soporte técnico de primer nivel, resolución de incidencias y gestión de proyectos con metodologías ágiles (Scrum) para asegurar entregas oportunas.",
    date: "Junio, 2023",
    datetime: "2023-06-01",
    category: { title: "Service Desk", href: "#" },
    author: {
      name: "Jira, Confluence",
      role: "Gestión de proyectos",
      href: "#",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/free-jira-logo-icon-svg-download-png-3030001.png",
    },
  },
];

export default function Profesional() {
  // 👇 Pega aquí tu link en formato /preview
  const reconocimientoPdf =
    "https://drive.google.com/file/d/1i7nzf8lPuQGWABo7BTNllZHBJ8dTzMBc/preview?usp=sharing";

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_top,rgba(56,189,248,0.10),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-24 right-[-10%] -z-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            4 Años
          </h2>
          <p className="mt-2 text-lg/8 text-gray-300/90">
            de experiencia profesional como:
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col items-start justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/40 hover:bg-white/10 hover:shadow-2xl"
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
                <h3 className="mt-4 text-lg/6 font-semibold text-white transition group-hover:text-indigo-100">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>

                <p className="mt-5 text-sm/6 text-gray-300/80">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-800/80 object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name || "Herramientas utilizadas"}
                    </a>
                  </p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PDF embed (reconocimiento) */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="mb-6 max-w-2xl">
            <h3 className="text-xl font-semibold text-white">
              Reconocimientos
            </h3>
            <p className="mt-2 text-sm text-gray-300/80">
              Evidencia y documentación de reconocimientos y logros.
            </p>
          </div>

          <PdfEmbed
            title="Reconocimiento por desempeño"
            src={reconocimientoPdf}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}
