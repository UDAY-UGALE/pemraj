"use client";

import { FormEvent, useState } from "react";
import { company } from "@/content/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const org = String(data.get("org") || "");
    const message = String(data.get("message") || "");
    const contactEmail = String(data.get("email") || "");

    const subject = encodeURIComponent(`RFQ from ${name || "website"}${org ? ` (${org})` : ""}`);
    const body = encodeURIComponent(
      `${message}\n\n—\nName: ${name}\nOrganisation: ${org}\nReply-to: ${contactEmail}`
    );
    window.location.href = `mailto:${company.contacts[0].email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Organisation" name="org" />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div>
        <label className="label text-graphite" htmlFor="message">
          What do you need machined?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2.5 w-full border-b border-line bg-transparent py-2 text-ink placeholder:text-steel focus:outline-none focus:border-ink transition-colors resize-none"
          placeholder="Material, quantity, tolerance, drawing reference…"
        />
      </div>
      <div className="flex items-center gap-5">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-signal text-white px-7 py-4 label hover:bg-navy transition-colors"
        >
          Send via Email
        </button>
        {sent && <span className="text-graphite text-[14px]">Opening your email client…</span>}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label text-graphite" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2.5 w-full border-b border-line bg-transparent py-2 text-ink focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
