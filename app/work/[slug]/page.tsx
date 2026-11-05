import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/photo";
import { projects } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const phones = p.media.length > 0 && p.media[0].aspect.startsWith("9");

  return (
    <article>
      <section className="grid gap-x-6 pt-[10vh] md:grid-cols-12">
        <Link href="/#work" className="text-dim hover-u md:col-span-3">
          ← Work
        </Link>
        <h1 className="mt-6 text-[2.1rem] leading-[1.06] font-medium tracking-[-0.03em] sm:text-[3rem] md:col-span-9 md:mt-0 lg:text-[3.6rem]">
          {p.title}
        </h1>
      </section>

      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-fg pt-4 md:grid-cols-12">
        <Meta label="Organization" value={p.org} className="md:col-span-3" />
        <Meta label="Role" value={p.role} className="md:col-span-4" />
        <Meta label="When" value={p.dates} className="md:col-span-2" />
        <Meta label="Tools" value={p.stack.join(", ")} className="md:col-span-3" />
      </dl>

      <section className="mt-20 grid gap-x-6 gap-y-10 md:grid-cols-12">
        <div className="space-y-5 text-[1.1rem] leading-[1.6] md:col-span-6 md:col-start-4">
          {p.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          {p.list && (
            <ul className="space-y-4 border-t border-line pt-5">
              {p.list.map((f) => (
                <li key={f.title}>
                  <p className="font-medium">{f.title}</p>
                  <p className="text-mid">{f.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {p.results && (
          <div className="md:col-span-6 md:col-start-4">
            <table className="w-full border-t border-fg">
              <thead>
                <tr className="text-left text-dim">
                  <th className="py-3 font-normal">{p.results.head[0]}</th>
                  <th className="py-3 text-right font-normal">{p.results.head[1]}</th>
                </tr>
              </thead>
              <tbody>
                {p.results.rows.map(([k, v]) => (
                  <tr key={k} className="border-t border-line">
                    <td className="py-3 pr-4">{k}</td>
                    <td className="py-3 text-right text-[1.25rem] tracking-[-0.02em] whitespace-nowrap tabular-nums">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {p.results.note && <p className="mt-3 text-[0.8rem] text-dim">{p.results.note}</p>}
          </div>
        )}
      </section>

      {p.media.length > 0 && (
        <section
          className={`mt-24 grid gap-6 ${
            phones ? "grid-cols-2 md:grid-cols-12 [&>*]:md:col-span-3 [&>*:first-child]:md:col-start-4" : p.media.length > 1 ? "md:grid-cols-2" : "md:grid-cols-12 [&>*]:md:col-span-9 [&>*]:md:col-start-4"
          }`}
        >
          {p.media.map((m) => (
            <Photo key={m.alt} media={m} />
          ))}
        </section>
      )}

      <Link href={`/work/${next.slug}`} className="group mt-32 grid gap-x-6 border-t border-fg pt-4 md:grid-cols-12">
        <span className="text-dim md:col-span-3">Next</span>
        <span className="mt-2 text-[1.6rem] leading-tight font-medium tracking-[-0.025em] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[5px] sm:text-[2rem] md:col-span-9 md:mt-0">
          {next.title} →
        </span>
      </Link>
    </article>
  );
}

function Meta({ label, value, className }: { label: string; value: string; className: string }) {
  return (
    <div className={className}>
      <dt className="text-dim">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}
