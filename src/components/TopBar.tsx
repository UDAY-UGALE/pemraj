import { Container } from "./Container";
import { company } from "@/content/company";

export function TopBar() {
  return (
    <div className="bg-navy-deep text-white/70 text-[13px]">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 py-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
          <a href={`tel:${company.contacts[0].phone}`} className="hover:text-white transition-colors">
            {company.contacts[0].phone}
          </a>
          <a href={`mailto:${company.contacts[0].email}`} className="hover:text-white transition-colors">
            {company.contacts[0].email}
          </a>
          <span className="hidden sm:inline">Mon – Sat: 09:00 – 18:00</span>
        </div>
        <span className="text-white/50">Pune, Maharashtra, India</span>
      </Container>
    </div>
  );
}
