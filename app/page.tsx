import Link from "next/link";
import { Photo } from "@/components/photo";
import { Row } from "@/components/row";
import { beliefs, earlier, flags, heroMedia, profile, projects, record, why } from "@/lib/site";

export default function Home() {
  const [wide, tall] = heroMedia;

  return (
    <>
      <section className="grid gap-x-6 pt-[14vh] pb-[11vh] md:grid-cols-12">
        <h1 className="text-[2.35rem] leading-[1.04] font-medium tracking-[-0.035em] sm:text-[3.4rem] md:col-span-10 lg:text-[4.6rem]">
          {profile.headline}
        </h1>
        <p className="mt-10 text-[1.08rem] leading-[1.55] text-mid md:col-span-6 md:col-start-4 md:mt-12 lg:col-span-5 lg:col-start-4">
          {profile.intro}
          {flags.showNSA && ` ${profile.introNSA}`}
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-12">
        <Photo media={wide} className="md:col-span-7" />
        <Photo media={tall} className="md:col-span-5 md:self-end" />
      </div>

      <Row label="Why defense">
        <div className="max-w-[38rem] space-y-5 pt-4 text-[1.2rem] leading-[1.5] tracking-[-0.005em] sm:text-[1.3rem]">
          {why.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Row>

      <Row id="work" label="Selected work">
        <ul>
          {projects.map((p) => (
            <li key={p.slug} className="border-b border-line">
              <Link
                href={`/work/${p.slug}`}
                className="group grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[5rem_1fr_11rem] sm:items-baseline lg:grid-cols-[6rem_1fr_13rem]"
              >
                <span className="text-dim tabular-nums">{p.year}</span>
                <span>
                  <span className="text-[1.25rem] font-medium tracking-[-0.01em] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block max-w-[36rem] text-mid">
                    {p.org}. {p.summary}
                  </span>
                </span>
                <span className="mt-2 sm:mt-0 sm:text-right">
                  <span className="block text-[1.25rem] tracking-[-0.02em] tabular-nums">{p.metric.value}</span>
                  <span className="block text-xs text-dim">{p.metric.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Row>

      <Row label="Earlier">
        <ul>
          {earlier.map((e) => (
            <li key={e.title} className="grid gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-[5rem_1fr] lg:grid-cols-[6rem_1fr]">
              <span className="text-dim">{e.year}</span>
              <span>
                <span className="font-medium">{e.title}.</span> <span className="text-mid">{e.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </Row>

      <Row label="Beliefs">
        <ol className="pt-4">
          {beliefs.map((b, i) => (
            <li key={b} className="grid grid-cols-[2.5rem_1fr] py-1.5 text-[1.2rem] tracking-[-0.005em] sm:grid-cols-[5rem_1fr] sm:text-[1.3rem] lg:grid-cols-[6rem_1fr]">
              <span className="text-dim tabular-nums">{i + 1}</span>
              <span>{b}</span>
            </li>
          ))}
        </ol>
      </Row>

      <Row label="Recognition">
        <dl className="grid gap-x-6 gap-y-5 pt-4 sm:grid-cols-2">
          {record.map((r) => (
            <div key={r.what}>
              <dt className="font-medium">{r.what}</dt>
              <dd className="text-mid">{r.detail}</dd>
            </div>
          ))}
        </dl>
      </Row>

      <Row id="contact" label="Contact">
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-block text-[1.65rem] leading-tight font-medium tracking-[-0.03em] break-all hover:underline hover:decoration-2 hover:underline-offset-[6px] sm:text-[2.6rem]"
        >
          {profile.email}
        </a>
        <p className="mt-4 max-w-[34rem] text-mid">If you&apos;re building something in defense, I&apos;d like to hear about it.</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={profile.github} className="u">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} className="u">
              LinkedIn
            </a>
          </li>
          <li>
            <Link href="/resume" className="u">
              Resume
            </Link>
          </li>
        </ul>
      </Row>
    </>
  );
}
