import type { Messages } from "@/lib/i18n";
import { site } from "@/lib/site";

type SiteSidebarProps = {
  messages: Messages;
};

export function SiteSidebar({ messages }: SiteSidebarProps) {
  return (
    <aside className="w-full shrink-0 md:w-[300px]">
      <div className="side-box">
        <p className="text-[16px] font-bold" translate="no">
          jose
        </p>
        <p className="mt-1 text-[12px] leading-[16px]">{messages.hero.lede}</p>
        <p className="tagline mt-2">{messages.footer.location}</p>
      </div>
      <div className="side-box">
        <a className="reddit-btn w-full" href={`mailto:${site.email}`}>
          {messages.sidebar.submit}
        </a>
        <ul className="mt-3 space-y-1">
          <li>
            <a href={`mailto:${site.email}`}>{messages.contact.email}</a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {messages.contact.github}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {messages.contact.linkedin}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
