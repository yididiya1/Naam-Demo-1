"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { nav } from "@/lib/site";

const interests = [
  "General inquiry",
  ...nav.find((n) => n.label === "Programs")!.children!.map((c) => c.label),
  "Volunteering",
  "Donating",
];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-brand-100 bg-brand-50/50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-600" />
        <h3 className="mt-4 text-xl text-ink">Thank you for reaching out</h3>
        <p className="mt-2 text-ink-soft">
          A member of our team will get back to you within two business days.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">First name</label>
          <input required className={field} placeholder="Jane" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Last name</label>
          <input required className={field} placeholder="Doe" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
          <input required type="email" className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Phone</label>
          <input type="tel" className={field} placeholder="(781) 000-0000" />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">I&apos;m interested in</label>
        <select required defaultValue="" className={field}>
          <option value="" disabled>
            Select a topic…
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      {!compact && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Message</label>
          <textarea rows={4} className={field} placeholder="How can we help?" />
        </div>
      )}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-700"
      >
        Send message
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
