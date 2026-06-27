import { BadgePercent, CalendarClock, Gift, Sparkles } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { contacts } from "@/data/contacts";
import { MetrikaGoalLink } from "@/components/MetrikaGoalLink";

const offers = [
  {
    title: "Первое посещение",
    value: "-20%",
    text: "Познакомимся: мастер оценит шерсть питомца, подскажет домашний уход и поможет ему привыкнуть к студии.",
    Icon: Gift
  },
  {
    title: "Регулярный груминг",
    value: "-10%",
    text: "При визитах не реже одного раза в 5 недель поддерживать красоту проще, а процедура проходит быстрее.",
    Icon: CalendarClock
  }
];

export function PromoOffers() {
  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] bg-mint-dark p-6 text-white shadow-soft md:p-8">
          <div className="absolute -right-10 -top-16 h-44 w-44 rounded-full bg-mint/30" />
          <div className="absolute bottom-4 right-10 hidden text-coral-soft md:block">
            <Sparkles size={42} aria-hidden />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold">
                <BadgePercent size={17} aria-hidden />
                Специальные предложения
              </div>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Забота выгоднее, когда она регулярная
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {offers.map(({ title, value, text, Icon }) => (
                <article key={title} className="rounded-[24px] bg-white p-5 text-ink shadow-card">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-mint text-mint-dark">
                      <Icon size={22} aria-hidden />
                    </div>
                    <span className="text-4xl font-semibold text-coral">{value}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
                </article>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <BookingButton label="Записаться со скидкой" />
              <MetrikaGoalLink
                href={contacts.telegram}
                goal="promo_conditions_click"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-coral px-5 text-sm font-semibold text-white shadow-card transition hover:bg-[#f35f4b]"
              >
                Уточнить условия
              </MetrikaGoalLink>
              <p className="max-w-64 text-xs leading-5 text-white/70">
                Скидки не суммируются с другими акциями. Итоговую стоимость и применимость
                предложения подтвердит администратор.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
