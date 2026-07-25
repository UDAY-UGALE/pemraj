import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/home/CtaBand";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Pemraj Industries was founded by Pradeep Dhore in 1983.",
};

export default function LeadershipPage() {
  const f = company.founder;
  const initials = f.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <>
      <PageHeader eyebrow="Leadership" title="Founded in 1983. Still hands-on." />

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
            <div className="lg:col-span-4">
              {/* Photo slot — replace with next/image once a portrait is supplied */}
              <div className="aspect-[4/5] w-full bg-navy flex items-center justify-center">
                <span className="font-display font-semibold text-6xl text-white/25 tracking-wide">
                  {initials}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="label text-signal">{f.title}</p>
              <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl text-ink leading-tight">
                {f.name}
              </h2>
              <p className="mt-6 text-graphite text-[16px] leading-relaxed max-w-xl">{f.bio}</p>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7">
                <a href={`tel:${f.phone}`} className="text-ink text-[14px] tnum hover:text-signal">
                  {f.phone}
                </a>
                <a href={`mailto:${f.email}`} className="text-ink text-[14px] hover:text-signal">
                  {f.email}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
