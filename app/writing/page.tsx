import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPosts } from "@/lib/writing";

export const metadata: Metadata = { title: "Writing" };

export default function Writing() {
  const posts = getPosts();
  if (posts.length === 0) notFound();

  return (
    <section className="grid gap-x-6 pt-[10vh] md:grid-cols-12">
      <h1 className="text-[2.4rem] leading-none font-medium tracking-[-0.03em] md:col-span-9 md:col-start-4">Writing</h1>
      <ul className="mt-12 border-t border-fg md:col-span-9 md:col-start-4">
        {posts.map((p) => (
          <li key={p.slug} className="border-b border-line">
            <Link href={`/writing/${p.slug}`} className="group grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[1fr_8rem]">
              <span>
                <span className="text-[1.25rem] font-medium tracking-[-0.01em] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                  {p.title}
                </span>
                {p.draft && <span className="ml-3 text-xs text-dim">Draft, hidden on the live site</span>}
                <span className="mt-1 block text-mid">{p.summary}</span>
              </span>
              <span className="text-dim sm:text-right">{formatDate(p.date)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
