import fs from "node:fs";
import path from "node:path";
import { flags, type Media } from "@/lib/site";

const VIDEO = /\.(mp4|webm|mov)$/i;

function hasFile(file?: string) {
  return !!file && fs.existsSync(path.join(process.cwd(), "public", "media", file));
}

// A photo, video or YouTube embed from public/media. Until the file exists it
// shows a plain gray frame (or nothing, once showPendingMedia is off).
export function Photo({ media, className = "", caption = true }: { media: Media; className?: string; caption?: boolean }) {
  const ready = !!media.youtube || hasFile(media.file);
  if (!ready && !flags.showPendingMedia) return null;

  return (
    <figure className={`min-w-0 ${className}`}>
      <div className="relative overflow-hidden bg-ph" style={{ aspectRatio: media.aspect }}>
        {media.youtube ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${media.youtube}`}
            title={media.alt}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : ready && VIDEO.test(media.file!) ? (
          <video
            src={`/media/${media.file}`}
            aria-label={media.alt}
            controls
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : ready ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={`/media/${media.file}`} alt={media.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <span className="absolute bottom-3 left-3 text-xs text-dim">
            {media.file ?? "YouTube id"} · not added yet
          </span>
        )}
      </div>
      {caption && media.caption && <figcaption className="mt-2 text-[0.8rem] text-dim">{media.caption}</figcaption>}
    </figure>
  );
}
