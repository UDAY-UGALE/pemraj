import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { company } from "@/content/company";

export function CtaBand() {
  return (
    <section className="py-14 md:py-20 bg-signal text-white">
      <Container>
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display font-semibold text-4xl md:text-[3.25rem] leading-[1.03]">
              Send us a drawing.
              <br />
              We&rsquo;ll quote it in days.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <a
              href={`mailto:${company.contacts[0].email}`}
              className="text-white/90 hover:text-white text-[15px] underline underline-offset-4"
            >
              {company.contacts[0].email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
