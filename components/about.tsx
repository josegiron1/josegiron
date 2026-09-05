import type { Messages } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Thing } from "@/components/reddit-thing";

type AboutProps = {
  messages: Messages;
};

export function About({ messages }: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-4">
      <Thing
        rank={4}
        title={messages.about.title}
        href="#about"
        domain={messages.listing.self}
        meta={messages.about.kicker}
        headingLevel="h2"
        headingId="about-heading"
      >
        <div className="space-y-2">
          <p>{messages.about.p1}</p>
          <p>{messages.about.p2}</p>
          <p>{messages.about.p3}</p>
        </div>
      </Thing>
    </section>
  );
}

type ContactProps = {
  messages: Messages;
};

export function Contact({ messages }: ContactProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-4"
    >
      <Thing
        rank={5}
        title={messages.contact.title}
        href={`mailto:${site.email}`}
        domain={messages.listing.self}
        meta={messages.contact.kicker}
        headingLevel="h2"
        headingId="contact-heading"
      >
        <p>{messages.contact.body}</p>
        <ul className="mt-1">
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              {site.github.replace("https://", "")}
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              {site.linkedin.replace("https://www.", "")}
            </a>
          </li>
        </ul>
      </Thing>
    </section>
  );
}
