import {
  Dumbbell,
  Flame,
  Star,
  Target,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <div>
            <p className="headline text-2xl text-white">IRON RESULTS</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-zinc-400 md:flex">
            <a href="#transformation" className="transition hover:text-[var(--accent)]">
              Transformation
            </a>
            <a href="#program" className="transition hover:text-[var(--accent)]">
              The Program
            </a>
            <a href="#results" className="transition hover:text-[var(--accent)]">
              Results
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:scale-105"
          >
            Start Your Transformation
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex animate-pulse rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            Limited Spots Available
          </span>
          <h1 className="headline mt-8 text-6xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            STOP WISHING. START WINNING. ELITE COACHING FOR THE DRIVEN.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Personalized training, zero-nonsense nutrition, and 24/7 accountability.
            We don&apos;t just change your body; we change your life.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-4 text-base font-semibold uppercase tracking-[0.12em] text-black transition hover:scale-105"
            >
              Apply Now - Only 5 Spots Left
            </a>
            <a
              href="#results"
              className="inline-flex items-center justify-center rounded-full border border-white/14 px-6 py-4 text-base font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              See the Results
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-strong)]" />
            Join 4 other people looking at this page right now.
          </div>
        </div>

        <div className="dark-card overflow-hidden rounded-[2rem]">
          <div className="aspect-[4/5] bg-[radial-gradient(circle_at_top,rgba(223,255,0,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)),linear-gradient(135deg,#111111_0%,#050505_100%)] p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[var(--accent-strong)]/18 px-3 py-1 text-sm uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                  Elite Mode
                </span>
                <Flame className="h-6 w-6 text-[var(--accent)]" />
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                    Coaching stack
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {['Training split', 'Nutrition targets', 'Recovery plan', 'Weekly scorecard'].map((item) => (
                      <div key={item} className="rounded-2xl bg-black/40 px-4 py-3 text-sm text-zinc-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">
                      Transformation momentum
                    </p>
                    <span className="text-sm text-[var(--accent)]">Week 5</span>
                  </div>
                  <div className="mt-4 h-3 rounded-full bg-white/8">
                    <div className="h-3 w-[68%] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)]" />
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/35 px-4 py-4">
                <p className="headline text-3xl text-white">NO EXCUSES. JUST RESULTS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Before & After
          </p>
          <h2 className="headline mt-4 text-5xl text-white">
            THIS IS WHAT HAPPENS WHEN YOU DESTROY YOUR EXCUSES.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            'John D. - Lost 15kg of fat, gained 5kg of muscle.',
            'Rafi K. - Rebuilt his physique and confidence in 12 weeks.',
          ].map((caption) => (
            <article key={caption} className="dark-card overflow-hidden rounded-[2rem]">
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden border-b border-white/8 bg-[linear-gradient(180deg,#1e1e1e_0%,#0b0b0b_100%)] sm:border-b-0 sm:border-r">
                  <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white ring-1 ring-white/10">
                    Week 1
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%)] grayscale" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(180deg,#222222_0%,#111111_100%)]">
                  <div className="absolute left-4 top-4 rounded-full bg-[var(--accent)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-black">
                    Week 12
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(223,255,0,0.24),transparent_26%),linear-gradient(180deg,rgba(255,62,0,0.12),transparent)] saturate-150" />
                </div>
              </div>
              <div className="px-6 py-5">
                <p className="text-lg font-semibold text-white">{caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="program" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            The Blueprint
          </p>
          <h2 className="headline mt-4 text-5xl text-white">
            THREE PILLARS. ZERO BULLSHIT.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <article className="dark-card rounded-[2rem] p-7">
            <Dumbbell className="h-7 w-7 text-[var(--accent)]" />
            <h3 className="headline mt-6 text-4xl text-white">CUSTOM TRAINING</h3>
            <p className="mt-4 leading-8 text-zinc-400">
              No cookie-cutter plans. Workouts designed for your specific goals, schedule, and available equipment.
            </p>
          </article>
          <article className="dark-card rounded-[2rem] p-7">
            <Target className="h-7 w-7 text-[var(--accent-strong)]" />
            <h3 className="headline mt-6 text-4xl text-white">PRECISION NUTRITION</h3>
            <p className="mt-4 leading-8 text-zinc-400">
              Eat what you love while hitting your macros. Flexible dieting that actually works in the real world.
            </p>
          </article>
          <article className="dark-card rounded-[2rem] p-7">
            <Zap className="h-7 w-7 text-[var(--accent)]" />
            <h3 className="headline mt-6 text-4xl text-white">DAILY ACCOUNTABILITY</h3>
            <p className="mt-4 leading-8 text-zinc-400">
              Weekly check-ins and direct 1:1 messaging to keep you on track 24/7 until the result is obvious.
            </p>
          </article>
        </div>
      </section>

      <section id="transformation" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            Community
          </p>
          <h2 className="headline mt-4 text-5xl text-white">
            REAL PEOPLE. REAL TRANSFORMATION.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            'The best investment I have ever made in myself. Farhad’s system is bulletproof.',
            'I stopped guessing, followed the plan, and finally got the physique I wanted.',
            'The accountability alone changed everything. I trained harder and stayed consistent.',
          ].map((quote) => (
            <article
              key={quote}
              className="rounded-[2rem] border-2 border-white/12 bg-[#111111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-1 text-[var(--accent)]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 leading-8 text-zinc-300">“{quote}”</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-semibold text-white">Verified Client</p>
                <span className="rounded-full bg-[var(--accent)]/14 px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                  Verified Client
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.25rem] bg-[var(--accent)] px-6 py-12 text-black shadow-[0_28px_90px_rgba(223,255,0,0.18)] sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-black/70">
                Final Push
              </p>
              <h2 className="headline mt-4 text-5xl text-black sm:text-6xl">
                ARE YOU READY TO LEVEL UP?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-black/75">
                Join 200+ members who have transformed their lives with elite coaching, clear systems, and zero excuses.
              </p>
            </div>

            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-base font-semibold uppercase tracking-[0.12em] text-white transition hover:scale-105"
            >
              Claim Your Spot
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
