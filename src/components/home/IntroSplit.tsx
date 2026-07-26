import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";

export function IntroSplit() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14">
          <Reveal className="lg:col-span-4">
            <p className="label text-signal">About Pemraj</p>
            <h2 className="mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05] tracking-[-0.01em] text-ink">
              Strategic manufacturer, not a job shop.
            </h2>
            <p className="mt-6 text-graphite text-[15px] leading-relaxed">
              Established in 1983, Pemraj Industries is a strategic manufacturer and
              supplier of high-precision, quality-critical CNC machined components and
              assemblies, specialising in CNC turning and CNC turn-mill — based in the
              industrial belt of Pune, India.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 label text-ink border-b border-ink pb-1 hover:gap-3 transition-all"
            >
              Our story since 1983
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8 lg:col-start-5">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/machine-nt-flex-detail.jpg"
                alt="Nakamura-Tome NT-Flex turn-mill centre in operation"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-line pt-6">
              <Fact k="Customers audit us" v="Eaton, Crane" />
              <Fact k="ATEX approved for" v="Barksdale, USA" />
              <Fact k="Labs" v="NABL certified" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="label text-graphite">{k}</div>
      <div className="mt-1.5 text-ink font-medium">{v}</div>
    </div>
  );
}
