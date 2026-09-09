import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Studio notes on hair health, colour, extensions, and restoration from the Nine Zero Four team.",
};

function formatDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, " . ");
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes from the studio."
        intro="Plain-language writing on what we see behind the chair — and how to make the results last."
      />

      <Container className="py-16 md:py-24">
        <Reveal group className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {posts.map((post) => (
            <RevealItem key={post.slug} as="div">
              <Link href={`/blog/${post.slug}`} className="group block">
                <Media
                  label={post.media}
                  ratio="3 / 2"
                  className="rounded-md transition-[filter] duration-300 group-hover:brightness-[0.97]"
                />
                <p className="mt-5 text-xs tracking-[0.2em] text-ink-soft uppercase">
                  {formatDate(post.date)} &nbsp;&middot;&nbsp; {post.category}
                </p>
                <h2 className="mt-3 font-display text-2xl tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-2 text-ink-soft">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read more
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </>
  );
}
