import Image from "next/image";

export default function HomePage() {
  const games = [
    {
      title: "Idle Car Tycoon: Build Your Car Empire",
      status: "In Development",
      description:
        "A mobile idle tycoon game where players build and expand their own car empire through upgrades, management systems, and long-term progression.",
    },
    {
      title: "Coming Soon",
      status: "Coming Soon",
      description:
        "A new mobile-first project currently in development under the Nyxa Game Studio label.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/nyxa-logo.png"
              alt="Nyxa Game Studio logo"
              width={140}
              height={60}
              priority
              className="h-auto w-[120px] md:w-[140px]"
            />
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#games" className="transition hover:text-white">
              Games
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
              Mobile Game Studio
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-7xl">
              We build mobile games with clean design and long-term vision.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Nyxa Game Studio creates memorable mobile experiences with strong
              gameplay loops, sharp identity, and scalable commercial potential.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#games"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Explore Games
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
              <div className="text-sm uppercase tracking-[0.2em] text-white/40">
                Studio Focus
              </div>
              <div className="mt-4 text-2xl font-semibold">
                Gameplay, retention, and modern presentation.
              </div>
              <p className="mt-4 text-sm leading-6 text-white/65">
                Built for mobile-first audiences with an emphasis on polished
                interfaces, scalable content pipelines, and commercial
                viability.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-semibold">01</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Original IP and mobile game concepts in active development.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-semibold">02</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Brand-driven visual direction with a clean, premium feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-white/40">
              About
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              A modern independent studio building the next generation of mobile
              experiences.
            </h2>
          </div>

          <div className="text-white/70">
            <p className="text-base leading-8">
              Nyxa Game Studio develops mobile games with a focus on strong
              progression systems, polished presentation, and commercially smart
              execution.
            </p>

            <p className="mt-6 text-base leading-8">
              From early concept to release planning, our goal is to build games
              that stand out in crowded markets without losing clarity,
              simplicity, or long-term growth potential.
            </p>
          </div>
        </div>
      </section>

      <section id="games" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/40">
                Games
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Current and upcoming projects
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/60">
              A selection of projects currently under the Nyxa Game Studio
              label.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {games.map((game) => (
              <div
                key={game.title}
                className="rounded-3xl border border-white/10 bg-black p-6"
              >
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/50">
                  {game.status}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{game.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {game.description}
                </p>

                <button className="mt-8 rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium transition hover:bg-white/5">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-white/40">
              Contact
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Let&apos;s talk about games, publishing, and collaboration.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              Whether you want to connect about publishing, partnerships,
              business opportunities, or studio updates, Nyxa Game Studio is
              open to the right conversations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-5 text-sm text-white/70">
              <div>
                <div className="text-white/40">Email</div>
                <div className="mt-1 text-base text-white">
                  nyxagames8@gmail.com
                </div>
              </div>

              <div>
                <div className="text-white/40">Press / Business</div>
                <div className="mt-1 text-base text-white">
                  Available upon request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Nyxa Game Studio. All rights reserved.</div>
          <div>Built for mobile-first entertainment.</div>
        </div>
      </footer>
    </main>
  );
}
