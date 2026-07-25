import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pemraj Industries has manufactured high-precision CNC machined components in Pune since 1983 — our story, vision, mission and values.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Pemraj"
        title="A strategic manufacturer, not a job shop."
        intro="Established in 1983, Pemraj Industries is a strategic manufacturer and supplier of high precision and quality critical CNC machined components and assemblies, specialising in CNC turning and CNC turn-mill — based in the industrial belt of Pune, India."
      />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-14">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/factory-exterior.jpg"
                  alt="Pemraj Industries works, Vadgaon Dhayari, Pune"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <p className="label text-signal">Since 1983</p>
              <p className="mt-5 text-graphite text-[16px] leading-relaxed">
                Our components go into extremely critical and demanding industries —
                defence, hydraulics, automotive and electronics among them. Our
                customers, which include OEMs as well as lower-tier manufacturers
                located all around the world, are high-technology businesses operating
                in dynamic and competitive markets.
              </p>
              <p className="mt-5 text-graphite text-[16px] leading-relaxed">
                Our success comes from accurately playing our part in their supply
                chain — ensuring quality components are delivered on time and in full,
                out of our own works on Sinhagad Road, Pune.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-line pt-8">
                {company.stats.map((s) => (
                  <div key={s.label}>
                    <div className="tnum font-display text-2xl font-semibold text-ink">
                      {s.value}
                    </div>
                    <div className="label text-graphite mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            <Reveal>
              <p className="label text-signal">Vision</p>
              <p className="mt-5 font-display text-2xl md:text-[1.75rem] leading-snug text-ink">
                {company.vision}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="label text-signal">Mission</p>
              <p className="mt-5 font-display text-2xl md:text-[1.75rem] leading-snug text-ink">
                {company.mission}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Values" title="What runs the shop floor." className="mb-16" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {company.values.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.06} className="bg-paper p-8">
                <span className="label text-graphite tnum">0{i + 1}</span>
                <h3 className="mt-4 font-display font-semibold text-xl text-ink">{v.name}</h3>
                <p className="mt-3 text-graphite text-[14px] leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
