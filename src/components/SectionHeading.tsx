import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  action,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${className}`}>
      <div>
        <p className={`label ${dark ? "text-white/50" : "text-signal"}`}>{eyebrow}</p>
        <h2
          className={`mt-5 font-display font-semibold text-4xl md:text-[2.75rem] leading-[1.05] tracking-[-0.01em] max-w-2xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
