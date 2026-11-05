"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/site";

export function SiteHeader({ hasWriting }: { hasWriting: boolean }) {
  const pathname = usePathname();
  const items = [
    { href: "/#work", label: "Work", active: pathname.startsWith("/work") },
    ...(hasWriting ? [{ href: "/writing", label: "Writing", active: pathname.startsWith("/writing") }] : []),
    { href: "/resume", label: "Resume", active: pathname.startsWith("/resume") },
    { href: "/#contact", label: "Contact", active: false, wideOnly: true },
  ];

  return (
    <header className="grid grid-cols-2 gap-x-6 border-b border-fg py-5 md:grid-cols-12 print:hidden">
      <Link href="/" className="font-semibold md:col-span-3">
        {profile.name}
      </Link>
      <p className="hidden text-dim md:col-span-5 md:block">{profile.role}</p>
      <nav aria-label="Main" className="flex justify-end gap-4 sm:gap-6 md:col-span-4">
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
