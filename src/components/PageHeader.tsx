import { ReactNode } from "react";
import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-20 border-b border-line">
      <Container>
        <p className="label text-signal">{eyebrow}</p>
        <h1 className="mt-5 font-display font-semibold text-5xl md:text-[4.25rem] leading-[1.0] text-ink max-w-3xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 text-graphite text-[17px] leading-relaxed max-w-xl">{intro}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
