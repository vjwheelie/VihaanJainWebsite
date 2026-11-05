import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Posts are markdown files in content/writing. Frontmatter:
//   title, date (YYYY-MM-DD), summary, draft (true hides it from the live site)

const DIR = path.join(process.cwd(), "content", "writing");

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  draft: boolean;
  body: string;
};

function parse(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
    }
  }
  return {
    slug: file.replace(/\.md$/, ""),
    title: meta.title ?? file,
    date: meta.date ?? "",
    summary: meta.summary ?? "",
    draft: meta.draft === "true",
    body: match ? match[2] : raw,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(DIR)) return [];
  const showDrafts = process.env.NODE_ENV !== "production";
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parse)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getPosts().find((p) => p.slug === slug);
}

export function renderMarkdown(md: string) {
  return marked.parse(md, { async: false }) as string;
}

export function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
