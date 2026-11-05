import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPost, getPosts, renderMarkdown } from "@/lib/writing";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article className="grid gap-x-6 pt-[10vh] md:grid-cols-12">
      <div className="text-dim md:col-span-3">
        <Link href="/writing" className="hover-u">
          ← Writing
        </Link>
        <p className="mt-2">{formatDate(post.date)}</p>
        {post.draft && <p className="mt-2 text-xs">Draft, hidden on the live site</p>}
      </div>
      <div className="mt-8 md:col-span-6 md:mt-0">
        <h1 className="text-[2.1rem] leading-[1.08] font-medium tracking-[-0.03em] sm:text-[2.8rem]">{post.title}</h1>
        <div
          className="prose-swiss mt-10 text-[1.1rem] leading-[1.65]"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
        />
      </div>
    </article>
  );
}
