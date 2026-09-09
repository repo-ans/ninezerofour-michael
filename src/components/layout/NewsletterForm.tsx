"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to the studio's email provider / GHL.
        if (email) setDone(true);
      }}
    >
      {done ? (
        <p className="text-sm text-inverse-ink/80" role="status">
          Thank you — you&rsquo;re on the list.
        </p>
      ) : (
        <div className="flex max-w-sm items-center border-b border-inverse-line focus-within:border-inverse-ink">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            aria-label="Email address"
            className="h-11 flex-1 bg-transparent text-sm text-inverse-ink placeholder:text-inverse-ink/45 focus:outline-none"
          />
          <button
            type="submit"
            className="px-2 text-sm font-medium tracking-wide uppercase text-inverse-ink/80 transition-colors hover:text-inverse-ink"
          >
            Join
          </button>
        </div>
      )}
    </form>
  );
}
