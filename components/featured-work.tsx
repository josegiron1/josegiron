import type { Messages } from "@/lib/i18n";
import { liding, qrStudio } from "@/lib/site";
import { Thing } from "@/components/reddit-thing";

type FeaturedWorkProps = {
  messages: Messages;
};

export function FeaturedWork({ messages }: FeaturedWorkProps) {
  const work = messages.work;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-4"
    >
      <h2 id="work-heading" className="sr-only">
        {work.kicker}
      </h2>
      <Thing
        rank={2}
        title={work.liding.title}
        href={liding.href}
        domain={liding.domain}
        meta={work.liding.tagline}
        external
        thumb={{
          src: liding.thumb.src,
          alt: work.liding.posterAlt,
          width: liding.thumb.width,
          height: liding.thumb.height,
        }}
      >
        <p>{work.liding.body}</p>
        <p className="tagline mt-1">
          {work.liding.role}{" "}
          <a href={liding.href} target="_blank" rel="noopener noreferrer">
            {work.liding.cta}
          </a>
        </p>
        <p className="tagline mt-1" translate="no">
          {liding.stack.join(" · ")}
        </p>
      </Thing>
      <Thing
        rank={3}
        title={work.qr.title}
        href={qrStudio.href}
        domain={qrStudio.domain}
        meta={work.qr.tagline}
        external
        thumb={{
          src: qrStudio.thumb.src,
          alt: work.qr.posterAlt,
          width: qrStudio.thumb.width,
          height: qrStudio.thumb.height,
        }}
      >
        <p>{work.qr.body}</p>
        <p className="tagline mt-1">
          {work.qr.role}{" "}
          <a href={qrStudio.href} target="_blank" rel="noopener noreferrer">
            {work.qr.cta}
          </a>
        </p>
        <p className="tagline mt-1" translate="no">
          {qrStudio.stack.join(" · ")}
        </p>
      </Thing>
    </section>
  );
}
