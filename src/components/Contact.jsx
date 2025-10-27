import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build something great</h2>
          <p className="mt-3 text-white/70">
            I’m open to freelance and consulting opportunities. If you have a product in mind or need help leveling up your frontend, let’s talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@sulaiman.dev" className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90">
              Email me
            </a>
            <a href="#" className="rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
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

          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Sulaiman. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
