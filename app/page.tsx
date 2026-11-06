import Link from "next/link";
import { Cover } from "@/components/cover";
import { Row } from "@/components/row";
import { about, beliefs, earlier, flags, profile, projects, proof, record, why } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Cover>
        <div className="cover-statement my-auto">
          <h1 className="text-[clamp(2.75rem,min(6.2vw,12svh),7rem)] leading-[0.98] font-semibold tracking-[-0.045em]">
            {profile.statement.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-[5svh] max-w-[30ch] text-[clamp(1.25rem,2vw,1.85rem)] leading-[1.25] tracking-[-0.015em] text-mid">
            {profile.next}
          </p>
        </div>
        <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-5 border-t border-fg pt-4 md:grid-cols-4">
          {proof
            .filter((x) => !x.nsa || flags.showNSA)
            .map((x) => (
              <div key={x.org}>
                <dt className="font-medium">{x.org}</dt>
                <dd className="text-mid">{x.role}</dd>
                <dd className="text-dim tabular-nums">{x.when}</dd>
              </div>
            ))}
        </dl>
      </Cover>

      <Row id="about" label="About">
        <div className="max-w-[38rem] space-y-5 pt-4 text-[1.2rem] leading-[1.5] tracking-[-0.005em] sm:text-[1.3rem]">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Row>

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
