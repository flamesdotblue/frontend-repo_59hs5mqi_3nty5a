export default function About() {
  return (
    <section id="about" className="relative bg-[#05060a] py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="mb-3 text-xl font-semibold text-white">About Sulaiman</h3>
          <p className="text-sm leading-relaxed text-white/70">
            I’m a senior web developer specializing in building fast, scalable, and beautiful web apps. Over the years I’ve shipped complex projects across startups and enterprises, with a focus on performance, accessibility, and developer experience.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            My toolkit includes React, Vite, TypeScript, Node.js, Express, and MongoDB. I enjoy designing component systems, optimizing rendering, and crafting clean APIs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: 'Experience', v: '7+ years' },
            { k: 'Stack', v: 'MERN, TypeScript' },
            { k: 'Focus', v: 'Performance, DX' },
            { k: 'Location', v: 'Remote / Worldwide' },
          ].map((item) => (
            <div key={item.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-xs uppercase tracking-wide text-white/50">{item.k}</div>
              <div className="mt-1 text-sm font-medium text-white">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
