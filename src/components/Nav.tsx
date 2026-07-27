"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute left-0 h-[2px] w-6 bg-ink rounded-full transition-all duration-300 ease-out";
  return (
    <span className="relative block w-6 h-4">
      <span className={`${bar} top-0 ${open ? "top-[7px] rotate-45" : ""}`} />
      <span className={`${bar} top-[7px] ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`${bar} top-[14px] ${open ? "top-[7px] -rotate-45" : ""}`} />
    </span>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-paper/95 backdrop-blur border-b border-line" : "border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" aria-label="Pemraj Industries — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
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

        <button
          className="lg:hidden relative z-10 p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <MenuIcon open={open} />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute left-0 right-0 top-full bg-paper border-b border-line shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] max-h-[75vh] overflow-y-auto"
          >
            <Container className="flex flex-col py-4">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-3.5 text-ink font-display text-lg font-medium"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
