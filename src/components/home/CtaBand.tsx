import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { company } from "@/content/company";

export function CtaBand() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal className="border-t border-line pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display font-semibold text-4xl md:text-[3.25rem] leading-[1.03] tracking-[-0.01em] text-ink">
                Send us a drawing.
                <br />
                We&rsquo;ll quote it in days.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 label hover:bg-signal transition-colors"
              >
                Get a Quote
              </Link>
              <a href={`mailto:${company.contacts[0].email}`} className="text-graphite text-[15px]">
                {company.contacts[0].email}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
