import Spline from '@splinetool/react-spline';
import { ArrowRight, Code, Layers, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden bg-black pt-24">
      {/* Background subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),rgba(0,0,0,0))]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        {/* Content */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance projects
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Sulaiman
            <span className="block bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Senior Web Developer
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            I craft fast, accessible, and delightful web experiences with React, Vite, and the MERN stack. I love turning complex ideas into simple, elegant interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
              View Projects
              <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
              Contact Me
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-white/80">
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs">
              <Code size={16} /> React + Vite
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs">
              <Layers size={16} /> UI/UX
            </div>
            <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs">
              <Server size={16} /> MERN Stack
            </div>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[60vh] w-full md:h-[70vh]">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* soft gradient to improve text contrast */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
