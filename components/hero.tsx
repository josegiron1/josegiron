import type { Messages } from "@/lib/i18n";
import { Thing } from "@/components/reddit-thing";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  return (
    <Thing
      rank={1}
      title={messages.hero.name}
      href="#about"
      domain={messages.listing.self}
      meta={messages.hero.kicker}
      headingLevel="h1"
    >
      <p>{messages.hero.lede}</p>
    </Thing>
  );
}
