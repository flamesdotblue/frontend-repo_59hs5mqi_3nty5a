import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 via-cyan-500 to-emerald-500" />
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
            Sulaiman • Portfolio
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-white/70 hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-white/70 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white">
            <Github size={18} />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white">
            <Linkedin size={18} />
          </a>
          <a aria-label="Email" href="mailto:hello@sulaiman.dev" className="rounded-md p-2 text-white/70 hover:bg-white/5 hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
