import type { ReactNode } from "react";
import Image from "next/image";

type ThingThumb = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ThingProps = {
  rank?: number;
  title: string;
  href?: string;
  domain: string;
  meta: string;
  thumb?: ThingThumb;
  children?: ReactNode;
  headingLevel?: "h1" | "h2" | "h3";
  headingId?: string;
  external?: boolean;
};

function VoteCol() {
  return (
    <div
      className="flex w-6 shrink-0 flex-col items-center pt-1"
      aria-hidden="true"
    >
      <span className="vote-up" />
      <span className="vote-down" />
    </div>
  );
}

export function Thing({
  rank,
  title,
  href,
  domain,
  meta,
  thumb,
  children,
  headingLevel: Heading = "h3",
  headingId,
  external = false,
}: ThingProps) {
  const titleNode = href ? (
    <a
      href={href}
      className="title-link"
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {title}
    </a>
  ) : (
    <span className="title-link">{title}</span>
  );

  return (
    <article className="mb-2 flex gap-1.5 py-1">
      {rank !== undefined ? (
        <span
          className="w-5 shrink-0 pt-0.5 text-right text-sm font-bold text-[#c6c6c6]"
          aria-hidden="true"
        >
          {rank}
        </span>
      ) : null}
      <VoteCol />
      {thumb ? (
        <a
          href={href}
          className="shrink-0"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : undefined)}
        >
          <Image
            src={thumb.src}
            alt={thumb.alt}
            width={thumb.width}
            height={thumb.height}
            className="h-[70px] w-[70px] border border-[#ccc] object-cover"
          />
        </a>
      ) : null}
      <div className="min-w-0 pt-0.5">
        <Heading id={headingId} className="text-[16px] font-normal leading-5">
          {titleNode}{" "}
          <span className="domain">({domain})</span>
        </Heading>
        <p className="tagline mt-0.5">{meta}</p>
        {children ? (
          <div className="mt-1 max-w-[60em] text-[12px] leading-[18px] text-foreground">
            {children}
          </div>
        ) : null}
      </div>
    </article>
  );
}
