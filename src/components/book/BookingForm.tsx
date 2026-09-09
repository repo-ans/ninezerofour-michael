"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { team } from "@/content/team";

export function BookingForm({
  presetService,
  presetStylist,
  presetIntent,
}: {
  presetService?: string;
  presetStylist?: string;
  presetIntent?: string;
}) {
  const [sent, setSent] = useState(false);

  const isCareers = presetIntent === "careers";

  if (sent) {
    return (
      <div className="rounded-md border border-line bg-panel p-8">
        <p className="font-display text-2xl tracking-tight">Request received.</p>
        <p className="mt-3 text-ink-soft">
          We&rsquo;ll be in touch within one business day to confirm a time. For
          anything urgent, text the studio at{" "}
          <a href="tel:+19042525345" className="underline">
            (904) 252-5345
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5 rounded-md border border-line bg-panel p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to the studio's booking system (GHL / Bookedly).
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      {!isCareers ? (
        <>
          <SelectField
            label="Service of interest"
            name="service"
            defaultValue={presetService ?? ""}
            options={[
              { value: "", label: "Not sure yet — recommend for me" },
              ...services.map((s) => ({ value: s.slug, label: s.name })),
            ]}
          />
          <SelectField
            label="Preferred specialist"
            name="stylist"
            defaultValue={presetStylist ?? ""}
            options={[
              { value: "", label: "No preference" },
              ...team
                .filter((m) => m.slug !== "new-chair")
                .map((m) => ({ value: m.slug, label: `${m.name} — ${m.role}` })),
            ]}
          />
        </>
      ) : (
        <input type="hidden" name="intent" value="careers" />
      )}

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">
          {isCareers
            ? "Tell us about your experience and what you want to build"
            : "Anything we should know?"}
        </span>
        <textarea
          name="message"
          rows={4}
          className="rounded-sm border border-line bg-paper px-3 py-2 text-[0.95rem] focus:border-ink focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        {isCareers ? "Submit application" : "Request appointment"}
      </button>
      <p className="text-xs text-ink-soft">
        Submitting sends a request only — a team member confirms every booking.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="h-11 rounded-sm border border-line bg-paper px-3 text-[0.95rem] focus:border-ink focus:outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-medium">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="h-11 rounded-sm border border-line bg-paper px-3 text-[0.95rem] focus:border-ink focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
