import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { company } from "@/content/company";

export function VisionMission() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <Reveal>
            <p className="label text-signal">Vision</p>
            <p className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink">
              {company.vision}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label text-signal">Mission</p>
            <p className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink">
              {company.mission}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
