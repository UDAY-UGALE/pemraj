import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { company } from "@/content/company";

export function QualityStrip() {
  return (
    <section className="py-14 md:py-20 bg-navy text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-center">
          <Reveal className="lg:col-span-6">
            <p className="label text-white/50">Quality</p>
            <h2 className="mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05]">
              {company.certification.standard} certified since {company.certification.firstCertified.slice(0, 4)}.
            </h2>
            <p className="mt-6 text-white/65 text-[15px] leading-relaxed max-w-md">
              Beyond ISO, our systems are audited every year by customers including
              Eaton and Crane, and by our defence customers before every tender. We are
              also qualified as an ATEX approved supplier for Barksdale (USA).
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md border-t border-white/15 pt-7">
              <div>
                <dt className="label text-white/45">Certificate No.</dt>
                <dd className="mt-1.5 tnum">{company.certification.registrationNo}</dd>
              </div>
              <div>
                <dt className="label text-white/45">Valid Until</dt>
                <dd className="mt-1.5 tnum">{company.certification.validTo}</dd>
              </div>
              <div>
                <dt className="label text-white/45">Certified By</dt>
                <dd className="mt-1.5">{company.certification.body}</dd>
              </div>
              <div>
                <dt className="label text-white/45">Labs</dt>
                <dd className="mt-1.5">NABL certified</dd>
              </div>
            </dl>

            <Link
              href="/quality"
              className="mt-9 inline-flex items-center gap-2 label border-b border-white/60 pb-1"
            >
              Quality &amp; inspection
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/iso-certificate.jpg"
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
  );
}
