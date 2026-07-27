import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { company, images } from "@/content/company";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "ISO 9001:2015 certified quality systems, NABL-certified measurement, and full material traceability at Pemraj Industries, Pune.",
};

const GENERAL_GAUGES = [
  ["Micrometer (digital & analogue)", "0–100mm, in four ranges"],
  ["Vernier (digital & analogue)", "0–300mm, in three ranges"],
  ["Blade micrometer", "0.25–75mm, blade 0.75–1mm"],
  ["Disc micrometer", "25–50mm"],
  ["Height gauge", "0–300mm"],
  ["Lever dial gauges", "0–1mm, LC 0.002mm"],
  ["Plunger dial gauge", "0–50mm, LC 0.001mm"],
  ["Bore gauge", "10–60mm"],
  ["Slip gauge set", "0.5–100mm"],
  ["Thread pitch micrometer", "Metric & BSW threads"],
  ["Granite surface plate", "630×630mm, Grade 0"],
  ["Other equipment", "V-blocks, between centre, pitch"],
] as const;

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality"
        title="We are only as good as the quality we provide."
        intro="Quality checks are built into every step of manufacturing — from procuring raw material to dispatching the final product — not inspected in at the end."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-center">
            <Reveal className="lg:col-span-6">
              <p className="label text-signal">Certification</p>
              <h2 className="mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05] text-ink">
                {company.certification.standard}
              </h2>
              <p className="mt-6 text-graphite text-[15px] leading-relaxed max-w-md">
                {company.certification.scope}. Beyond ISO, we clear global quality
                audits conducted by customers including Eaton and Crane every year,
                and are qualified as an ATEX approved supplier for Barksdale (USA) with
                end-to-end traceability and 100% conformance on critical parameters.
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md border-t border-line pt-7">
                <div>
                  <dt className="label text-graphite">Registration No.</dt>
                  <dd className="mt-1.5 tnum text-ink">{company.certification.registrationNo}</dd>
                </div>
                <div>
                  <dt className="label text-graphite">Valid Until</dt>
                  <dd className="mt-1.5 tnum text-ink">{company.certification.validTo}</dd>
                </div>
                <div>
                  <dt className="label text-graphite">First Certified</dt>
                  <dd className="mt-1.5 tnum text-ink">{company.certification.firstCertified}</dd>
                </div>
                <div>
                  <dt className="label text-graphite">Certified By</dt>
                  <dd className="mt-1.5 text-ink">{company.certification.body}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
                <Image
                  src={images.isoCertificate}
                  alt="Pemraj Industries ISO 9001:2015 certificate"
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-mist">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Quality Control Documentation" title="Documented at every stage." className="mb-14" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line">
            {company.qualityDocs.map((d, i) => (
              <Reveal key={d.stage} delay={i * 0.06} className="bg-white p-8">
                <span className="label text-gold tnum">0{i + 1}</span>
                <h3 className="mt-4 font-display font-semibold text-lg text-ink">{d.stage}</h3>
                <p className="mt-2.5 text-graphite text-[14px] leading-relaxed">{d.docs}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Advanced Measuring Capability"
              title="Form, video and profile measurement in-house."
              className="mb-14"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.measuringEquipment.map((eq, i) => (
              <Reveal key={eq.name} delay={i * 0.06} className="border-t border-line pt-6">
                <h3 className="font-display font-semibold text-lg text-ink">{eq.name}</h3>
                <p className="mt-1.5 label text-graphite">{eq.make}</p>
                <p className="mt-3 text-graphite text-[14px] leading-relaxed">{eq.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-20">
            <p className="label text-graphite mb-6">General gauges &amp; instruments</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-1">
              {GENERAL_GAUGES.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-2.5 border-t border-line text-[13px]">
                  <span className="text-graphite">{k}</span>
                  <span className="tnum text-ink text-right">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-mist">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Materials" title="Any material, fully traceable." className="mb-6" />
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-graphite text-[15px] leading-relaxed max-w-2xl mb-14">
              Material grade is confirmed by chemical and mechanical analysis, with
              ultrasonic testing, magnetic particle inspection and non-destructive
              testing where required. All testing and calibration labs are NABL
              certified.
            </p>
          </Reveal>
          <div className="flex flex-col">
            {company.materials.map((m, i) => (
              <Reveal
                key={m.group}
                delay={i * 0.04}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 border-t border-line last:border-b"
              >
                <span className="label text-signal sm:w-48 shrink-0">{m.group}</span>
                <span className="text-[14px] text-graphite">{m.grades}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
