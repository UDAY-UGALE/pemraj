import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Precision CNC components for defence, hydraulics, automotive, electronics and industrial equipment manufacturers — Pemraj Industries, Pune.",
};

const SECTORS = [
  {
    name: "Defence",
    body: "Our quality systems are thoroughly audited by our defence customers every time we qualify to quote for their tenders — with end-to-end traceability and 100% conformance on every critical parameter.",
    image: "/images/defence-components-1.jpg",
  },
  {
    name: "Hydraulics",
    body: "Turned and turn-milled fittings, flanges and adaptors machined to tight tolerance for hydraulic and pneumatic assemblies, in steel, brass and stainless.",
    image: "/images/export-components-2.jpg",
  },
  {
    name: "Automotive",
    body: "Our ISO 9001:2015 scope explicitly covers precision machined components and assemblies for automotive and engineering industries — high-volume turning with full documentation.",
    image: "/images/polygon-turning-2.jpg",
  },
  {
    name: "Electronics",
    body: "Small-diameter precision turned components — connector bodies, pins and housings — held to the same 10-micron accuracy as our larger work.",
    image: "/images/export-components-1.jpg",
  },
  {
    name: "Industrial Equipment",
    body: "Larger turned and machined assemblies for general industrial equipment manufacturers, drawing on our full in-house process range.",
    image: "/images/export-components-3.jpg",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Critical, demanding, and unforgiving of error."
        intro="Our components go into extremely critical and demanding industries. Our customers — OEMs and lower-tier manufacturers located all around the world — are high-technology businesses operating in dynamic and competitive markets."
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col gap-14 md:gap-20">
            {SECTORS.map((s, i) => {
              const image = (
                <div key="image" className="group lg:col-span-6 relative aspect-[4/3] w-full bg-white overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
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
                    {s.name}
                  </h2>
                  <p className="mt-4 text-graphite text-[15px] leading-relaxed max-w-md">
                    {s.body}
                  </p>
                </div>
              );
              return (
                <Reveal
                  key={s.name}
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

      <section className="py-20 bg-navy text-white">
        <Container>
          <Reveal className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <p className="label text-white/45">Customers audit us</p>
              <p className="mt-2 text-lg">Eaton, Crane</p>
            </div>
            <div>
              <p className="label text-white/45">ATEX approved for</p>
              <p className="mt-2 text-lg">Barksdale, USA</p>
            </div>
            <div>
              <p className="label text-white/45">Certification</p>
              <p className="mt-2 text-lg">{company.certification.standard}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
