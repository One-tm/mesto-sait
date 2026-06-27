import { ArrowRight, Bell, Images, Send, Sparkles } from "lucide-react";
import { contacts } from "@/data/contacts";
import { MetrikaGoalLink } from "@/components/MetrikaGoalLink";

const channelHighlights = [
  {
    label: "Работы мастеров",
    Icon: Images
  },
  {
    label: "Советы по уходу",
    Icon: Sparkles
  },
  {
    label: "Свободные окна",
    Icon: Bell
  }
];

export function TelegramChannel() {
  return (
    <section className="py-8 md:py-10" aria-labelledby="telegram-channel-title">
      <div className="container">
        <div className="rounded-[32px] border border-line bg-white p-6 shadow-soft md:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-paper-mint text-mint-dark">
                <Send size={28} aria-hidden />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-dark">
                  Telegram-канал
                </p>
                <h2 id="telegram-channel-title" className="mt-2 text-3xl font-semibold text-ink">
                  Больше заботы в{" "}
                  <MetrikaGoalLink
                    href={contacts.telegramChannel}
                    goal="telegram_channel_click"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded-lg text-mint-dark transition hover:text-coral"
                  >
                    @mestogroom
                  </MetrikaGoalLink>
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  Показываем работы мастеров, делимся советами по уходу и публикуем свободные окна для записи.
                </p>
              </div>
            </div>

            <MetrikaGoalLink
              href={contacts.telegramChannel}
              goal="telegram_channel_click"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-coral px-6 text-base font-semibold text-white shadow-card transition hover:bg-[#f35f4b] sm:w-auto"
            >
              Подписаться
              <ArrowRight size={18} aria-hidden />
            </MetrikaGoalLink>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {channelHighlights.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 text-sm font-semibold text-ink">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-mint-dark">
                  <Icon size={17} aria-hidden />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
