"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/site";

export function SiteHeader({ hasWriting }: { hasWriting: boolean }) {
  const pathname = usePathname();
  const items = [
    { href: "/#about", label: "About", active: false },
    { href: "/#work", label: "Work", active: pathname.startsWith("/work") },
    ...(hasWriting ? [{ href: "/writing", label: "Writing", active: pathname.startsWith("/writing") }] : []),
    { href: "/resume", label: "Resume", active: pathname.startsWith("/resume") },
    { href: "/#contact", label: "Contact", active: false, wideOnly: true },
  ];

  return (
    <header className="sticky top-0 z-20 grid h-16 grid-cols-2 items-center gap-x-6 border-b border-fg bg-bg md:grid-cols-12 print:hidden">
      <Link href="/" className="font-semibold md:col-span-3">
        {profile.name}
      </Link>
      {/* Hidden under the home page's opening screen until you scroll past it. */}
      <p className="tagline hidden truncate text-dim lg:col-span-6 lg:block">{profile.statement.join(" ")}</p>
      <nav aria-label="Main" className="flex justify-end gap-4 sm:gap-6 md:col-span-3 md:col-start-10">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={`hover-u ${item.active ? "underline underline-offset-[3px]" : ""} ${"wideOnly" in item ? "hidden sm:inline" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
