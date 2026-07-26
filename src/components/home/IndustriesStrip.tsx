import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";

const ITEMS = [
  {
    name: "Defence",
    body: "End-to-end traceability and 100% conformance on critical parameters, audited by our defence customers before every tender.",
    image: "/images/defence-components-1.jpg",
  },
  {
    name: "Export & Hydraulics",
    body: "Steel, brass and stainless fittings and assemblies shipped to OEMs and lower-tier manufacturers worldwide.",
    image: "/images/export-components-2.jpg",
  },
  {
    name: "Automotive & Electronics",
    body: "High-volume turned components to IATF-grade documentation — APQP, control plans and PFMEA on every part family.",
    image: "/images/polygon-turning-2.jpg",
  },
];

export function IndustriesStrip() {
  return (
    <section className="py-24 md:py-32 bg-mist">
      <Container>
        <Reveal className="mb-16">
          <p className="label text-signal">Industries</p>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05] tracking-[-0.01em] text-ink max-w-xl">
            Built for regulated supply chains.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div className="relative aspect-[3/4] w-full mb-6 bg-[#f0efe9]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink">{item.name}</h3>
              <p className="mt-2.5 text-graphite text-[15px] leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14">
          <Link href="/industries" className="label text-ink border-b border-ink pb-1">
            All industries we serve
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
