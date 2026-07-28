import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pemraj Industries — Pune, India. Head office, works and direct contacts for RFQs and enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
      eyebrow="Contact"
      title="Contact Us" 
      // intro="Reach our team directly." 
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
            {company.leadership.map((p) => (
              <Reveal key={p.name} className="border-t border-line pt-5">
                <p className="font-display font-semibold text-lg text-ink">{p.name}</p>
                <p className="label text-signal mt-1">{p.title}</p>
                <a href={`tel:${p.phone}`} className="mt-2.5 block text-graphite text-[14px] tnum hover:text-ink">
                  {p.phone}
                </a>
                <a href={`mailto:${p.email}`} className="block text-graphite text-[14px] hover:text-ink">
                  {p.email}
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-mist">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            {Object.values(company.offices).map((office) => (
              <Reveal key={office.label}>
                <p className="label text-signal">{office.label}</p>
                <p className="mt-5 text-ink text-[16px] leading-relaxed">
                  {office.lines.join(", ")}
                </p>
                <a href={`tel:${office.phone}`} className="mt-3 inline-block text-graphite text-[14px] tnum hover:text-ink">
                  {office.phone}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-20 relative aspect-[21/9] w-full border border-line grayscale contrast-[1.05]">
            <iframe
              title="Pemraj Industries works — Vadgaon Dhayari, Pune"
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps?q=Vadgaon+Dhayari,+Sinhagad+Road,+Pune+411041&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 border-t border-line">
        <Container>
          <Reveal className="flex flex-wrap gap-x-10 gap-y-3">
            <LegalItem label="GST" value={company.legal.gst} />
            <LegalItem label="IEC" value={company.legal.iec} />
            <LegalItem label="PAN" value={company.legal.pan} />
            <LegalItem label="MSME UDYAM" value={company.legal.msme} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function LegalItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-[13px]">
      <span className="label text-graphite">{label}: </span>
      <span className="tnum text-ink">{value}</span>
    </div>
  );
}
