import { MessageCircle } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { contacts } from "@/data/contacts";
import { MetrikaGoalLink } from "@/components/MetrikaGoalLink";

export function FinalCTA() {
  return (
    <section className="pb-16">
      <div className="container rounded-[32px] bg-paper-mint p-8 md:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-mint-dark">
              Онлайн-запись
            </p>
            <h2 className="text-3xl font-semibold text-ink md:text-5xl">
              Приходите знакомиться — будем рады вам и вашему питомцу!
            </h2>
            <p className="mt-4 text-lg text-muted">Это быстро и удобно.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <BookingButton size="lg" />
            <MetrikaGoalLink
              href={contacts.telegram}
              goal="contact_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-mint-dark transition hover:border-mint hover:bg-paper-mint"
            >
              <MessageCircle size={18} aria-hidden />
              Написать в Telegram
            </MetrikaGoalLink>
            <MetrikaGoalLink
              href={contacts.max}
              goal="contact_max"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-mint-dark transition hover:border-mint hover:bg-paper-mint"
            >
              <MessageCircle size={18} aria-hidden />
              Написать в MAX
            </MetrikaGoalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
