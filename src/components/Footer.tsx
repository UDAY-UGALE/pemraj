import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { TrustBadges } from "./TrustBadges";
import { company } from "@/content/company";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/leadership", label: "Leadership" },
      { href: "/capabilities", label: "Capabilities" },
      { href: "/machinery", label: "Machinery" },
      { href: "/quality", label: "Quality" },
    ],
  },
  {
    heading: "Work",
    links: [
      { href: "/industries", label: "Industries" },
      { href: "/products", label: "Products" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/85 mt-32">
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-14 lg:gap-8">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-xs text-white/60 text-[15px] leading-relaxed">
              {company.tagline}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="label text-white/45">{col.heading}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-white/80 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="label text-white/45">Work Office</div>
            <p className="mt-5 text-[15px] text-white/80 leading-relaxed">
              {company.offices.work.lines.join(", ")}
            </p>
            <p className="mt-3 text-[15px] text-white/80">{company.offices.work.phone}</p>
            <a
              href={`mailto:${company.contacts[0].email}`}
              className="mt-3 inline-block text-[15px] text-white/80 hover:text-white transition-colors"
            >
              {company.contacts[0].email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <TrustBadges dark />
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="label text-white/40">
            © {new Date().getFullYear()} Pemraj Industries — precision CNC manufacturing since 1983
          </p>
          <p className="label text-white/40 tnum">GST {company.legal.gst} · MSME {company.legal.msme}</p>
        </div>
      </Container>
    </footer>
  );
}
