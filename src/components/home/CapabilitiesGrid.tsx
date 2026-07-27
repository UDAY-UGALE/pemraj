import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { company } from "@/content/company";

export function CapabilitiesGrid() {
  return (
    <section className="py-14 md:py-20 bg-mist">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="label text-signal">Capabilities</p>
            <h2 className="mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05] text-ink max-w-xl">
              Four processes. One roof.
            </h2>
          </div>
          <Link href="/capabilities" className="label text-ink border-b border-ink pb-1 self-start md:self-end">
            All capabilities
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {company.capabilities.map((cap, i) => (
            <Reveal key={cap.name} delay={i * 0.06}>
              <div className="group relative aspect-[4/3] w-full mb-6 overflow-hidden">
                <Image
                  src={cap.image}
                  alt={cap.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink">{cap.name}</h3>
              <p className="mt-2.5 text-graphite text-[15px] leading-relaxed">{cap.body}</p>
              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1.5">
                {cap.specs.slice(0, 2).map(([k, v]) => (
                  <div key={k} className="text-[13px]">
                    <span className="text-graphite">{k}: </span>
                    <span className="tnum text-ink font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
