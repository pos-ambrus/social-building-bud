"use client";

import { useState } from "react";
import { getCategoryEn } from "@/lib/categoriesEn";

const CONTACT_EMAIL = "sociallybud@gmail.com";

type Fields = {
  name: string;
  link: string;
  category: string;
  schedule: string;
  note: string;
};

const EMPTY: Fields = { name: "", link: "", category: "", schedule: "", note: "" };

function buildBody(f: Fields): string {
  const lines = [
    `Club name: ${f.name}`,
    `Link: ${f.link}`,
    `Category: ${f.category || "(not specified)"}`,
    `When you meet: ${f.schedule || "(not specified)"}`,
    "",
    f.note || "(no note)",
  ];
  return lines.join("\n");
}

export default function ClubSubmitFormEn({ categories }: { categories: string[] }) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [copied, setCopied] = useState(false);

  const ready = fields.name.trim() !== "" && fields.link.trim() !== "";
  const subject = `Club for the list: ${fields.name || "(unnamed)"}`;
  const body = buildBody(fields);
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-ink/15 bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/35 focus:border-pin-blue focus:outline-none";

  return (
    <div className="rounded-2xl bg-paper p-5 shadow-sm sm:p-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="club-name" className="mb-1 block text-sm font-medium text-ink">
            Club name <span className="text-cta">*</span>
          </label>
          <input
            id="club-name"
            type="text"
            value={fields.name}
            onChange={set("name")}
            placeholder="For example Bikás Park Streetball"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="club-link" className="mb-1 block text-sm font-medium text-ink">
            Instagram or website <span className="text-cta">*</span>
          </label>
          <input
            id="club-link"
            type="url"
            value={fields.link}
            onChange={set("link")}
            placeholder="https://instagram.com/..."
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="club-category" className="mb-1 block text-sm font-medium text-ink">
              Category
            </label>
            <select
              id="club-category"
              value={fields.category}
              onChange={set("category")}
              className={inputClass}
            >
              <option value="">Pick one if you know it</option>
              {categories.map((c) => (
                <option key={c} value={getCategoryEn(c).name}>
                  {getCategoryEn(c).name}
                </option>
              ))}
              <option value="Other">Other or new category</option>
            </select>
          </div>

          <div>
            <label htmlFor="club-schedule" className="mb-1 block text-sm font-medium text-ink">
              When do you meet?
            </label>
            <input
              id="club-schedule"
              type="text"
              value={fields.schedule}
              onChange={set("schedule")}
              placeholder="Tuesdays 6pm, Margaret Island"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="club-note" className="mb-1 block text-sm font-medium text-ink">
            Anything else we should know
          </label>
          <textarea
            id="club-note"
            rows={3}
            value={fields.note}
            onChange={set("note")}
            placeholder="Do you welcome beginners? Is there a fee? What language do you run in?"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={ready ? mailto : undefined}
          aria-disabled={!ready}
          className={
            ready
              ? "inline-flex items-center rounded-full border-2 border-cta bg-cta px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover"
              : "pointer-events-none inline-flex items-center rounded-full border-2 border-ink/15 bg-ink/5 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink/35"
          }
        >
          Send by email
        </a>

        <button
          type="button"
          onClick={copyAll}
          disabled={!ready}
          className="text-sm font-medium text-pin-blue underline disabled:text-ink/30 disabled:no-underline"
        >
          {copied ? "Copied" : "Copy instead"}
        </button>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-ink/50">
        The button opens your email app with a pre-filled message, so you can see
        and edit what you send. No data is stored or forwarded anywhere else. If
        you do not have an email app set up, copy the text and send it to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-pin-blue underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
