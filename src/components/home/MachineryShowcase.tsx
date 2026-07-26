import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { SpecTable } from "../SpecTable";
import { company } from "@/content/company";

export function MachineryShowcase() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label text-signal">Machinery</p>
            <h2 className="mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05] tracking-[-0.01em] text-ink max-w-2xl">
              Japanese and Swiss iron on the shop floor.
            </h2>
          </div>
          <Link href="/machinery" className="label text-ink border-b border-ink pb-1 self-start md:self-end">
            All 20 CNC machines
          </Link>
        </Reveal>

        <div className="flex flex-col gap-px bg-line">
          {company.flagshipMachines.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="bg-paper grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12">
                <div className="lg:col-span-5 relative aspect-[4/3]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center">
                  <p className="label text-graphite">{m.origin}</p>
                  <h3 className="mt-3 font-display font-semibold text-2xl text-ink leading-tight">
                    {m.name}
                  </h3>
                  <p className="mt-3 text-graphite text-[14px] leading-relaxed">{m.type}</p>
                </div>
                <div className="lg:col-span-4 flex items-center">
                  <div className="w-full">
                    <SpecTable rows={m.specs} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
