import { company } from "@/content/company";

export function FloatingContact() {
  const phone = company.contacts[0].phone;
  const email = company.contacts[0].email;

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a
        href={`mailto:${email}`}
        aria-label="Email Pemraj Industries"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-signal border border-line shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] hover:bg-signal hover:text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </a>
      <a
        href={`tel:${phone}`}
        aria-label="Call Pemraj Industries"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-signal text-white shadow-[0_8px_24px_-8px_rgba(8,100,169,0.55)] hover:bg-signal-bright transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1z" />
        </svg>
      </a>
    </div>
  );
}
