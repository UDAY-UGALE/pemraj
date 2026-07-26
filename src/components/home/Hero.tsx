import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { TrustBadges } from "../TrustBadges";
import { company } from "@/content/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/factory-exterior.jpg"
          alt="Pemraj Industries factory, Vadgaon Dhayari, Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-navy-deep/45" />
      </div>

      <Container className="relative pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col items-center text-center">
        <p className="label text-white/60">
          Precision CNC Manufacturing &nbsp;·&nbsp; Est. {company.founded} &nbsp;·&nbsp; Pune, India
        </p>

        <h1 className="mt-7 font-display font-semibold text-[13vw] leading-[0.95] tracking-[-0.02em] sm:text-[7vw] lg:text-[5.75rem] max-w-4xl">
          Engineering precision since 1983.
        </h1>

        <p className="mt-7 max-w-xl text-white/75 text-[16px] leading-relaxed">
          Forty-two years of CNC turning, Swiss turning and turn-mill work for
          automotive, defence, hydraulics and electronics manufacturers — out of
          our own works on Sinhagad Road, Pune.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 rounded-full bg-signal text-white px-7 py-3.5 label hover:bg-signal-bright transition-colors"
          >
            See Capabilities
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-7 py-3.5 label hover:bg-white/10 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </Container>

      <Container className="relative pb-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 border-t border-white/15 pt-8">
          {company.stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="tnum font-display text-2xl md:text-3xl font-semibold">
                {s.value}
              </span>
              <span className="label text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>

      <Container className="relative pb-8 flex justify-center">
        <TrustBadges dark />
      </Container>
    </section>
  );
}
