import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SpecTable } from "@/components/SpecTable";
import { CtaBand } from "@/components/home/CtaBand";
import { company, images } from "@/content/company";

export const metadata: Metadata = {
  title: "Machinery",
  description:
    "20 CNC machines from Nakamura-Tome, Tornos, Tsugami, DMG and LMW — the full machine inventory at Pemraj Industries, Pune.",
};

export default function MachineryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Machinery"
        title="Twenty CNC machines. Two continents of iron."
        intro="Most of our CNC machines carry a programmable tailstock and an 8–12 station bi-directional turret, running a mix of Fanuc and Siemens controllers — our team is trained to program both."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-px bg-line">
            {company.flagshipMachines.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="bg-paper grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14">
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
                    <h2 className="mt-3 font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
                      {m.name}
                    </h2>
                    <p className="mt-3 text-graphite text-[14px] leading-relaxed">{m.type}</p>
                    <ul className="mt-5 space-y-1.5">
                      {m.features.map((f) => (
                        <li key={f} className="text-[13px] text-graphite leading-snug pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-steel">
                          {f}
                        </li>
                      ))}
                    </ul>
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

      <section className="py-20 md:py-28 bg-mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Full Inventory"
              title="Every CNC machine on the floor."
              className="mb-14"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[14px] min-w-[900px]">
                <thead>
                  <tr className="label text-graphite border-b border-line">
                    <th className="py-4 pr-4 font-normal">Description</th>
                    <th className="py-4 pr-4 font-normal">Make</th>
                    <th className="py-4 pr-4 font-normal">Model</th>
                    <th className="py-4 pr-4 font-normal">Max. Dia.</th>
                    <th className="py-4 pr-4 font-normal">Max. Length</th>
                    <th className="py-4 pr-4 font-normal">Controller</th>
                    <th className="py-4 pl-4 font-normal text-right">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {company.machineInventory.map((row) => (
                    <tr key={`${row.make}-${row.model}`} className="border-b border-line">
                      <td className="py-4 pr-4 text-ink">{row.desc}</td>
                      <td className="py-4 pr-4 text-graphite">{row.make}</td>
                      <td className="py-4 pr-4 text-graphite tnum">{row.model}</td>
                      <td className="py-4 pr-4 text-graphite tnum">{row.dia}</td>
                      <td className="py-4 pr-4 text-graphite tnum">{row.length}</td>
                      <td className="py-4 pr-4 text-graphite">{row.controller}</td>
                      <td className="py-4 pl-4 text-ink tnum text-right font-medium">{row.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {images.machineThumbs.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="relative aspect-[4/3] bg-white border border-line">
                  <Image
                    src={t.src}
                    alt={t.name}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <p className="mt-3 label text-graphite">{t.name}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
