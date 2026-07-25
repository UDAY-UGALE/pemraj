"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/machinery", label: "Machinery" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 border-b border-line" : "border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" aria-label="Pemraj Industries — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="label text-graphite hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 border border-ink px-5 py-2.5 label text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          Get a Quote
        </Link>

        <button
          className="lg:hidden label text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-paper z-40 overflow-y-auto">
          <Container className="flex flex-col gap-1 py-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-5 font-display text-3xl text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center border border-ink px-5 py-4 label text-ink"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
