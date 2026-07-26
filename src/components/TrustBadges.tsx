function Tricolor() {
  return (
    <span className="inline-flex flex-col w-[18px] h-[13px] border border-black/15 overflow-hidden shrink-0">
      <span className="flex-1 bg-[#FF9933]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#138808]" />
    </span>
  );
}

const ITEMS = [
  { label: "Made in India", swatch: true },
  { label: "MSME Udyam Registered" },
  { label: "ISO 9001:2015 Certified" },
] as const;

export function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
      {ITEMS.map((item) => (
        <li
          key={item.label}
          className={`flex items-center gap-2 label ${dark ? "text-white/60" : "text-graphite"}`}
        >
          {"swatch" in item && item.swatch ? <Tricolor /> : (
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          )}
          {item.label}
        </li>
      ))}
    </ul>
  );
}
