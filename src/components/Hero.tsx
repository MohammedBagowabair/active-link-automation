import { CountUp } from "@/components/CountUp"
import { useQuote } from "@/components/QuoteContext"
import { asset } from "@/lib/site"

export function Hero() {
  const { openQuote } = useQuote()
  return (
    <section className="hero-screen" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={asset("images/hero.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35 lg:hidden"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,180,41,0.28),transparent_46%),linear-gradient(to_top,#07090d_8%,rgba(7,9,13,0.2)_42%,#07090d_100%)] lg:bg-[radial-gradient(ellipse_at_top_left,rgba(240,180,41,0.18),transparent_42%)]" />
        <div className="hero-grid" />
        <div className="hero-sweep" />
        <div className="hero-scan lg:hidden" />
      </div>

      <div className="relative z-10 flex w-full min-w-0 flex-1 flex-col justify-end">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-amber">
          Bandar Baru Nilai · Est. 2014
        </p>
        <h1 id="hero-title" className="hero-title mt-3 text-ivory">
          <span className="block">Security.</span>
          <span className="block">Automation.</span>
          <span className="block text-amber">Electrical.</span>
        </h1>
        <p className="mt-4 max-w-md font-display text-xl font-semibold tracking-tight md:text-2xl">
          One team. Complete solutions.
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/80 md:text-base">
          CCTV, alarms, access, gates and electrical work for Nilai, Seremban, Negeri Sembilan, Selangor and
          surrounding areas.
        </p>
        <button
          type="button"
          className="press mt-5 h-12 rounded-full bg-amber px-5 text-sm font-bold text-inktext md:hidden"
          onClick={() => openQuote()}
        >
          Start a quote
        </button>
        <dl className="mt-5 grid grid-cols-3 gap-2">
          <div className="glass rounded-2xl px-2 py-3 text-center">
            <dd className="font-display text-2xl font-bold md:text-4xl">
              <CountUp to={5} decimals={1} />
            </dd>
            <dt className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-mist">Google</dt>
          </div>
          <div className="glass rounded-2xl px-2 py-3 text-center">
            <dd className="font-display text-2xl font-bold md:text-4xl">
              <CountUp to={1070} suffix="+" />
            </dd>
            <dt className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-mist">Reviews</dt>
          </div>
          <div className="glass rounded-2xl px-2 py-3 text-center">
            <dd className="font-display text-2xl font-bold md:text-4xl">
              <CountUp to={2014} from={2000} grouping={false} />
            </dd>
            <dt className="mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-mist">Since</dt>
          </div>
        </dl>
      </div>

      <div className="relative z-10 mt-6 hidden overflow-hidden rounded-[1.6rem] border border-line lg:block">
        <img
          src={asset("images/hero.jpg")}
          alt="Rows of CCTV cameras mounted across an exterior wall"
          width={2000}
          height={1345}
          fetchPriority="high"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
    </section>
  )
}
