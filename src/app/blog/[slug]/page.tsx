import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";
import { CtaBand } from "@/components/sections/CtaBand";
import { getPost, posts } from "@/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-[calc(var(--nav-h)+3.5rem)] md:pt-[calc(var(--nav-h)+5rem)]">
        <Container className="max-w-[46rem]">
          <Reveal group className="flex flex-col gap-5">
            <RevealItem as="p" className="text-xs tracking-[0.2em] text-ink-soft uppercase">
              {formatDate(post.date)} &nbsp;&middot;&nbsp; {post.category}{" "}
              &nbsp;&middot;&nbsp; {post.readingTime}
            </RevealItem>
            <RevealItem as="h1" className="display-md">
              {post.title}
            </RevealItem>
          </Reveal>
        </Container>

        <Container className="mt-10 max-w-[52rem]">
          <Reveal>
            <Media
              label={post.media}
              ratio="16 / 9"
              className="rounded-md"
            />
          </Reveal>
        </Container>

        <Container className="mt-12 max-w-[42rem] pb-20 md:pb-28">
          <Reveal group className="flex flex-col gap-6 text-lg leading-relaxed">
            {post.body.map((para, i) => (
              <RevealItem as="p" key={i}>
                {para}
              </RevealItem>
            ))}
          </Reveal>

          <div className="mt-12 border-t border-line pt-8">
            <Link href="/blog" className="text-sm font-medium">
              &larr; All posts
            </Link>
          </div>
        </Container>
      </article>

      <CtaBand
        title="Questions about your own hair?"
        body="A consultation is the fastest way to a straight answer and a plan."
        ctaLabel="Book a consultation"
      />
    </>
  );
}
