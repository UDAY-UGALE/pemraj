import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { SpecTable } from "@/components/SpecTable";
// import { CtaBand } from "@/components/home/CtaBand";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "CNC turning, Swiss turning, turn-mill and polygon turning, plus in-house lathe, thread rolling and milling — the full process capability at Pemraj Industries, Pune.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Four core processes, held to 10 microns."
        intro="It is rightly said that to get quality output, we need to give a quality input. We invest continuously in machines from Deckel-Maho Gildemeister (Germany), Tsugami (Japan) and LMW (India), with a team trained across both Fanuc and Siemens controllers."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col gap-14 md:gap-20">
            {company.capabilities.map((cap, i) => {
              const image = (
                <div key="image" className="group lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                </div>
              );
              const text = (
                <div key="text" className="lg:col-span-5">
                  <span className="label text-gold tnum">0{i + 1}</span>
                  <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
                    {cap.name}
                  </h2>
                  <p className="mt-4 text-graphite text-[15px] leading-relaxed max-w-md">
                    {cap.body}
                  </p>
                  <div className="mt-7 max-w-sm">
                    <SpecTable rows={cap.specs} />
                  </div>
                </div>
              );
              return (
                <Reveal
                  key={cap.name}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10 items-center"
                >
                  {i % 2 ? (
                    <>
                      {text}
                      {image}
                    </>
                  ) : (
                    <>
                      {image}
                      {text}
                    </>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="In-House Capability"
              title="Beyond CNC — the supporting processes."
              className="mb-10"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {company.inHouse.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05} className="bg-white p-8">
                <div className="relative w-14 h-14 mb-5">
                  <Image src={item.icon} alt="" fill className="object-contain" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink">{item.name}</h3>
                <p className="mt-2.5 text-graphite text-[14px] leading-relaxed">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Outsourced Capability"
              title="A vetted network for the rest."
              className="mb-4"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 text-graphite text-[15px] leading-relaxed max-w-2xl mb-10">
              To meet customer requirements we collaborate with specialist partners —
              every supplier is selected only after thorough evaluation and extensive
              audit.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {Object.entries(company.outsourced).map(([group, items], i) => (
              <Reveal key={group} delay={i * 0.06}>
                <h3 className="label text-signal border-b border-line pb-3">{group}</h3>
                <ul className="mt-4 space-y-2">
                  {items.map((it) => (
                    <li key={it} className="text-[14px] text-graphite leading-snug">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* <CtaBand /> */}
    </>
  );
}
