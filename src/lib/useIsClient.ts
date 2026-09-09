"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/**
 * SSR-safe "are we on the client yet" flag. Returns false during SSR and the
 * first client render, then true — without calling setState in an effect.
 * Use it to gate scroll-scrubbed animations so the server and first client
 * render produce identical markup.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
