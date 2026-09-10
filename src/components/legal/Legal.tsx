import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { site } from "@/content/site";

export function LegalShell({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        intro={`Effective date: ${effectiveDate}`}
      />
      <Container className="max-w-[46rem] py-16 md:py-24">
        <div className="flex flex-col gap-12 md:gap-14">{children}</div>
      </Container>
    </>
  );
}

export function LegalSection({
  n,
  title,
  children,
}: {
  n: number | string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex scroll-mt-28 flex-col gap-3 leading-relaxed text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:decoration-line hover:[&_a]:decoration-ink [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
      <h2 className="font-display text-xl tracking-tight text-ink md:text-2xl">
        {n}. {title}
      </h2>
      {children}
    </section>
  );
}

/** Sub-clause heading, e.g. "5.1 Program Description". */
export function LegalClause({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <h3 className="text-sm font-semibold tracking-tight text-ink">
        {n} {title}
      </h3>
      {children}
    </div>
  );
}

export function LegalCallout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-md border border-line bg-panel-2 p-5 text-sm leading-relaxed text-ink-soft">
      <p className="font-display tracking-tight text-ink">{title}</p>
      <p className="mt-2">{children}</p>
    </div>
  );
}

export function LegalContact() {
  return (
    <div className="rounded-md border border-line bg-panel-2 p-5 text-sm text-ink-soft">
      <p>
        <strong className="font-semibold text-ink">Email:</strong>{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-ink underline decoration-line hover:decoration-ink"
        >
          {site.email}
        </a>
      </p>
      <p className="mt-1">
        <strong className="font-semibold text-ink">Phone:</strong>{" "}
        <a
          href={site.phoneHref}
          className="text-ink underline decoration-line hover:decoration-ink"
        >
          {site.phone}
        </a>
      </p>
      <p className="mt-3">
        <strong className="font-semibold text-ink">Address:</strong>
      </p>
      <p>
        {site.name} {site.tagline}
      </p>
      <p>
        {site.address.line1}, {site.address.line2}
      </p>
    </div>
  );
}
