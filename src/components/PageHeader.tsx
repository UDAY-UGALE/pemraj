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
    <section className="pt-14 pb-10 md:pt-20 md:pb-14 border-b border-line">
      <Container>
        <p className="label text-signal">{eyebrow}</p>
        <h1 className="mt-5 font-display font-semibold text-2xl md:text-4xl leading-[1.0] text-ink max-w-3xl">
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
