import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isExternal } from "@/lib/href";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children: ReactNode;
};

/** Renders a new-tab `<a>` for absolute URLs, a `next/link` for internal paths. */
export function SmartLink({ href, children, className, ...rest }: Props) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
