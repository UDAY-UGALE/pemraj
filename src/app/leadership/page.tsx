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
  return (
    <>
      <PageHeader eyebrow="Leadership" title="Founded in 1983. Still hands-on." />

      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-20">
            {company.leadership.map((person, i) => {
              const initials = person.name
                .split(" ")
                .map((w) => w[0])
                .join("");
              return (
                <Reveal
                  key={person.name}
                  delay={i * 0.08}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10 items-start"
                >
                  <div className="lg:col-span-4">
                    {/* Photo slot — replace with next/image once a portrait is supplied */}
                    <div className="aspect-[4/5] w-full bg-navy flex items-center justify-center">
                      <span className="font-display font-semibold text-6xl text-white/25 tracking-wide">
                        {initials}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="label text-signal">{person.title}</p>
                    <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl text-ink leading-tight">
                      {person.name}
                    </h2>
                    <p className="mt-6 text-graphite text-[16px] leading-relaxed max-w-xl">
                      {person.bio}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7">
                      <a
                        href={`tel:${person.phone}`}
                        className="text-ink text-[14px] tnum hover:text-signal"
                      >
                        {person.phone}
                      </a>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-ink text-[14px] hover:text-signal"
                      >
                        {person.email}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-mist">
        <Container>
          <Reveal>
            <p className="label text-signal">Offices</p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink">
              Where you'll find us.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-16">
            {Object.values(company.offices).map((office, i) => (
              <Reveal key={office.label} delay={i * 0.08}>
                <p className="label text-graphite">{office.label}</p>
                <p className="mt-4 text-ink text-[16px] leading-relaxed">
                  {office.lines.join(", ")}
                </p>
                <a
                  href={`tel:${office.phone}`}
                  className="mt-3 inline-block text-graphite text-[14px] tnum hover:text-ink"
                >
                  {office.phone}
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
