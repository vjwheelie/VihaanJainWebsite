import { profile } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-32 grid gap-x-6 gap-y-1 border-t border-fg pt-5 pb-10 text-dim md:grid-cols-12 print:hidden">
      <p className="text-fg md:col-span-3">{profile.name}</p>
      <p className="md:col-span-5">{profile.location}</p>
      <p className="md:col-span-4 md:text-right">© {new Date().getFullYear()}</p>
    </footer>
  );
}
