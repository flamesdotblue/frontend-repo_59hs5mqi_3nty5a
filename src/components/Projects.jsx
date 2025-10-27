import { ExternalLink, Github, Code, Server, Database } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description:
      'High-performance analytics dashboard with live streaming data, charts, and role-based access.',
    tech: ['React', 'Vite', 'WebSockets', 'Tailwind'],
    links: { demo: '#', code: '#' },
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-featured MERN store with product search, cart, checkout, payments, and admin tools.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    links: { demo: '#', code: '#' },
  },
  {
    title: 'Design System',
    description:
      'Composable UI kit and theming layer for fast prototyping across apps with accessibility baked-in.',
    tech: ['Storybook', 'Radix', 'Tailwind'],
    links: { demo: '#', code: '#' },
  },
];

function TechBadge({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-[#05060a] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-sm text-white/60">
              A selection of recent work showcasing performance, DX, and polish.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <Code size={14} /> Frontend
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <Server size={14} /> Backend
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <Database size={14} /> Data
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06]">
              <div className="mb-3 text-lg font-medium text-white">{p.title}</div>
              <p className="mb-4 line-clamp-3 text-sm text-white/70">{p.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-sm font-medium text-cyan-300 hover:text-cyan-200">
                  Live demo <ExternalLink size={14} />
                </a>
                <a href={p.links.code} className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white">
                  <Github size={14} /> Source
                </a>
              </div>
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x, 0) var(--y, 0), rgba(56,189,248,0.12), transparent 40%)' }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
