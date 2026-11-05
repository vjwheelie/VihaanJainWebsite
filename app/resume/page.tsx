import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";
import { flags, profile, resume } from "@/lib/site";

export const metadata: Metadata = { title: "Resume" };

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-x-6 gap-y-3 pt-14 md:grid-cols-12 print:grid-cols-12 print:pt-4">
      <h2 className="text-dim md:col-span-3 md:pt-3 print:col-span-2 print:pt-1.5">{label}</h2>
      <div className="border-t border-fg md:col-span-9 print:col-span-10">{children}</div>
    </section>
  );
}

// Printable resume. Same data as the PDF, minus anything that shouldn't be public.
export default function Resume() {
  const experience = resume.experience.filter((e) => !e.nsa || flags.showNSA);

  return (
    <div className="pt-[10vh] print:pt-0 print:text-[9pt] print:leading-snug">
      <div className="grid gap-x-6 md:grid-cols-12 print:grid-cols-12">
        <div className="md:col-span-9 md:col-start-4 print:col-span-12 print:col-start-1">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-[2.4rem] leading-none font-medium tracking-[-0.03em] print:text-[20pt]">{profile.name}</h1>
            <PrintButton />
          </div>
          <p className="mt-3 text-mid">
            {profile.location} · {profile.email} · linkedin.com/in/vihaan-jain1 · github.com/vjwheelie
          </p>
        </div>
      </div>

      <Block label="Education">
        <Entry title={resume.education.school} sub={resume.education.place} dates={resume.education.dates} lines={resume.education.lines} />
      </Block>

      <Block label="Experience">
        {experience.map((e) => (
          <Entry key={e.org} title={e.org} sub={e.title} dates={e.dates} lines={e.bullets} />
        ))}
      </Block>

      <Block label="Leadership">
        {resume.leadership.map((l) => (
          <Entry key={l.org} title={l.org} sub={l.title} dates={l.dates} lines={[l.line]} />
        ))}
      </Block>

      <Block label="Skills">
        <dl className="pt-3">
          {resume.skills.map((s) => (
            <div key={s.label} className="grid gap-x-6 py-1 sm:grid-cols-[11rem_1fr]">
              <dt className="font-medium">{s.label}</dt>
              <dd className="text-mid">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Block>
    </div>
  );
}

function Entry({ title, sub, dates, lines }: { title: string; sub: string; dates: string; lines: string[] }) {
  return (
    <div className="break-inside-avoid border-b border-line py-4 last:border-0 print:py-2">
      <div className="flex justify-between gap-6">
        <p className="font-medium">{title}</p>
        <p className="shrink-0 text-dim tabular-nums">{dates}</p>
      </div>
      <p className="text-mid">{sub}</p>
      {lines.length > 0 && (
        <ul className="mt-2 space-y-1 print:mt-1 print:space-y-0.5">
          {lines.map((l) => (
            <li key={l} className="grid grid-cols-[1rem_1fr]">
              <span className="text-dim">–</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
