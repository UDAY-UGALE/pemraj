export function SpecTable({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return (
    <dl className="text-[14px]">
      {rows.map(([k, v]) => (
        <div
          key={k}
          className="flex items-baseline justify-between gap-6 py-2.5 border-t border-line first:border-t-0"
        >
          <dt className="text-graphite">{k}</dt>
          <dd className="tnum text-ink font-medium text-right">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
