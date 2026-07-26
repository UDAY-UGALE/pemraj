import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { images } from "@/content/company";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Export components, defence components and polygon-turned parts machined at Pemraj Industries, Pune — steel, brass, stainless and exotic alloys.",
};

function Gallery({ srcs, alt }: { srcs: readonly string[]; alt: string }) {
  return (
    <div className={`grid grid-cols-1 ${srcs.length > 1 ? "sm:grid-cols-2" : ""} gap-6`}>
      {srcs.map((src, i) => (
        <Reveal key={src} delay={i * 0.06}>
          <div className="relative aspect-[4/3] bg-white border border-line">
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="What leaves our shop floor."
        intro="A cross-section of the components we machine — export fittings and assemblies, defence components with full traceability, and precision polygon-turned parts."
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Export" title="Fittings & assemblies for global OEMs." className="mb-14" />
          </Reveal>
          <Gallery srcs={images.exportComponents} alt="Export component assortment" />
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-mist">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Defence" title="Full traceability, every batch." className="mb-14" />
          </Reveal>
          <Gallery srcs={images.defenceComponents} alt="Defence component assortment" />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Polygon Turning"
              title="Polygonal profiles, no secondary milling."
              className="mb-14"
            />
          </Reveal>
          <Gallery srcs={images.polygonTurning} alt="Polygon-turned components" />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
