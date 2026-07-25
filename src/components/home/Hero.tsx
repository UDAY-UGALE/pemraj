import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
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
          className="object-cover object-[78%_center] opacity-[0.38] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/60 to-transparent" />
      </div>

      <Container className="relative pt-40 pb-24 md:pt-52 md:pb-32">
        <p className="label text-white/55">
          Precision CNC Manufacturing &nbsp;·&nbsp; Est. {company.founded} &nbsp;·&nbsp; Pune, India
        </p>

        <h1 className="mt-7 font-display font-semibold text-[13vw] leading-[0.92] tracking-[-0.02em] sm:text-[9vw] lg:text-[6.4rem] max-w-4xl">
          Parts that hold
          <br />
          their tolerance.
        </h1>

        <div className="mt-10 max-w-md ml-auto mr-0 md:mr-16 lg:mr-24 text-right">
          <p className="text-white/70 text-[15px] leading-relaxed">
            Forty-two years of CNC turning, Swiss turning and turn-mill work for
            automotive, defence, hydraulics and electronics manufacturers —
            out of our own works on Sinhagad Road, Pune.
          </p>
          <div className="mt-7 flex justify-end gap-4">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 bg-white text-navy-deep px-6 py-3 label hover:bg-white/90 transition-colors"
            >
              See Capabilities
            </Link>
          </div>
        </div>
      </Container>

      <Container className="relative pb-14">
        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-8">
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
    </section>
  );
}
