import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/site";
import { getPosts } from "@/lib/writing";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: profile.description,
  openGraph: {
    title: profile.name,
    description: `${profile.statement.join(" ")} ${profile.next}`,
    url: profile.site,
    siteName: profile.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: profile.name, description: `${profile.statement.join(" ")} ${profile.next}` },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0d" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const hasWriting = getPosts().length > 0;
  return (
    <html lang="en" className={hanken.variable}>
      <body className="antialiased">
        <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
          <SiteHeader hasWriting={hasWriting} />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
