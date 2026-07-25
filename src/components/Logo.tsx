const NAME = "PEMRAJ";

export function Logo({ dark = false }: { dark?: boolean }) {
  const line = dark ? "border-white/35" : "border-navy/30";
  const text = dark ? "text-white" : "text-ink";
  const sub = dark ? "text-white/60" : "text-graphite";

  return (
    <span className="inline-flex flex-col leading-none select-none">
      <span
        className={`border ${line} px-3 py-1.5 font-display font-semibold tracking-[0.22em] text-[15px] ${text}`}
      >
        {NAME}
      </span>
      <span className={`label mt-1 text-center ${sub}`}>Industries</span>
    </span>
  );
}
